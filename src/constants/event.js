const EVENTS = Object.freeze({
  Christmas: "크리스마스 디데이 할인",
  Weekday: "평일 할인",
  Weekend: "주말 할인",
  Special: "특별 할인",
  Gift: "증정 이벤트",
});

const CHRISTMAS_EVENT_VALUE = Object.freeze({
  startDate: 1,
  endDate: 25,
  discount: 1000,
  bonus: 100,
  offset: 1,
});

const EVENT_CONSTANTS = Object.freeze({
  champagnePrice: 25000,
  minValueApplyEvent: 10000,
  minValueApplyGift: 120000,
  discountNone: 0,
  menuDiscountAmount: 2023,
  specialAmount: 1000,
});

const BADGE_CONSTANTS = Object.freeze({
  santa: "산타",
  santaBadgeAmount: 20000,
  tree: "트리",
  treeBadgeAmount: 10000,
  star: "별",
  starBadgeAmount: 5000,
});

export { EVENTS, CHRISTMAS_EVENT_VALUE, EVENT_CONSTANTS, BADGE_CONSTANTS };
