import BaseTour from "./BaseTour";
export default class LiveTour extends BaseTour {
  constructor(id, title) {
    super();
    this.id = id;
    this.title = title;
  }
}
