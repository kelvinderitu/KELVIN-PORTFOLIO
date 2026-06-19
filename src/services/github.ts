import axios from "axios";

const USERNAME = "kelvinderitu";

export const getProjects = async () => {
  const { data } = await axios.get(
    `https://api.github.com/users/${USERNAME}/repos?sort=updated`,
    {
      headers: {
        Authorization: `Bearer ${
          import.meta.env.VITE_GITHUB_TOKEN
        }`,
      },
    }
  );

  return data.filter(
    (repo: any) => !repo.fork
  );
};