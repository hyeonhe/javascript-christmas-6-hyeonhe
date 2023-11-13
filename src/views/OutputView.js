import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE } from "../constants/constants";
import numberWithCommas from "../utils/numberWithCommas";

const OutputView = {
  printMenu(order) {
    Console.print(OUTPUT_MESSAGE.orderMenu);
    Console.print(order);
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

  printPreview(date) {
    Console.print(
      `12월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`
    );
  },

  printTotalAmount(amount) {
    const money = numberWithCommas(amount);
    Console.print(OUTPUT_MESSAGE.totalAmountBeforeDiscount);
    Console.print(`${money}원`);
  },

  printGiftMenu(gift) {
    Console.print(OUTPUT_MESSAGE.giftMenu);
    Console.print(gift);
  },

  printBenefit() {
    Console.print(OUTPUT_MESSAGE.discount);
  },

  printChristmasEvent(amount) {
    if (amount > 0) {
      const money = numberWithCommas(amount);
      Console.print(`크리스마스 디데이 할인: -${money}원`);
    }
  },
};

export default OutputView;
