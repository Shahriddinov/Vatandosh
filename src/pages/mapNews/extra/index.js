import { paginationCount } from "../../../helpers/extraFunction";

export const paginationNews = ({ page, count, data }) => {
  const totalPagination = paginationCount(data.length, count);

  const newData = data.slice(page * count - count, page * count);
  return { totalPagination, newData };
};
