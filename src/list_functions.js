// Add function structure
export const add = (inputtext, taskarr) => {
  const len = taskarr.length;
  taskarr.push({
    description: inputtext,
    completed: false,
    index: len + 1,
  });
};

// Edit function structure
export const edit = (editinput, taskarr, id) => {
  taskarr[id].description = editinput;
};

// Remove function structure
export const erase = (taskarr, id) => {
  taskarr.splice(id - 1, 1);
  taskarr.forEach((element, index) => {
    element.index = index + 1;
  });
};
