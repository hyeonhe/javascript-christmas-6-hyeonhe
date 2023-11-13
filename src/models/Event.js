import { WEEKENDS } from "../constants/date";
import {
  CHRISTMAS_EVENT,
  DISCOUNT_NONE,
  MENU_DISCOUNT_AMOUNT,
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
    if (this.#amount < 10000) {
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

  weekDayEvent() {
    if (!WEEKENDS.includes(this.#date)) {
      const count = this.#menuCounts.mainDish;
      return count * MENU_DISCOUNT_AMOUNT;
    }
    return DISCOUNT_NONE;
  }
}

export default Event;
