import { STAR_DAYS, WEEKENDS } from "../constants/date";
import {
  CHAMPAGNE_PRICE,
  CHRISTMAS_EVENT,
  DISCOUNT_NONE,
  MENU_DISCOUNT_AMOUNT,
  MIN_VALUE_APPLY_EVENT,
  MIN_VALUE_APPLY_GIFT,
  NO_EVENT,
  SANTA,
  SANTA_BADGE_AMOUNT,
  SPECIAL_AMOUNT,
  STAR,
  STAR_BADGE_AMOUNT,
  TREE,
  TREE_BADGE_AMOUNT,
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

  totalBenefitAmount() {
    const totalDiscountAmount = this.totalDiscountAmount();
    const giftEventValue = this.giftEvent();

    return totalDiscountAmount + giftEventValue;
  }

  totalDiscountAmount() {
    const christmasEventValue = this.christmasEvent();
    const weekdayEventValue = this.weekdayEvent();
    const weekendEventValue = this.weekendEvent();
    const specialEventValue = this.specialEvent();

    return (
      christmasEventValue +
      weekdayEventValue +
      weekendEventValue +
      specialEventValue
    );
  }

  eventBadge() {
    const totalBenefitAmount = this.totalBenefitAmount();
    if (totalBenefitAmount >= SANTA_BADGE_AMOUNT) return SANTA;
    else if (totalBenefitAmount >= TREE_BADGE_AMOUNT) return TREE;
    else if (totalBenefitAmount >= STAR_BADGE_AMOUNT) return STAR;
    return NO_EVENT;
  }
}

export default Event;
