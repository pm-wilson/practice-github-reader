import { SET_USER_NAME, SET_USER_INFORMATION } from '../actions/jsonActions';

const initialState = {
  userName: '',
  searchedUserName: '',
  followerCount: 0,
  followingCount: 0,
  linkUrl: '',
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_USER_NAME:
      return {
        ...state,
        userName: action.payload,
      };
    case SET_USER_INFORMATION:
      return {
        ...state,
        searchedUserName: action.payload.searchedUserName,
        followerCount: action.payload.followerCount,
        followingCount: action.payload.followingCount,
        linkUrl: action.payload.linkUrl,
      };
    default: return state;
  }
}
