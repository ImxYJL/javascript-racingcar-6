import { filterObjectsByValue, findMaxByKey } from '../src/utility/array';

describe('배열 함수 테스트', () => {
  test('key와 그 value가 주어졌을 때 주어진 값과 같은 값을 가진 객체를 담은 배열 반환', () => {
    const array = [
      { name: 'aaa', count: 1 },
      { name: 'bbb', count: 3 },
      { name: 'ccc', count: 2 },
      { name: 'ddd', count: 5 },
      { name: 'eee', count: 5 },
    ];

    const result = filterObjectsByValue(array, 'count', 5);
    expect(result).toEqual([
      { name: 'ddd', count: 5 },
      { name: 'eee', count: 5 },
    ]);
  });

  test('주어진 key의 Max 값을 반환', () => {
    const array = [
      { name: 'aaa', count: 1 },
      { name: 'bbb', count: 3 },
      { name: 'ccc', count: 2 },
      { name: 'ddd', count: 5 },
    ];

    const result = findMaxByKey(array, 'count');
    expect(result).toEqual(5);
  });
});
