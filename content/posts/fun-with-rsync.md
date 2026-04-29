---
author: Lehman
title: Fun With rsync
description: We don't need no stinking Time Machine!
publishedDate: 2026-04-28
tags:
  - information-technology
  - software-development
showToC: true
---

## Introduction

Our computer equipment is getting pretty ancient, and I seriously need to get the wife off of the God-awful Windows 11 machine, saturated with all the [Dell](https://www.dell.com/en-us) bloatware.

And as much as I'm lusting after [Ubuntu-centric](https://ubuntu.com) hardware from [framework](https://frame.work) and [system76](https://system76.com), I can't justify the costs. Also, some research indicates that the "custom" hardware often needs tweaks on the firmware, drivers, printers and audio settings, plus fan noise, possible heat issues, bah, blah, blah. This all sounds so 1990's. The Mac OS on Mac hardware should be much less painful. And it will be very convenient to be using the same OS on both machines. Maybe. I hope.

And so, with a bit of reluctance, I think the best upgrade path will be an [iMac](https://www.apple.com/imac/) for the wife and a [Mac mini](https://www.apple.com/mac-mini/) for yours truly. I can save some bucks with the mini because I can use my current Mac keyboard, my [Logitech](https://www.logitech.com/en-us) mouse, and I can re-use the old [Dell](https://www.dell.com/en-us) monitor. Maybe. I hope.

Having said all that, I'll probably continue to maintain this web site in a [Ubuntu](https://ubuntu.com) [VMWare Fusion](https://knowledge.broadcom.com/external/article/368667/download-and-license-vmware-desktop-hype.html) image running on the mini, and keep the [homebrew](https://brew.sh) package installs on the Mac OS to a minimum. Maybe. I hope.

So with that in mind, and to run yet another AI software development experiment, I decided to let [Claude](https://claude.ai) build [rsync](https://rsync.samba.org) backup scripts for Mac OS and Ubuntu 24.04, sending the output to an external USB portable disk.

Note: I know about Apple's [Time Machine](https://support.apple.com/en-us/104984). But it requires a dedicated external drive with 2x the disk space of the device's internal drive, and Time Machine wants exclusive access to the drive. I want more flexibiliy than that.

## Why rsync

According to the [rsync web site](https://rsync.samba.org) (samba - there's a blast from the Linux past...), rsync has been around since 1996. It has a Byzantine set of options, making it a highly configurable backup tool. It's available on all flavors of Linux, but of course Apple has to be "exceptional". Due to some kinda [screwball licensing issues](https://appleinsider.com/inside/macos-sequoia/tips/what-you-should-know-about-apples-switch-from-rsync-to-openrsync), rsync on Mac OS is version 2.6.9 - the latest version is 3.4.2 - terrific. So when we finally get new hardware (and an up-to-date OS), I'll have to re-test the Mac script.

The other nice thing about rsync is that it's really just a sophisticated file transfer protocol. So if you accidently stomp on a file you can simply go to your rsync backup volume and copy the file back to the original location.

## rsync for Mac

I neglected to keep a copy of the actual prompt I sent to Claude - it was along the lines of "create a zsh script that uses rsync to back up $HOME on a Mac OS".

Note: The script is long, so click on the "collapsed lines" line to toggle visibility of the entire script.

```zsh title="Claude zsh rsync script results" ins={"Added by me":18-22, 29-31, 107-116} collapse={10-267}
#!/usr/bin/env zsh
# =============================================================================
# backup.zsh — rsync backup script for macOS (zsh)
# =============================================================================
# Usage:
#   ./backup.zsh              Run backup using settings below
#   ./backup.zsh --dry-run    Preview what would be synced (no changes made)
#   ./backup.zsh --help       Show this help message
# =============================================================================

setopt errexit nounset pipefail

# -----------------------------------------------------------------------------
# CONFIGURATION — edit these to match your setup
# -----------------------------------------------------------------------------

# Name of your external drive (as it appears in /Volumes)

DRIVE_NAME="Seagate Backup Plus Drive/"

# Destination folder on the external drive
DEST_SUBFOLDER="Backups/$(hostname -s)"

# Source directories to back up (add or remove as needed)
SOURCES=(
  "$HOME/Desktop"
  "$HOME/Documents"
  "$HOME/Pictures"

  "$HOME/Sites"
  "$HOME/Library/ApplicationSupport/Firefox/Profiles"
  # "$HOME/Music"       # uncomment to include
  # "$HOME/Movies"      # uncomment to include
)

# Log file location
LOG_DIR="$HOME/Library/Logs/rsync-backup"
LOG_FILE="$LOG_DIR/backup-$(date +%Y-%m-%d).log"

# How many days of log files to keep
LOG_RETENTION_DAYS=30

# Notification sound when backup completes (set to "" to disable)
# Options: Glass, Ping, Purr, Sosumi, Tink, Basso, Blow, Bottle, Frog, Funk, Hero, Morse, Pop, Submarine
SUCCESS_SOUND="Glass"
FAILURE_SOUND="Basso"

# -----------------------------------------------------------------------------
# INCLUDES — patterns to always include (evaluated before excludes)
# Useful for pulling in specific files inside otherwise-excluded directories.
# Order matters — first match wins.
# -----------------------------------------------------------------------------
INCLUDES=(
  # "*.pdf"              # always include PDFs even inside excluded dirs
  # "important-file.txt"
)

# -----------------------------------------------------------------------------
# EXCLUDES — patterns to skip during backup
# "foo/" matches a directory named foo, "*.ext" matches by extension
# -----------------------------------------------------------------------------
EXCLUDES=(
  # macOS system junk
  "__MACOSX"
  ".DS_Store"
  ".Spotlight-V100"
  ".Trash"
  ".fseventsd"
  ".TemporaryItems"

  # Development artifacts (likely large, reproducible)
  "node_modules/"
  ".git/"
  "vendor/bundle/"
  ".bundle/"
  "tmp/"
  "log/"
  ".byebug_history"

  # Python artifacts
  "__pycache__/"
  "*.pyc"
  ".venv/"
  "venv/"
  ".pytest_cache/"

  # Build output
  "dist/"
  "build/"
  ".next/"
  ".nuxt/"
  "coverage/"

  # Editor/IDE files
  ".idea/"
  ".vscode/"
  "*.swp"
  "*.swo"

  # Large media you might not want backed up here
  # "*.iso"
  # "*.dmg"

  # Add your own below:
  # "some-big-folder/"
  # "/.*"

  ".config/"
  ".cups/"
  ".gem/"
  ".local/"
  ".npm/"
  "Photo Booth Library/"
  "Photos Library.photoslibrary/"
  "iPhoto Library.photolibrary/"
  "Virtual Machines.localized/"
)

# -----------------------------------------------------------------------------
# RSYNC OPTIONS
# -----------------------------------------------------------------------------
# -a  archive mode (recursive, preserves symlinks, permissions, times, owner)
# -v  verbose
# -h  human-readable sizes
# --delete          remove files from dest that no longer exist in source
# --delete-excluded remove previously backed-up files that are now excluded
# --progress        show per-file transfer progress
# --stats           show summary stats at the end
RSYNC_OPTS=(
  -avh
  --delete
  --delete-excluded
  --progress
  --stats
  --human-readable
)

# =============================================================================
# SCRIPT — you shouldn't need to edit below this line
# =============================================================================

DRY_RUN=false
DEST="/Volumes/$DRIVE_NAME/$DEST_SUBFOLDER"

# ---- argument parsing -------------------------------------------------------
for arg in "$@"; do
  case $arg in
    --dry-run) DRY_RUN=true ;;
    --help)
      grep '^#' "$0" | grep -v '^#!/' | sed 's/^# \{0,1\}//'
      exit 0
      ;;
    *)
      echo "Unknown argument: $arg" >&2
      exit 1
      ;;
  esac
done

# ---- helpers ----------------------------------------------------------------
log() { echo "[$(date '+%Y-%m-%d %H:%M:%S')] $*" | tee -a "$LOG_FILE"; }

notify() {
  local title=$1 message=$2 sound=${3:-""}
  osascript -e "display notification \"$message\" with title \"$title\"" 2>/dev/null || true
  [[ -n "$sound" ]] && afplay "/System/Library/Sounds/$sound.aiff" 2>/dev/null || true
}

# zsh: printf with brace expansion works fine, but use repeat for clarity
hr() { log "$(printf '─%.0s' {1..60})"; }

# ---- preflight checks -------------------------------------------------------
preflight() {
  if ! command -v rsync &>/dev/null; then
    echo "rsync not found. Install via: brew install rsync" >&2
    exit 1
  fi

  if [[ ! -d "/Volumes/$DRIVE_NAME" ]]; then
    echo "Drive '$DRIVE_NAME' is not mounted at /Volumes/$DRIVE_NAME" >&2
    echo "Connect the drive and try again." >&2
    notify "Backup Failed" "Drive '$DRIVE_NAME' not found" "$FAILURE_SOUND"
    exit 1
  fi

  for src in "${SOURCES[@]}"; do
    if [[ ! -d "$src" ]]; then
      echo "Source directory not found: $src" >&2
      exit 1
    fi
  done

  if [[ "$DRY_RUN" == false ]]; then
    mkdir -p "$DEST"
    mkdir -p "$LOG_DIR"
  fi
}

# ---- build rsync args -------------------------------------------------------
# In zsh, arrays don't word-split when unquoted in command position,
# so we build a single array and expand it with "${rsync_args[@]}" below.
build_args() {
  # Declare in the caller's scope via a nameref-style typeset
  # zsh: return arrays by setting a global
  typeset -ga rsync_args
  rsync_args=("${RSYNC_OPTS[@]}")

  [[ "$DRY_RUN" == true ]] && rsync_args+=(--dry-run)

  for pattern in "${INCLUDES[@]}"; do
    rsync_args+=(--filter="+ $pattern")
  done

  for pattern in "${EXCLUDES[@]}"; do
    rsync_args+=(--exclude="$pattern")
  done
}

# ---- main -------------------------------------------------------------------
main() {
  preflight

  mkdir -p "$LOG_DIR"
  touch "$LOG_FILE"

  hr
  log "Starting backup$([[ "$DRY_RUN" == true ]] && echo ' (DRY RUN)' || echo '')"
  log "Destination: $DEST"
  log "Sources: ${SOURCES[*]}"
  hr

  # Build into global array rsync_args (zsh can't return arrays from functions)
  build_args

  local exit_code=0

  for src in "${SOURCES[@]}"; do
    log "Syncing: $src"
    local dest_dir="$DEST/$(basename "$src")"
    [[ "$DRY_RUN" == false ]] && mkdir -p "$dest_dir"

    # zsh: "${rsync_args[@]}" expands cleanly — no word-splitting surprises
    if rsync "${rsync_args[@]}" "$src/" "$dest_dir/" 2>&1 | tee -a "$LOG_FILE"; then
      log "✓ Done: $src"
    else
      log "✗ Error syncing: $src"
      exit_code=1
    fi
    hr
  done

  if [[ "$DRY_RUN" == false ]]; then
    find "$LOG_DIR" -name "backup-*.log" -mtime +"$LOG_RETENTION_DAYS" -delete 2>/dev/null || true
  fi

  if [[ $exit_code -eq 0 ]]; then
    log "Backup complete ✓"
    notify "Backup Complete" "Synced to $DRIVE_NAME" "$SUCCESS_SOUND"
  else
    log "Backup finished with errors ✗"
    notify "Backup Errors" "Check log: $LOG_FILE" "$FAILURE_SOUND"
  fi

  exit $exit_code
}

main
```

Lotsa bells and whistles in this one. I'm especially amused by the cute notify function. The EXCLUDES list was pretty comprehensive, and I added some additional filtering of the Pictures directory, and also added the Firefox Profiles to the backup list. The script ran just fine, so this one's a wrap. I'll add this to both of the new Macs and add an external drive to each machine to act as the backup repository.

## rsync for Ubuntu

I told Claude to create a rsync script using the prompt shown below:

![claude prompt and results](@/assets/images/posts/claude-rsync-script-results.webp)
_Claude prompt and results_

Note: The script is long, so click on the "collapsed lines" line to toggle visibility of the entire script.

```bash title="Claude rsync bash script results" ins={"Added by me":55-57, 115-116} collapse={19-256}
#!/usr/bin/env bash
# =============================================================================
# backup_home.sh — $HOME rsync backup script
# =============================================================================
# Usage:
#   ./backup_home.sh                        # interactive: prompts for destination
#   ./backup_home.sh /mnt/backup            # backup to local path
#   ./backup_home.sh user@host:/mnt/backup  # backup to remote via SSH
#   ./backup_home.sh --dry-run /mnt/backup  # preview without making changes
#
# Features:
#   - Incremental backups using hard links (--link-dest)
#   - Timestamped snapshot directories
#   - Exclusion of noisy/transient dirs (.cache, node_modules, etc.)
#   - Rotating log file
#   - Lock file to prevent concurrent runs
#   - Summary report on completion
# =============================================================================

set -euo pipefail

# ── Configuration ─────────────────────────────────────────────────────────────

SOURCE="${HOME}/"
LOG_DIR="${HOME}/.local/share/backup_home"
LOG_FILE="${LOG_DIR}/backup.log"
LOCK_FILE="/tmp/backup_home.lock"
TIMESTAMP=$(date +"%Y-%m-%dT%H-%M-%S")
MAX_LOG_LINES=5000 # rotate log when it exceeds this many lines

# Directories/patterns to exclude (relative to $HOME)
EXCLUDES=(
  ".cache"
  ".local/share/Trash"
  ".thumbnails"
  ".gvfs"
  ".dbus"
  ".Xauthority"
  "node_modules"
  ".npm"
  ".yarn/cache"
  "__pycache__"
  "*.pyc"
  ".venv"
  "venv"
  ".bundle"
  "vendor/bundle"
  ".gem"
  "tmp"
  "*.tmp"
  "*.swp"
  "*.swo"
  ".DS_Store"
  "Downloads" # comment out if you want Downloads backed up

  "go"
  "SQLiteStudio"
)

# ── Colours ───────────────────────────────────────────────────────────────────

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
BOLD='\033[1m'
RESET='\033[0m'

# ── Helpers ───────────────────────────────────────────────────────────────────

log() {
  local level="$1"
  shift
  local msg="$*"
  local ts
  ts=$(date +"%Y-%m-%d %H:%M:%S")
  echo "${ts} [${level}] ${msg}" >>"${LOG_FILE}"
  case "${level}" in
  INFO) echo -e "${CYAN}[INFO]${RESET}  ${msg}" ;;
  OK) echo -e "${GREEN}[OK]${RESET}    ${msg}" ;;
  WARN) echo -e "${YELLOW}[WARN]${RESET}  ${msg}" ;;
  ERROR) echo -e "${RED}[ERROR]${RESET} ${msg}" >&2 ;;
  esac
}

die() {
  log ERROR "$*"
  exit 1
}

rotate_log() {
  if [[ -f "${LOG_FILE}" ]]; then
    local lines
    lines=$(wc -l <"${LOG_FILE}")
    if ((lines > MAX_LOG_LINES)); then
      local archive="${LOG_FILE%.log}_${TIMESTAMP}.log.gz"
      gzip -c "${LOG_FILE}" >"${archive}"
      : >"${LOG_FILE}"
      log INFO "Log rotated → ${archive}"
    fi
  fi
}

cleanup() {
  rm -f "${LOCK_FILE}"
}

require_cmd() {
  command -v "$1" &>/dev/null || die "'$1' is not installed. Install it with: sudo apt install $1"
}

# ── Parse arguments ───────────────────────────────────────────────────────────

DRY_RUN=false

DESTINATION="/media/clehma203/Seagate Backup Plus Drive/Backups/Ubuntu"

while [[ $# -gt 0 ]]; do
  case "$1" in
  --dry-run | -n)
    DRY_RUN=true
    shift
    ;;
  --help | -h)
    grep '^#' "$0" | grep -v '#!/' | sed 's/^# \?//'
    exit 0
    ;;
  -*) die "Unknown option: $1" ;;
  *)
    DESTINATION="$1"
    shift
    ;;
  esac
done

# ── Prompt for destination if not provided ────────────────────────────────────

if [[ -z "${DESTINATION}" ]]; then
  echo -e "${BOLD}Where should the backup be stored?${RESET}"
  echo "  Examples:"
  echo "    /mnt/external/backups"
  echo "    user@nas.local:/volume1/backups"
  echo ""
  read -rp "Destination: " DESTINATION
  [[ -z "${DESTINATION}" ]] && die "No destination provided."
fi

# ── Determine snapshot paths ──────────────────────────────────────────────────

# Remote destinations (user@host:/path or host:/path) stay as-is for rsync.
# For local paths we also manage the link-dest rotation ourselves.
IS_REMOTE=false
if [[ "${DESTINATION}" == *:* ]]; then
  IS_REMOTE=true
  DEST_BASE="${DESTINATION%/}"
  DEST_CURRENT="${DEST_BASE}/current"
  DEST_SNAPSHOT="${DEST_BASE}/snapshots/${TIMESTAMP}"
else
  DEST_BASE="${DESTINATION%/}"
  DEST_CURRENT="${DEST_BASE}/current"
  DEST_SNAPSHOT="${DEST_BASE}/snapshots/${TIMESTAMP}"
  mkdir -p "${DEST_SNAPSHOT}" "${LOG_DIR}"
fi

# ── Pre-flight checks ─────────────────────────────────────────────────────────

require_cmd rsync

mkdir -p "${LOG_DIR}"
rotate_log

# Lock file: prevent concurrent runs
if [[ -e "${LOCK_FILE}" ]]; then
  local_pid=$(cat "${LOCK_FILE}" 2>/dev/null || true)
  if kill -0 "${local_pid}" 2>/dev/null; then
    die "Another backup is already running (PID ${local_pid}). Aborting."
  else
    log WARN "Stale lock file found. Removing and continuing."
    rm -f "${LOCK_FILE}"
  fi
fi
echo $$ >"${LOCK_FILE}"
trap cleanup EXIT

# ── Build rsync flags ─────────────────────────────────────────────────────────

RSYNC_OPTS=(
  --archive # -rlptgoD: recursive, preserve links/perms/times/group/owner
  --human-readable
  --info=progress2 # single-line progress (rsync ≥ 3.1)
  --stats
  --delete          # remove files from dest that no longer exist in source
  --delete-excluded # also delete excluded files that somehow ended up in dest
  --one-file-system # don't cross filesystem boundaries
)

# Add exclusions
for excl in "${EXCLUDES[@]}"; do
  RSYNC_OPTS+=(--exclude="${excl}")
done

# Incremental hard-link snapshot: find last snapshot to use as link-dest
if [[ "${IS_REMOTE}" == false ]]; then
  LAST_SNAPSHOT=$(
    find "${DEST_BASE}/snapshots" -maxdepth 1 -mindepth 1 -type d 2>/dev/null |
      sort | tail -n1 || true
  )
  if [[ -n "${LAST_SNAPSHOT}" ]]; then
    RSYNC_OPTS+=(--link-dest="${LAST_SNAPSHOT}")
    log INFO "Hard-linking unchanged files from: ${LAST_SNAPSHOT}"
  fi
fi

if [[ "${DRY_RUN}" == true ]]; then
  RSYNC_OPTS+=(--dry-run)
  log WARN "DRY RUN — no files will be written"
fi

# ── Run backup ────────────────────────────────────────────────────────────────

log INFO "Starting backup of ${SOURCE}"
log INFO "Destination: ${DEST_SNAPSHOT}"
log INFO "Log: ${LOG_FILE}"
echo ""

START_TS=$(date +%s)

if [[ "${IS_REMOTE}" == true ]]; then
  rsync "${RSYNC_OPTS[@]}" "${SOURCE}" "${DEST_SNAPSHOT}" 2>&1 | tee -a "${LOG_FILE}"
else
  rsync "${RSYNC_OPTS[@]}" "${SOURCE}" "${DEST_SNAPSHOT}/" 2>&1 | tee -a "${LOG_FILE}"
fi

RSYNC_EXIT=${PIPESTATUS[0]}
END_TS=$(date +%s)
ELAPSED=$((END_TS - START_TS))

# ── Post-backup: update 'current' symlink (local only) ───────────────────────

if [[ "${IS_REMOTE}" == false && "${DRY_RUN}" == false && "${RSYNC_EXIT}" -eq 0 ]]; then
  ln -sfn "${DEST_SNAPSHOT}" "${DEST_CURRENT}"
  log OK "'current' symlink updated → ${DEST_SNAPSHOT}"
fi

# ── Result ────────────────────────────────────────────────────────────────────

echo ""
if [[ "${RSYNC_EXIT}" -eq 0 ]]; then
  log OK "Backup completed in ${ELAPSED}s"
  [[ "${DRY_RUN}" == true ]] && log WARN "Dry run only — no data was written."
elif [[ "${RSYNC_EXIT}" -eq 24 ]]; then
  # exit 24 = some source files vanished mid-transfer (harmless race)
  log WARN "Backup finished with warnings (some files vanished mid-transfer). Exit: ${RSYNC_EXIT}"
else
  die "Backup failed with rsync exit code ${RSYNC_EXIT}. Check log: ${LOG_FILE}"
fi
```

Again, lots of extra stuff that isn't really needed for a one-man-band backup situation. The EXCLUDES list was good - I would have missed a lot of that. I also added a couple of "custom" excludes to the list. This script also ran without error.

## Conclusion

I could have - and probably should have - built these scripts myself. In [Ruby](https://www.ruby-lang.org/en/). But I wanted something that did not require any extra [apt](https://ubuntu.com/server/docs/how-to/software/package-management/) or [homebrew](https://brew.sh) installations, i.e. I wanted a backup script that would run on a minimally altered OS using the default shell. Done.
