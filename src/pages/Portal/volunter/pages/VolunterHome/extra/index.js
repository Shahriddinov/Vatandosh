export const volunteersSort = (arr) => {
  const data = arr
    .map((el) => {
      let a = 0;
      el?.user_volunteer_activities?.forEach((element) => {
        if (element?.verified && element?.type === 2) {
          a += 1;
        }
      });
      return {
        ...el,
        user_volunteer_activities: a,
      };
    })
    .sort(
      (a, b) => b?.user_volunteer_activities - a?.user_volunteer_activities
    );

  return data;
};
