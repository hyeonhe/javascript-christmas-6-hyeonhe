const INPUT_MESSAGE = Object.freeze({
  orderMessage:
    "주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)",
});

const OUTPUT_MESSAGE = Object.freeze({
  greetingMessage: "안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.",
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

export { INPUT_MESSAGE, OUTPUT_MESSAGE, ERROR_MESSAGE };
