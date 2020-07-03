export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  const serializedState = JSON.stringify(state);
  console.log(state);
  console.log(serializedState);
  localStorage.setItem("state", serializedState);
};
