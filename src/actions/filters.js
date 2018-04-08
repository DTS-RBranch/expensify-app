//
//   Filter Action generators
//
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

//
//   Sort by Amount Action Generator
//
export const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

//
//   Sort by Date Action Generator
//
export const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

//
//   Start Date Action Generator
//
export const setStartDate = (startDate = undefined) => ({
  type: 'SET_START_DATE',
  startDate
});

//
//   End Date Action Generator
//
export const setEndDate = endDate => ({
  type: 'SET_END_DATE',
  endDate
});
