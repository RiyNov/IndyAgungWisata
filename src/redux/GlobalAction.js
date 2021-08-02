export const CHANGE_HEADER_TITLE = 'CHANGE_HEADER_TITLE';

export const setHeaderTitle = value => {
  return {
    type: CHANGE_HEADER_TITLE,
    value,
  };
};
