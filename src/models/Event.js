class Event {
  #date;
  #amount;

  constructor(date, amount) {
    this.#date = date;
    this.#amount = amount;
  }

  giftMenu() {
    if (this.#amount >= 120000) {
      return "샴페인 1개";
    }
    return "없음";
  }
}

export default Event;
