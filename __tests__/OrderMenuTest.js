import Menu from "../src/models/Menu";

describe("주문 예약 클래스 테스트", () => {
  test("없는 메뉴 에러", () => {
    expect(() => {
      new Menu("계란말이-1");
    }).toThrow("[ERROR]");
  });

  test("숫자 에러", () => {
    expect(() => {
      new Menu("시저샐러드-23");
    }).toThrow("[ERROR]");
  });

  test("20개 초과 주문 에러", () => {
    expect(() => {
      new Menu("티본스테이크-5,바비큐립-13,아이스크림-7");
    }).toThrow("[ERROR]");
  });

  test("음료만 주문 에러", () => {
    expect(() => {
      new Menu("레드와인-2");
    }).toThrow("[ERROR]");
  });
});
