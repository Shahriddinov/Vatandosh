export const paginationCount = (data, count) => {
  return Math.ceil(((data * 1) / count) * 1);
};
