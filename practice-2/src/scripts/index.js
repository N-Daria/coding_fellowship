import "../index.css";
import TableRow from "./TableRow";
import { getData } from "./api";
import { tableContainer } from "./consts";

getData()
  .then((res) => {
    res.forEach((el) => {
      const newItem = new TableRow(el);
      tableContainer.prepend(newItem.getRow());
    });
  })
  .catch((err) => console.log(err));
