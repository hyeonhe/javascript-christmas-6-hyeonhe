import { STAR_DAYS, WEEKENDS } from "../constants/date";
import { NO_EVENT } from "../constants/constants";
import {
  BADGE_CONSTANTS,
  CHRISTMAS_EVENT_VALUE,
  EVENT_CONSTANTS,
} from "../constants/event";

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
    if (this.#amount < EVENT_CONSTANTS.minValueApplyEvent) {
      return false;
    }
    return true;
  }

  giftEvent() {
    if (this.#amount >= EVENT_CONSTANTS.minValueApplyGift) {
      return EVENT_CONSTANTS.champagnePrice;
    }
    return EVENT_CONSTANTS.discountNone;
  }

  christmasEvent() {
    const { startDate, endDate } = CHRISTMAS_EVENT_VALUE;
    if (this.#date >= startDate && this.#date <= endDate) {
      return this.#chirstmasEventValue();
    }

    return EVENT_CONSTANTS.discountNone;
  }

  #chirstmasEventValue() {
    const { discount, bonus, offset } = CHRISTMAS_EVENT_VALUE;
    return discount + (this.#date - offset) * bonus;
  }

  weekdayEvent() {
    if (WEEKENDS.includes(this.#date)) {
      return EVENT_CONSTANTS.discountNone;
    }

    const count = this.#menuCounts.mainDish;
    return count * EVENT_CONSTANTS.menuDiscountAmount;
  }

  weekendEvent() {
    if (!WEEKENDS.includes(this.#date)) {
      return EVENT_CONSTANTS.discountNone;
    }

    const count = this.#menuCounts.dessert;
    return count * EVENT_CONSTANTS.menuDiscountAmount;
  }

  specialEvent() {
    if (STAR_DAYS.includes(this.#date)) {
      return EVENT_CONSTANTS.specialAmount;
    }

    return EVENT_CONSTANTS.discountNone;
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
    const {
      santa,
      santaBadgeAmount,
      tree,
      treeBadgeAmount,
      star,
      starBadgeAmount,
    } = BADGE_CONSTANTS;
    const totalBenefitAmount = this.totalBenefitAmount();

    if (totalBenefitAmount >= santaBadgeAmount) return santa;
    else if (totalBenefitAmount >= treeBadgeAmount) return tree;
    else if (totalBenefitAmount >= starBadgeAmount) return star;
    return NO_EVENT;
  }
}

export default Event;
