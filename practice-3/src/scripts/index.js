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
} from "./consts";

let data = [];
const idSorting = new Sorting();
const titleSorting = new Sorting();
const bodySorting = new Sorting();
const userIdSorting = new Sorting();

const initialRender = () => {
  getData()
    .then((res) => {
      data = res;

      res.forEach((el) => {
        const newItem = new TableRow(el);
        tableContainer.prepend(newItem.getRow());
      });
    })
    .catch((err) => console.log(err));
};

const rerender = () => {
  tableContainer.replaceChildren();

  data.forEach((el) => {
    const newItem = new TableRow(el);
    tableContainer.prepend(newItem.getRow());
  });
};

idSort.addEventListener("click", () => {
  idSorting.sort(sortConfig.id, data);
  rerender();
});

userIdSort.addEventListener("click", () => {
  userIdSorting.sort(sortConfig.userId, data);
  rerender();
});

titleSort.addEventListener("click", () => {
  titleSorting.sort(sortConfig.title, data);
  rerender();
});

bodySort.addEventListener("click", () => {
  bodySorting.sort(sortConfig.body, data);
  rerender();
});

initialRender();
