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
    Console.print("\n");
  },

  printEventNotices() {
    Console.print(OUTPUT_MESSAGE.eventNotices);
  },

  printPreview(date) {
    Console.print(OUTPUT_MESSAGE.benefitPreview(date));
  },

  printTotalAmount(amount) {
    const money = numberWithCommas(amount);
    Console.print(OUTPUT_MESSAGE.totalAmountBeforeDiscount);
    Console.print(OUTPUT_MESSAGE.discountValue(money));
  },

  printGiftMenu(gift) {
    Console.print(OUTPUT_MESSAGE.giftMenu);
    if (gift > 0) {
      Console.print(OUTPUT_MESSAGE.champagne);
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
      Console.print(OUTPUT_MESSAGE.eventDiscount(eventName, money));
    }
  },

  printNoEvent() {
    Console.print(NO_EVENT);
  },

  printTotalBenefitAmount(amount) {
    const money = numberWithCommas(-amount);
    Console.print(OUTPUT_MESSAGE.totalDiscountAmout);
    Console.print(OUTPUT_MESSAGE.discountValue(money));
  },

  printAfterDiscountAmount(amount) {
    const money = numberWithCommas(amount);
    Console.print(OUTPUT_MESSAGE.totalAmount);
    Console.print(OUTPUT_MESSAGE.discountValue(money));
  },

  printEventBadge(badge) {
    Console.print(OUTPUT_MESSAGE.badge);
    Console.print(badge);
  },
};

export default OutputView;
