import { STAR_DAYS, WEEKENDS } from "../constants/date";
import {
  CHAMPAGNE_PRICE,
  CHRISTMAS_EVENT,
  DISCOUNT_NONE,
  MENU_DISCOUNT_AMOUNT,
  MIN_VALUE_APPLY_EVENT,
  MIN_VALUE_APPLY_GIFT,
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

  giftEvent() {
    if (this.#amount >= MIN_VALUE_APPLY_GIFT) {
      return CHAMPAGNE_PRICE;
    }
    return DISCOUNT_NONE;
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
