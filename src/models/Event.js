import { STAR_DAYS, WEEKENDS } from "../constants/date";
import {
  CHRISTMAS_EVENT,
  DISCOUNT_NONE,
  MENU_DISCOUNT_AMOUNT,
  MIN_VALUE_APPLY_EVENT,
  SPECIAL_AMOUNT,
} from "../constants/constants";

class Event {
  #date;
  #amount;
  #menuCounts;

  constructor(date, amount, menuCounts) {
    this.#date = date;
    this.#amount = amount;
    this.#menuCounts = menuCounts;
  }

  existEvents() {
    if (this.#amount < MIN_VALUE_APPLY_EVENT) {
      return false;
    }
    return true;
  }

  giftMenu() {
    if (this.#amount >= 120000) {
      return "샴페인 1개";
    }
    return "없음";
  }

  christmasEvent() {
    const { startDate, endDate, discount, bonus, offset } = CHRISTMAS_EVENT;

    if (this.#date >= startDate && this.#date <= endDate) {
      return discount + (this.#date - offset) * bonus;
    }

    return DISCOUNT_NONE;
  }

  weekdayEvent() {
    if (!WEEKENDS.includes(this.#date)) {
      const count = this.#menuCounts.mainDish;
      return count * MENU_DISCOUNT_AMOUNT;
    }
    return DISCOUNT_NONE;
  }

  weekendEvent() {
    if (WEEKENDS.includes(this.#date)) {
      const count = this.#menuCounts.dessert;
      return count * MENU_DISCOUNT_AMOUNT;
    }
    return DISCOUNT_NONE;
  }

  specialEvent() {
    if (STAR_DAYS.includes(this.#date)) {
      return SPECIAL_AMOUNT;
    }
    return DISCOUNT_NONE;
  }
}

export default Event;
