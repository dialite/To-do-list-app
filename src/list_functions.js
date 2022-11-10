exports.add = (inputtext, taskarr) => {
  const len = taskarr.length;
  taskarr.push({
    description: inputtext,
    completed: false,
    index: len + 1,
  });
};

exports.edit = (editinput, taskarr, id) => {
  taskarr[id].description = editinput;
};

exports.erase = (taskarr, id) => {
  taskarr.splice(id - 1, 1);
  taskarr.forEach((element, index) => {
    element.index = index + 1;
  });
};
exports.clear = (taskarr) => {
  taskarr = taskarr.filter((element) => element.completed !== true);
  taskarr.forEach((element, index) => {
    element.index = index + 1;
  });
  return taskarr;
};
