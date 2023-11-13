import { Console } from "@woowacourse/mission-utils";
import InputView from "../views/InputView";
import VisitDate from "../models/VisitDate";
import OutputView from "../views/OutputView";
import Menu from "../models/Menu";
import Event from "../models/Event";

class CalendarController {
  async init() {
    OutputView.printGreeting();
    const date = await this.#visitDate();
    OutputView.printTotalMenus();
    const menu = await this.#orderMenu();
    OutputView.printPreview(date.getDate());
    const order = menu.orderHistory();
    OutputView.printMenu(order);
    const amount = menu.calculateTotalAmount();
    OutputView.printTotalAmount(amount);
    const event = new Event(date, amount);
    const gift = event.giftMenu();
    OutputView.printGiftMenu(gift);
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
