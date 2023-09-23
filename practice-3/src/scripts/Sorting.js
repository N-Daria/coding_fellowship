export default class Sorting {
  constructor() {
    this.sortOrder = "ascending";
  }

  sort(parameter, data) {
    if (this.sortOrder === "ascending") {
      this._descendedSort(parameter, data);
      this.sortOrder = "descending";
    } else {
      this._ascendedSort(parameter, data);
      this.sortOrder = "ascending";
    }
  }

  _descendedSort(parameter, data) {
    if (parameter.key === "number") {
      data.sort((a, b) => b[parameter.name] - a[parameter.name]);
    } else {
      data.sort((a, b) => {
        const nameA = a[parameter.name].toUpperCase();
        const nameB = b[parameter.name].toUpperCase();

        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        return 0;
      });
    }
  }

  _ascendedSort(parameter, data) {
    if (parameter.key === "number") {
      data.sort((a, b) => a[parameter.name] - b[parameter.name]);
    } else {
      data.sort((a, b) => {
        const nameA = a[parameter.name].toUpperCase();
        const nameB = b[parameter.name].toUpperCase();

        if (nameA < nameB) {
          return 1;
        }
        if (nameA > nameB) {
          return -1;
        }

        return 0;
      });
    }
  }
}
