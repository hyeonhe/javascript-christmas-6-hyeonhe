import VisitDate from "../src/models/VisitDate";

describe("날짜 클래스 테스트", () => {
  test("숫자가 아닐 경우 예외가 발생한다.", () => {
    expect(() => {
      new VisitDate("1일");
    }).toThrow("[ERROR]");
  });

  test("1이상 31이하의 수가 아닐 경우 예외 발생", () => {
    expect(() => {
      new VisitDate("50");
    }).toThrow("[ERROR]");
  });
});
