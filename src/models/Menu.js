import { ERROR_MESSAGE } from "../constants/constants";
import {
  BEVERAGES,
  ITEM_INFO,
  MAX_COUNT,
  MENU_ITEMS,
  MIN_COUNT,
} from "../constants/menu";

class Menu {
  #menu;

  constructor(menu) {
    const splitCommaMenus = this.#splitComma(menu);
    const splitDashMenus = this.#splitDash(splitCommaMenus);
    this.#menu = this.#orderMenu(splitDashMenus);
    this.#calculateTotalOrderCount();
    this.#orderOnlyBeverages();
  }

  #splitComma(menu) {
    const menus = menu.split(",");
    this.#validateMenuArray(menus);

    return menus;
  }

  #validateMenuArray(menus) {
    if (menus.length === 0) {
      throw new Error(ERROR_MESSAGE.invalidOrderError);
    }
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
      const menuCount = this.#getMenuCount(val);
      const menu = this.#findMenuByKey(key);
      this.#pushToOrderMenu(orderMenu, menu, menuCount);
    }

    return orderMenu;
  }

  #getMenuCount(count) {
    const menuCount = Number(count);
    this.#validateCount(menuCount);

    return menuCount;
  }

  #findMenuByKey(key) {
    const menu = MENU_ITEMS.find((item) => item.korean === key);
    this.#validateMenu(menu);

    return menu;
  }

  #validateMenu(menu) {
    if (!menu) {
      throw new Error(ERROR_MESSAGE.invalidOrderError);
    }
  }

  #validateCount(count) {
    this.#validateCountNaN(count);
    this.#validateCountRange(count);
  }

  #validateCountNaN(count) {
    if (Object.is(count, NaN)) {
      throw new Error(ERROR_MESSAGE.invalidOrderError);
    }
  }

  #validateCountRange(count) {
    if (count < MIN_COUNT || count > MAX_COUNT) {
      throw new Error(ERROR_MESSAGE.invalidOrderError);
    }
  }

  #pushToOrderMenu(orderMenu, menu, val) {
    orderMenu[menu.type].push({ ...menu, count: val });
  }

  #calculateTotalOrderCount() {
    const totalOrderCount = this.#getTotalOrderCount();
    this.#validateTotalOrderCount(totalOrderCount);
  }

  #getTotalOrderCount() {
    let totalOrderCount = 0;
    for (const category of Object.values(this.#menu)) {
      totalOrderCount += category.reduce(
        (accumulator, item) => accumulator + item.count,
        0
      );
    }
    return totalOrderCount;
  }

  #validateTotalOrderCount(totalCount) {
    if (totalCount > MAX_COUNT) {
      throw new Error(ERROR_MESSAGE.invalidOrderError);
    }
  }

  #orderOnlyBeverages() {
    const hasNonBeverageOrders = this.#checkNonBeverageOrders();
    this.#validateBeverages(hasNonBeverageOrders);
  }

  #checkNonBeverageOrders() {
    const categories = Object.keys(this.#menu);
    const hasNonBeverageOrders = categories.some(
      (category) => category !== BEVERAGES && this.#menu[category].length > 0
    );

    return hasNonBeverageOrders;
  }

  #validateBeverages(count) {
    if (!count) {
      throw new Error(ERROR_MESSAGE.invalidOrderError);
    }
  }

  orderHistory() {
    const orderLines = Object.values(this.#menu)
      .flat()
      .map(ITEM_INFO)
      .join("\n");

    return orderLines;
  }

  getMenusCounts() {
    const { desserts, mainDishes } = this.#menu;
    return {
      dessert: desserts.length,
      mainDish: mainDishes.length,
    };
  }

  calculateTotalAmount() {
    let totalAmount = 0;
    for (const category of Object.values(this.#menu)) {
      totalAmount += category.reduce(
        (accumulator, item) => accumulator + item.price * item.count,
        0
      );
    }

    return totalAmount;
  }
}

export default Menu;
