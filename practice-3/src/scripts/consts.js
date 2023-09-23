export const tableContainer = document.querySelector(".table__body");

export const idSort = document.querySelector(".table__header_id");
export const userIdSort = document.querySelector(".table__header_userId");
export const titleSort = document.querySelector(".table__header_title");
export const bodySort = document.querySelector(".table__header_body");

export const searchInput = document.querySelector(".search");

export const sortConfig = {
  id: {
    name: "id",
    key: "number",
  },
  title: {
    name: "title",
    key: "string",
  },
  body: {
    name: "body",
    key: "string",
  },
  userId: {
    name: "userId",
    key: "number",
  },
};
