const INPUT_MESSAGE = Object.freeze({
  orderMessage:
    "주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)",
});

const OUTPUT_MESSAGE = Object.freeze({
  greetingMessage: "안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.",
  eventNotices:
    "<이벤트 주의 사항>\n총주문 금액 10,000원 이상부터 이벤트가 적용됩니다.\n음료만 주문 시, 주문할 수 없습니다.\n메뉴는 한 번에 최대 20개까지만 주문할 수 있습니다. (e.g. 시저샐러드-1, 티본스테이크-1, 리스마스파스타-1, 제로콜라-3, 아이스크림-1의 총개수는 7개)",
  orderMenu: "<주문 메뉴>",
  totalAmountBeforeDiscount: "<할인 전 총주문 금액>",
  giftMenu: "<증정 메뉴>",
  discount: "<혜택 내역>",
  totalDiscountAmout: "<총혜택 금액>",
  totalAmount: "<할인 후 예상 결제 금액>",
  badge: "<12월 이벤트 배지>",
  appetizer:
    "<애피타이저>\n양송이수프(6,000), 타파스(5,500), 시저샐러드(8,000)",
  main: "<메인>\n티본스테이크(55,000), 바비큐립(54,000), 해산물파스타(35,000), 크리스마스파스타(25,000)",
  dessert: "<디저트>\n초코케이크(15,000), 아이스크림(5,000)",
  beverage: "<음료>\n",
});

const ERROR_MESSAGE = Object.freeze({
  invalidDateError: "[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.",
  invalidOrderError: "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.",
});

const CHRISTMAS_EVENT = Object.freeze({
  startDate: 1,
  endDate: 25,
  discount: 1000,
  bonus: 100,
  offset: 1,
});

const CHAMPAGNE_PRICE = 25000;
const MIN_VALUE_APPLY_EVENT = 10000;
const MIN_VALUE_APPLY_GIFT = 120000;
const DISCOUNT_NONE = 0;
const MENU_DISCOUNT_AMOUNT = 2023;
const SPECIAL_AMOUNT = 1000;
const SANTA_BADGE_AMOUNT = 20000;
const TREE_BADGE_AMOUNT = 10000;
const STAR_BADGE_AMOUNT = 5000;
const SANTA = "산타";
const TREE = "트리";
const STAR = "별";
const NO_EVENT = "없음";

export {
  INPUT_MESSAGE,
  OUTPUT_MESSAGE,
  ERROR_MESSAGE,
  CHRISTMAS_EVENT,
  CHAMPAGNE_PRICE,
  DISCOUNT_NONE,
  MENU_DISCOUNT_AMOUNT,
  MIN_VALUE_APPLY_EVENT,
  MIN_VALUE_APPLY_GIFT,
  SPECIAL_AMOUNT,
  SANTA,
  SANTA_BADGE_AMOUNT,
  STAR,
  STAR_BADGE_AMOUNT,
  TREE,
  TREE_BADGE_AMOUNT,
  NO_EVENT,
};
