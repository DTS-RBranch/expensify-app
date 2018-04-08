import moment from 'moment';
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from '../../actions/filters';

test('setTextFilter Action Generator (provided value)', () => {
  const text = 'NewTextFilter';
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  });
});

test('setTextFilter Action Generator (default value)', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test('sortByAmount Action Generator', () => {
  expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' });
});


test('sortByDate Action Generator', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  });
});

test('setStartDate Action Generator', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test('setEndDate Action Generator (value provided)', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});

test('setEndDate Action Generator (default value)', () => {
  const action = setEndDate();
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: undefined
  });
});
