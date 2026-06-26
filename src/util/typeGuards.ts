import type {
  HeaderItem as HeaderItemType,
  NavItem as NavItemType
} from '@/types'

export const isNavItem = (item: HeaderItemType): item is NavItemType =>
  Object.hasOwn(item, 'href')
