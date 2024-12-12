import { makeAutoObservable } from "mobx";

class myStore {

  count: number = 0;

  constructor() {
    makeAutoObservable(this)
  }

  setCount = () => {
    this.count = this.count + 1;
  }
}

const store = new myStore()
export default store;