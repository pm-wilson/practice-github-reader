export const getGitHubInfo = (userName) => {
  return fetch(`https://api.github.com/users/${userName}`)
    .then(res => res.json())
    .then(json => json.results.map(info => ({
      searchedUserName: info.login,
      followerCount: info.followers,
      followingCount: info.following,
      linkUrl: info.url,
    })));
};
