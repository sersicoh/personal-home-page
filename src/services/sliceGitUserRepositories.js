import { createSlice } from "@reduxjs/toolkit";

const sliceGitUserRepositories = createSlice({
  name: "gitUserRepos",
  initialState: {
    repositories: null,
    isLoading: "null",
  },
  reducers: {
    fetchRepositories: (state) => {
      state.isLoading = "loading";
    },
    fetchRepositoriesSuccess: (state, { payload: repositories }) => {
      state.repositories = repositories;
      state.isLoading = "success";
    },
    fetchRepositoriesError: (state) => {
      state.isLoading = "error";
    },
  },
});

export const {
  fetchRepositories,
  fetchRepositoriesSuccess,
  fetchRepositoriesError,
} = sliceGitUserRepositories.actions;

export const gitUserRepositoriesState = (state) => state.gitUserRepos;
export const gitUserRepositories = (state) =>
  gitUserRepositoriesState(state).repositories;
export const gitUserRepositoriesLoadingStatus = (state) =>
  gitUserRepositoriesState(state).isLoading;

export default sliceGitUserRepositories.reducer;
