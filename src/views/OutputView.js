import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "../constants/constants";

const OutputView = {
  printMenu() {
    Console.print("<주문 메뉴>");
    // ...
  },

  printGreeting() {
    Console.print(OUTPUT_MESSAGE.greetingMessage);
  },
  // ...
};

export default OutputView;
