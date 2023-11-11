import { INPUT_MESSAGE } from "../constants/constants";
class VisitDate {
  #date;

  constructor(date) {
    this.#date = this.#toNumber(date);
    this.#dateInRange(this.#date);
  }

  #toNumber(date) {
    const parsedDate = Number(date);
    this.#validate(parsedDate);
    return parsedDate;
  }

  #validate(date) {
    if (Object.is(date, NaN)) {
      throw new Error(INPUT_MESSAGE.invalidDateError);
    }
  }

  #dateInRange(date) {
    if (date < 1 || date > 31) {
      throw new Error(INPUT_MESSAGE.invalidDateError);
    }
  }

  getDate() {
    return this.#date;
  }
}

export default VisitDate;
