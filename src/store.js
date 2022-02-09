import { init } from "@rematch/core";
import * as models from "./models";

export const createStore = initialState => init({
  models: {
    ...models,
  },
  redux: {
    initialState,
  },
})

const store = createStore();

export default store;
