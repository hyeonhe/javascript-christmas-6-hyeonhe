const MENU_ITEMS = Object.freeze([
  Object.freeze({
    name: "yangsongMushroomSoup",
    korean: "양송이수프",
    price: 6000,
    type: "appetizers",
  }),
  Object.freeze({
    name: "tapas",
    korean: "타파스",
    price: 5500,
    type: "appetizers",
  }),
  Object.freeze({
    name: "caesarSalad",
    korean: "시저샐러드",
    price: 8000,
    type: "appetizers",
  }),
  Object.freeze({
    name: "ribeyeSteak",
    korean: "티본스테이크",
    price: 55000,
    type: "mainDishes",
  }),
  Object.freeze({
    name: "barbecueRibs",
    korean: "바비큐립",
    price: 54000,
    type: "mainDishes",
  }),
  Object.freeze({
    name: "seafoodPasta",
    korean: "해산물파스타",
    price: 35000,
    type: "mainDishes",
  }),
  Object.freeze({
    name: "christmasPasta",
    korean: "크리스마스파스타",
    price: 25000,
    type: "mainDishes",
  }),
  Object.freeze({
    name: "chocolateCake",
    korean: "초코케이크",
    price: 15000,
    type: "desserts",
  }),
  Object.freeze({
    name: "iceCream",
    korean: "아이스크림",
    price: 5000,
    type: "desserts",
  }),
  Object.freeze({
    name: "zeroCola",
    korean: "제로콜라",
    price: 3000,
    type: "beverages",
  }),
  Object.freeze({
    name: "redWine",
    korean: "레드와인",
    price: 60000,
    type: "beverages",
  }),
  Object.freeze({
    name: "champagne",
    korean: "샴페인",
    price: 25000,
    type: "beverages",
  }),
]);

const MIN_COUNT = 1;
const MAX_COUNT = 20;
const ITEM_INFO = (item) => `${item.korean} ${item.count}개`;
const BEVERAGES = "beverages";

export { MENU_ITEMS, MIN_COUNT, MAX_COUNT, ITEM_INFO, BEVERAGES };
