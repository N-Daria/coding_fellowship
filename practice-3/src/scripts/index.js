import "../index.css";
import TableRow from "./TableRow";
import Sorting from "./Sorting";
import { getData } from "./api";
import {
  tableContainer,
  idSort,
  userIdSort,
  titleSort,
  bodySort,
  sortConfig,
  searchInput,
} from "./consts";

let data = [];
let renderedData = [];
const idSorting = new Sorting();
const titleSorting = new Sorting();
const bodySorting = new Sorting();
const userIdSorting = new Sorting();

const initialRender = () => {
  getData()
    .then((res) => {
      data = res;
      renderedData = res;

      res.forEach((el) => {
        const newItem = new TableRow(el);
        tableContainer.prepend(newItem.getRow());
      });
    })
    .catch((err) => console.log(err));
};

const rerender = () => {
  tableContainer.replaceChildren();

  renderedData.forEach((el) => {
    const newItem = new TableRow(el);
    tableContainer.prepend(newItem.getRow());
  });
};

idSort.addEventListener("click", () => {
  idSorting.sort(sortConfig.id, renderedData);
  rerender();
});

userIdSort.addEventListener("click", () => {
  userIdSorting.sort(sortConfig.userId, renderedData);
  rerender();
});

titleSort.addEventListener("click", () => {
  titleSorting.sort(sortConfig.title, renderedData);
  rerender();
});

bodySort.addEventListener("click", () => {
  bodySorting.sort(sortConfig.body, renderedData);
  rerender();
});

searchInput.addEventListener("input", () => {
  if (event.target.value.length >= 3) {
    const request = event.target.value;
    renderedData = [...data];
    renderedData = renderedData.filter(
      (el) => el.title.includes(request) || el.body.includes(request)
    );

    rerender();
  }
  if (event.target.value.length === 0) {
    renderedData = [...data];
    rerender();
  }
});

initialRender();
