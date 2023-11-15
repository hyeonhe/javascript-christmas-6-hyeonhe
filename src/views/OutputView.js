import { Console } from "@woowacourse/mission-utils";
import { NO_EVENT, OUTPUT_MESSAGE } from "../constants/constants";
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

  printEventNotices() {
    Console.print(OUTPUT_MESSAGE.eventNotices);
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
    if (gift > 0) {
      Console.print("샴페인 1개");
    } else if (gift === 0) {
      Console.print(NO_EVENT);
    }
  },

  printBenefit() {
    Console.print(OUTPUT_MESSAGE.discount);
  },

  printEventDiscount(eventName, amount) {
    if (amount > 0) {
      const money = numberWithCommas(amount);
      Console.print(`${eventName}: -${money}원`);
    }
  },

  printNoEvent() {
    Console.print(NO_EVENT);
  },

  printTotalBenefitAmount(amount) {
    const money = numberWithCommas(-amount);
    Console.print(OUTPUT_MESSAGE.totalDiscountAmout);
    Console.print(`${money}원`);
  },

  printAfterDiscountAmount(amount) {
    const money = numberWithCommas(amount);
    Console.print(OUTPUT_MESSAGE.totalAmount);
    Console.print(`${money}원`);
  },

  printEventBadge(badge) {
    Console.print(OUTPUT_MESSAGE.badge);
    Console.print(badge);
  },
};

export default OutputView;
