import CalendarController from "./controllers/calendarController";

class App {
  async run() {
    const controller = new CalendarController();
    await controller.visitDate();
  }
}

export default App;
