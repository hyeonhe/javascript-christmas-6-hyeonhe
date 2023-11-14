import CalendarController from "./controllers/CalendarController";

class App {
  async run() {
    const controller = new CalendarController();
    await controller.init();
  }
}

export default App;
