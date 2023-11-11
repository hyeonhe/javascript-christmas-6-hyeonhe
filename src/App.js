import CalendarController from "./controllers/calendarController";

class App {
  async run() {
    const controller = new CalendarController();
    await controller.init();
  }
}

export default App;
