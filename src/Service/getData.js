import data from "../sample-datar5.json";
export const getLatest = () => {
  return data?.latest?.items;
};

export const getDiscussed = () => {
  return data?.discussed?.items;
};

export const getMostRead = () => {
  return data?.mostread?.items;
};

export const getSelected = () => {
  return data?.selected?.items;
};

export const getItem = (name, id) => {
  let result = data[name]?.items;
  if (result.length) {
    let singleObj = result.find((o) => o.id === id);

    return singleObj.id ? singleObj : "";
  }
};
