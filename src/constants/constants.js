const INPUT_MESSAGE = Object.freeze({
  invalidDateError: "[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.",
});

const OUTPUT_MESSAGE = Object.freeze({
  greetingMessage: "안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.",
  appetizer:
    "<애피타이저>\n양송이수프(6,000), 타파스(5,500), 시저샐러드(8,000)",
  main: "<메인>\n티본스테이크(55,000), 바비큐립(54,000), 해산물파스타(35,000), 크리스마스파스타(25,000)",
  dessert: "<디저트>\n초코케이크(15,000), 아이스크림(5,000)",
  beverage: "<음료>\n",
});

export { INPUT_MESSAGE, OUTPUT_MESSAGE };
