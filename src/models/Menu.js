import { ERROR_MESSAGE } from "../constants/constants";
import { MENU_ITEMS } from "../constants/menu";

class Menu {
  constructor(menu) {
    const splitCommaMenus = this.#splitComma(menu);
    const splitDashMenus = this.#splitDash(splitCommaMenus);
    this.menu = this.#orderMenu(splitDashMenus);
  }

  #splitComma(menu) {
    const menus = menu.split(",");
    if (menus.length === 0) {
      throw new Error(ERROR_MESSAGE.invalidOrderError);
    }
    return menus;
  }

  #splitDash(menu) {
    const menus = {};
    menu.forEach((item) => {
      this.#validateAndAssignMenu(item, menus);
    });

    return menus;
  }

  #validateAndAssignMenu(item, menus) {
    const [key, val] = item.split("-");
    if (key in menus) {
      throw new Error(ERROR_MESSAGE.invalidOrderError);
    }
    menus[key] = val;
  }

  #orderMenu(menus) {
    const orderMenu = {
      appetizers: [],
      mainDishes: [],
      desserts: [],
      beverages: [],
    };

    for (const [key, val] of Object.entries(menus)) {
      const count = Number(val);
      this.#validateCount(count);

      const menu = MENU_ITEMS.find((item) => item.korean === key);
      this.#pushToOrderMenu(orderMenu, menu, count);
    }

    return orderMenu;
  }

  #validateCount(count) {
    this.#validateCountRange(count);
    this.#validateCountNaN(count);
  }

  #validateCountRange(count) {
    if (count < 1 || count > 20) {
      throw new Error(ERROR_MESSAGE.invalidOrderError);
    }
  }

  #validateCountNaN(count) {
    if (Object.is(count, NaN)) {
      throw new Error(ERROR_MESSAGE.invalidOrderError);
    }
  }

  #pushToOrderMenu(orderMenu, menu, val) {
    orderMenu[menu.type].push({ ...menu, count: val });
  }
}
export default Menu;
