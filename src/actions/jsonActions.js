import { getGitHubInfo } from '../services/gitHubApi';

export const SET_USER_NAME = 'SET_USER_NAME';
export const setUserName = userName => ({
  type: SET_USER_NAME,
  payload: userName,
});

export const SET_USER_INFORMATION = 'SET_USER_INFORMATION';
export const setUserInformation = json => ({
  type: SET_USER_INFORMATION,
  payload: json,
});

export const fetchUser = (userName) => dispatch => {
  console.log('there');

  getGitHubInfo(userName)
    .then(info => {
      console.log(info);
      dispatch(setUserInformation({
        searchedUserName: info.login,
        followerCount: info.followers,
        followingCount: info.following,
        linkUrl: info.url,
      }));
    });
};




export const FETCHING_USER_INFO = 'FETCHING_USER_INFO';

export const fetchingUserInfo = user => ({
  type: FETCHING_USER_INFO,
  user,
});

export const fetchUserData = user => dispatch => {
  console.log('fetch');
  dispatch(fetchingUserInfo(user));
  getGitHubInfo(user)
    .then(info => {
      dispatch(setUserInformation(info));
    });
};
