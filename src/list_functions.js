export const add = (inputtext, taskarr) => {
  const len = taskarr.length;
  taskarr.push({
    description: inputtext,
    completed: false,
    index: len + 1,
  });
};

export const edit = (editinput, taskarr, id) => {
  taskarr[id].description = editinput;
};

export const erase = (taskarr, id) => {
  taskarr.splice(id - 1, 1);
  taskarr.forEach((element, index) => {
    element.index = index + 1;
  });
};
export const clear = (taskarr) => {
  taskarr = taskarr.filter((element) => element.completed !== true);
  taskarr.forEach((element, index) => {
    element.index = index + 1;
  });
  return taskarr;
};
