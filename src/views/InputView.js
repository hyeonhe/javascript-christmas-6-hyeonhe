import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "../constants/constants";

const InputView = {
  async readDate() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.visitDate);
    return input;
  },

  async readMenu() {
    const input = await Console.readLineAsync(INPUT_MESSAGE.orderMessage);
    return input;
  },
};

export default InputView;
