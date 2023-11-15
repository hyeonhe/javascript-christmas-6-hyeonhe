import { ERROR_MESSAGE } from "../constants/constants";
import { END_DATE, START_DATE } from "../constants/date";
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
      throw new Error(ERROR_MESSAGE.invalidDateError);
    }
  }

  #dateInRange(date) {
    if (date < START_DATE || date > END_DATE) {
      throw new Error(ERROR_MESSAGE.invalidDateError);
    }
  }

  getDate() {
    return this.#date;
  }
}

export default VisitDate;
