import {createStore, Store} from "redux";
import helloApp from "../hello/reducer";

export default function configureStore(): Store<any> {
  return createStore(helloApp);
}