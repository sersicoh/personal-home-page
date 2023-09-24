import axios from "axios";
import { URL } from "./githubApiService";

export const fetchGitUserRepositories = (user) =>
  axios.get(`${URL}/users/${user}/repos`).then((response) => response.data);
