import { ERROR_MESSAGE } from "../constants/constants";
import { MENU_ITEMS } from "../constants/menu";

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
      this.#validateMenu(menu);
      this.#pushToOrderMenu(orderMenu, menu, count);
    }

    return orderMenu;
  }

  #validateMenu(menu) {
    if (!menu) {
      throw new Error(ERROR_MESSAGE.invalidOrderError);
    }
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

  #calculateTotalOrderCount() {
    let totalCount = 0;
    for (const category of Object.values(this.#menu)) {
      totalCount += category.reduce(
        (accumulator, item) => accumulator + item.count,
        0
      );
    }
    this.#validateTotalOrderCount(totalCount);
  }

  #validateTotalOrderCount(totalCount) {
    if (totalCount > 20) {
      throw new Error(ERROR_MESSAGE.invalidOrderError);
    }
  }

  #orderOnlyBeverages() {
    const categories = Object.keys(this.#menu);
    const hasNonBeverageOrders = categories.some(
      (category) => category !== "beverages" && this.#menu[category].length > 0
    );

    this.#validateBeverages(hasNonBeverageOrders);
  }

  #validateBeverages(count) {
    if (!count) {
      throw new Error(ERROR_MESSAGE.invalidOrderError);
    }
  }

  orderHistory() {
    const extractItemInfo = (item) => `${item.korean} ${item.count}개`;
    const orderLines = Object.values(this.#menu).flat().map(extractItemInfo);

    return orderLines.join("\n");
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
