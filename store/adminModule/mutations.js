export default {
  setCategory(state, payload) {
    state.category.push(payload);
  },
  find(state, title) {
    const foundItem = state.category.find((item) => item.title === title);
    state.foundCategory = foundCategory;
  },
};
