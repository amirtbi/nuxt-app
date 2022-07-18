export default {
  setCategory(context, payload) {
    console.log("Added category", payload);
    context.commit("setCategory", payload);
  },
 
};
