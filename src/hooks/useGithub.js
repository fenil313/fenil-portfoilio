import { useState, useEffect } from 'react';

export const useGithub = (username) => {
  const [data, setData] = useState({ repos: [], loading: true });

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
      .then(res => res.json())
      .then(repos => setData({ repos, loading: false }))
      .catch(() => setData({ repos: [], loading: false }));
  }, [username]);

  return data;
};