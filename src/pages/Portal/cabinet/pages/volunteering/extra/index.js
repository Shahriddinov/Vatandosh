import { paginationCount } from "../../../../../../helpers/extraFunction";

export const filteredArrFun = (arr, type) => {
  const filteredArr = [];
  arr.forEach((el) => {
    if (type === "all") {
      filteredArr.push(el);
    } else if (type === "success") {
      if (el.verified) {
        filteredArr.push(el);
      }
    } else if (type === "danger") {
      if (!el.verified) {
        filteredArr.push(el);
      }
    }
  });
  return filteredArr;
};

export const someDataFun = ({ arr, type, count, activePage }) => {
  let someData = [];
  const data = filteredArrFun(arr, type);
  const totalPagination = paginationCount(data.length, count);

  someData = data.slice(activePage * count - count, activePage * count);
  return { someData, totalPagination };
};
