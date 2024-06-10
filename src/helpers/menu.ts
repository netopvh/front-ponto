import { MENU_ITEMS, MenuItemTypes, SETTINGS_ITEMS } from '@/constants/menu'

const getMenuItems = (isBottom: boolean) => {
  // NOTE - You can fetch from server and return here as well
  if (isBottom) {
    return MENU_ITEMS.filter((item) => item.isBottom)
  }
  return MENU_ITEMS.filter((item) => !item.isBottom)
}

const getSettingsMenuItems = () => {
  return SETTINGS_ITEMS
}

const findAllParent = (menuItems: MenuItemTypes[], menuItem: MenuItemTypes): string[] => {
  let parents: string[] = []
  const parent = findMenuItem(menuItems, menuItem.parentKey)

  if (parent) {
    parents.push(parent.key)
    if (parent.parentKey) {
      parents = [...parents, ...findAllParent(menuItems, parent)]
    }
  }
  return parents
}

const findMenuItem = (
  menuItems: MenuItemTypes[] | undefined,
  menuItemKey: MenuItemTypes['key'] | undefined
): MenuItemTypes | null => {
  if (menuItems && menuItemKey) {
    for (let i = 0; i < menuItems.length; i++) {
      if (menuItems[i].key === menuItemKey) {
        return menuItems[i]
      }
      const found = findMenuItem(menuItems[i].children, menuItemKey)
      if (found) return found
    }
  }
  return null
}

export { findAllParent, findMenuItem, getMenuItems, getSettingsMenuItems }
