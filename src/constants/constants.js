const INPUT_MESSAGE = Object.freeze({
  orderMessage:
    "주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)",
  visitDate:
    "12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)",
});

const OUTPUT_MESSAGE = Object.freeze({
  greetingMessage: "안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.",
  eventNotices:
    "<이벤트 주의 사항>\n총주문 금액 10,000원 이상부터 이벤트가 적용됩니다.\n음료만 주문 시, 주문할 수 없습니다.\n메뉴는 한 번에 최대 20개까지만 주문할 수 있습니다. (e.g. 시저샐러드-1, 티본스테이크-1, 리스마스파스타-1, 제로콜라-3, 아이스크림-1의 총개수는 7개)",
  benefitPreview: (date) =>
    `12월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`,
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
  beverage: "<음료>\n제로콜라(3,000), 레드와인(60,000), 샴페인(25,000)",
  discountValue: (money) => `${money}원`,
  eventDiscount: (eventName, money) => `${eventName}: -${money}원`,
  champagne: "샴페인 1개",
});

const ERROR_MESSAGE = Object.freeze({
  invalidDateError: "[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.",
  invalidOrderError: "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.",
});

const NO_EVENT = "없음";

export { INPUT_MESSAGE, OUTPUT_MESSAGE, ERROR_MESSAGE, NO_EVENT };
