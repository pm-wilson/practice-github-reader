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
  getGitHubInfo(userName)
    .then(info => {
      dispatch(setUserInformation(info));
    });
};
