import data from "../sample-datar5.json";
export const getLatest = () => {
  return data.latest.items;
};

export const getDiscussed = () => {
  return data.discussed.items;
};

export const getMostRead = () => {
  return data.mostread.items;
};

export const getSelected = () => {
  return data.selected.items;
};

export const getItem = (id) => {
  let result = "";
  const latest = data.latest.items.find((item) => item.id === +id);
  if (latest !== undefined) {
    result = { ...latest };
  }
  const discussed = data.discussed.items.find((item) => item.id === +id);
  if (discussed !== undefined) {
    result = { ...discussed };
  }
  const mostread = data.mostread.items.find((item) => item.id === +id);
  if (mostread !== undefined) {
    result = { ...mostread };
  }
  const selected = data.selected.items.find((item) => item.id === +id);
  if (selected !== undefined) {
    result = { ...selected };
  }
  return result;
};
