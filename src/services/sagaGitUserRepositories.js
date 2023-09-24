import { call, delay, put, takeLatest } from "redux-saga/effects";
import {
  fetchRepositories,
  fetchRepositoriesError,
  fetchRepositoriesSuccess,
} from "./sliceGitUserRepositories";
import { fetchGitUserRepositories } from "./fetchGitUserRepositories";
function* fetchGitUserRepositoriesHandler({ payload: user }) {
  try {
    yield delay(1000);
    const repositories = yield call(fetchGitUserRepositories, user);
    yield put(fetchRepositoriesSuccess(repositories));
  } catch (error) {
    yield call(fetchRepositoriesError());
  }
}

export function* sagaGitUserRepositories() {
  yield takeLatest(fetchRepositories.type, fetchGitUserRepositoriesHandler);
}
