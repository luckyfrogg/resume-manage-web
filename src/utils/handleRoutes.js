import {decryptVal} from './tools'
function hasPermission(permissions, route) {
    if (route.meta && route.meta.permissions) {
      return permissions.some((role) => route.meta.permissions.includes(role));
    } else {
      return true;
    }
  }
  function hasMenuPermission(role, menu) {
    // debugger
    if (menu && menu.permissions) {
      return  menu.permissions.includes(role);
    } else {
      return true;
    }
  }
  export function filterMenuList(menuList, role) {
    const finallyMenuList = [];
    menuList.forEach((route) => {
      const item = { ...route };
    //   debugger
      if (hasMenuPermission(role, item)) {
        if (item.children) {
          item.children = filterMenuList(item.children, role);
        }
        finallyMenuList.push(item);
      }
    });
    return finallyMenuList;
  }
export function filterAsyncRoutes(routes, role) {
    const finallyRoutes = [];
    routes.forEach((route) => {
      const item = { ...route };
      if (hasPermission(role, item)) {
        if (item.children) {
          item.children = filterAsyncRoutes(item.children, role);
        }
        finallyRoutes.push(item);
      }
    });
    return finallyRoutes;
  }