const store = {
  todos: [
    {
      id: "1",
      title: "Complete Task A",
      completed: true,
    },
    {
      id: "2",
      title: "Read Book",
      completed: true,
    },
    {
      id: "3",
      title: "write Code",
      completed: true,
    },
  ],
};
const storeHandler = {
  get(target, property) {
    console.log("oh u are trying to get ", property);
    return target[property];
  },
  set(target, property, value) {
    console.log(target, property, value);
    console.log("oh u r tyring to set the ");
    target[property] = value;
    return true;
  },
};
const storeProxy = new Proxy(store, storeHandler);
export default storeProxy;
