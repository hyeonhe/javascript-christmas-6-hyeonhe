import { Console } from "@woowacourse/mission-utils";
import InputView from "../views/InputView";
import VisitDate from "../models/VisitDate";
import OutputView from "../views/OutputView";
import Menu from "../models/Menu";
import Event from "../models/Event";

class CalendarController {
  async init() {
    this.#printInitialInfo();

    const date = await this.#visitDate();
    const menu = await this.#orderMenu();
    const order = menu.orderHistory();
    const amount = menu.calculateTotalAmount();
    const menuCounts = menu.getMenusCounts();
    const visitDate = date.getDate();
    const event = new Event(visitDate, amount, menuCounts);
    const giftEventValue = event.giftEvent();
    const totalBenefitAmount = event.totalBenefitAmount();
    const totalDiscountAmount = event.totalDiscountAmount();
    const afterDiscountAmount = amount - totalDiscountAmount;
    const eventBadge = event.eventBadge();

    OutputView.printPreview(date.getDate());
    OutputView.printMenu(order);
    OutputView.printTotalAmount(amount);
    OutputView.printGiftMenu(giftEventValue);

    this.#printBenefit(event);
    OutputView.printTotalBenefitAmount(totalBenefitAmount);
    OutputView.printAfterDiscountAmount(afterDiscountAmount);
    OutputView.printEventBadge(eventBadge);
  }

  #printInitialInfo() {
    OutputView.printGreeting();
    OutputView.printTotalMenus();
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
    const christmasEventValue = event.christmasEvent();
    const weekdayEventValue = event.weekdayEvent();
    const weekendEventValue = event.weekendEvent();
    const specialEventValue = event.specialEvent();
    const giftEventValue = event.giftEvent();

    OutputView.printChristmasEvent(christmasEventValue);
    OutputView.printWeekdayEvent(weekdayEventValue);
    OutputView.printWeekendEvent(weekendEventValue);
    OutputView.printSepecialEvent(specialEventValue);
    OutputView.printGiftEvent(giftEventValue);
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
}

export default CalendarController;
