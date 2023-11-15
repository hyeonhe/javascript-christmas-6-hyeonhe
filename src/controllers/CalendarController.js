import { Console } from "@woowacourse/mission-utils";
import InputView from "../views/InputView";
import VisitDate from "../models/VisitDate";
import OutputView from "../views/OutputView";
import Menu from "../models/Menu";
import Event from "../models/Event";
import { EVENTS } from "../constants/event";

class CalendarController {
  async init() {
    this.#printInitialInfo();
    const date = await this.#visitDate();
    const menu = await this.#orderMenu();
    const event = this.#getEvent(date, menu);

    this.#printPreview(date);
    this.#printMenu(menu);
    this.#printTotalAmount(menu);

    this.#printGiftMenu(event);
    this.#printBenefit(event);
    this.#printTotalBenefitAmount(event);
    this.#printAfterDiscountAmount(menu, event);

    this.#printEventBadge(event);
  }

  #printInitialInfo() {
    OutputView.printGreeting();
    OutputView.printTotalMenus();
  }

  #printPreview(date) {
    const visitDate = date.getDate();
    OutputView.printPreview(visitDate);
  }

  #printMenu(menu) {
    const order = menu.orderHistory();
    OutputView.printMenu(order);
  }

  #printTotalAmount(menu) {
    const amount = menu.calculateTotalAmount();
    OutputView.printTotalAmount(amount);
  }

  #printGiftMenu(event) {
    const giftEventValue = event.giftEvent();
    OutputView.printGiftMenu(giftEventValue);
  }

  #printBenefit(event) {
    OutputView.printBenefit();
    const existEvents = event.existEvents();
    if (existEvents) {
      this.#printEventValues(event);
    }
    if (!existEvents) {
      OutputView.printNoEvent();
    }
  }

  #printEventValues(event) {
    const eventValues = {
      Christmas: event.christmasEvent(),
      Weekday: event.weekdayEvent(),
      Weekend: event.weekendEvent(),
      Special: event.specialEvent(),
      Gift: event.giftEvent(),
    };

    Object.keys(eventValues).forEach((item) => {
      OutputView.printEventDiscount(EVENTS[item], eventValues[item]);
    });
  }

  #printTotalBenefitAmount(event) {
    const totalBenefitAmount = event.totalBenefitAmount();
    OutputView.printTotalBenefitAmount(totalBenefitAmount);
  }

  #printAfterDiscountAmount(menu, event) {
    const amount = menu.calculateTotalAmount();
    const totalDiscountAmount = event.totalDiscountAmount();
    const afterDiscountAmount = amount - totalDiscountAmount;
    OutputView.printAfterDiscountAmount(afterDiscountAmount);
  }

  #printEventBadge(event) {
    const eventBadge = event.eventBadge();
    OutputView.printEventBadge(eventBadge);
  }

  async #visitDate() {
    let date;
    while (true) {
      const inputDate = await InputView.readDate();
      try {
        date = new VisitDate(inputDate);
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }

    return date;
  }

  async #orderMenu() {
    let menu;
    while (true) {
      const inputMenu = await InputView.readMenu();
      try {
        menu = new Menu(inputMenu);
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }

    return menu;
  }

  #getEvent(date, menu) {
    const visitDate = date.getDate();
    const amount = menu.calculateTotalAmount();
    const menuCounts = menu.getMenusCounts();

    return new Event(visitDate, amount, menuCounts);
  }
}

export default CalendarController;
