export default class TableRow {
  constructor(data) {
    this.id = data.id;
    this.userId = data.userId;
    this.title = data.title;
    this.body = data.body;
    this.rowTemplate = document.querySelector("#item");
  }

  generateTemplate() {
    return this.rowTemplate.content
      .querySelector(".table__row")
      .cloneNode(true);
  }

  getRow() {
    this.row = this.generateTemplate();

    this.rowId = this.row.querySelector(".table__item_id");
    this.rowUserId = this.row.querySelector(".table__item_userId");
    this.rowTitle = this.row.querySelector(".table__item_title");
    this.rowBody = this.row.querySelector(".table__item_body");

    this.rowId.textContent = this.id;
    this.rowUserId.textContent = this.userId;
    this.rowTitle.textContent = this.title;
    this.rowBody.textContent = this.body;

    return this.row;
  }
}
