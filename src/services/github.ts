import axios from "axios";

const USERNAME = "kelvinderitu";

export const getProjects = async () => {
  const { data } = await axios.get(
    `https://api.github.com/users/${USERNAME}/repos?sort=updated`
  );

  return data.filter(
    (repo: any) => !repo.fork
  );
};