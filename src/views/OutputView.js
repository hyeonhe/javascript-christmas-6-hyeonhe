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

  printTotalMenus() {
    Console.print(OUTPUT_MESSAGE.appetizer);
    Console.print("\n");
    Console.print(OUTPUT_MESSAGE.main);
    Console.print("\n");
    Console.print(OUTPUT_MESSAGE.dessert);
    Console.print("\n");
    Console.print(OUTPUT_MESSAGE.beverage);
  },
  // ...
};

export default OutputView;
