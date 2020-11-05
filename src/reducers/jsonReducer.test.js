import reducer from './jsonReducer';
import { setUserName, setUserInformation } from '../actions/jsonActions';

describe('character reducer', () => {
  it('handles the SET_USER_NAME action', () => {
    const state = {
      userName: '',
      searchedUserName: '',
      followerCount: 0,
      followingCount: 0,
      linkUrl: '',
    };

    const action = setUserName('pm-wilson');

    const newState = reducer(state, action);

    expect(newState).toEqual({
      userName: 'pm-wilson',
      searchedUserName: '',
      followerCount: 0,
      followingCount: 0,
      linkUrl: '',
    });
  });

  it('handle the SET_USER_INFORMATION', () => {
    const state = {
      userName: '',
      searchedUserName: '',
      followerCount: 0,
      followingCount: 0,
      linkUrl: '',
    };

    const action = setUserInformation({
      searchedUserName: 'pm-wilson',
      followerCount: 1,
      followingCount: 3,
      linkUrl: 'https://github.com/pm-wilson/',
    });

    const newState = reducer(state, action);

    expect(newState).toEqual({
      userName: '',
      searchedUserName: 'pm-wilson',
      followerCount: 1,
      followingCount: 3,
      linkUrl: 'https://github.com/pm-wilson/',
    });
  });
});
