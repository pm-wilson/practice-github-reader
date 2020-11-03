export const SET_JSON = 'SET_JSON';
export const setJSON = json => ({
  type: SET_JSON,
  payload: json,
});

export const RESET_JSON = 'RESET_JSON';
export const resetJSON = () => ({
  type: RESET_JSON
});
