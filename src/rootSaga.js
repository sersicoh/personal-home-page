import { all } from "redux-saga/effects";
import { sagaGitUserRepositories } from "./services/sagaGitUserRepositories";

export function* rootSaga() {
  yield all([sagaGitUserRepositories()]);
}
