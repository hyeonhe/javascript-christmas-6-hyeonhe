class Event {
  #date;
  #amount;

  constructor(date, amount) {
    this.#date = date;
    this.#amount = amount;
  }

  existEvents() {
    if (this.#amount < 10000) {
      return false;
    }
    return true;
  }

  giftMenu() {
    if (this.#amount >= 120000) {
      return "샴페인 1개";
    }
    return "없음";
  }

  christmasEvent() {
    if (this.#date >= 1 && this.#date <= 25) {
      return 1000 + (this.#date - 1) * 100;
    }

    return 0;
  }
}

export default Event;
