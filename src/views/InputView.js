import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constants/constants";

const InputView = {
  async readDate() {
    const input = await Console.readLineAsync(
      "12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)"
    );
    return input;
  },

  async readMenu() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.orderMessage);
    return input;
  },

  // ...
};

export default InputView;
