import { Console } from "@woowacourse/mission-utils";
import InputView from "../views/InputView";
import VisitDate from "../models/VisitDate";
import OutputView from "../views/OutputView";

class CalendarController {
  async init() {
    OutputView.printGreeting();
    await this.visitDate();
    OutputView.printTotalMenus();
  }

  async visitDate() {
    let date = 0;
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
}

export default CalendarController;
