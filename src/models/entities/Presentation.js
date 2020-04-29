export default class Presentation {
  constructor(id, title) {
    this.id = id;
    this.title = title;
  }
  static fromObject(object) {
    return new Presentation(object.id || null, object.title || null);
  }
  static toObject(item) {
    return {
      id: item.id,
      title: item.title
    };
  }
}
