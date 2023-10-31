import {
  getHyphens,
  splitStringByComma,
  joinArrayWithComma,
} from '../src/utility/string';

describe('문자열 함수 테스트', () => {
  test('주어진 수만큼 -를 리턴하는 함수', () => {
    expect(getHyphens(0)).toBe('');
    expect(getHyphens(1)).toBe('-');
    expect(getHyphens(5)).toBe('-----');
  });

  test('한 문자열을 ,를 기준으로 나눠 배열에 저장하는 함수', () => {
    expect(splitStringByComma('apple,banana,cherry')).toEqual([
      'apple',
      'banana',
      'cherry',
    ]);
    expect(splitStringByComma('')).toEqual(['']);
  });

  test('배열 요소들을 ,를 기준으로 이어붙여 하나의 문자열로 만드는 함수', () => {
    expect(joinArrayWithComma(['apple', 'banana', 'cherry'])).toBe(
      'apple,banana,cherry',
    );
    expect(joinArrayWithComma([])).toBe('');
  });
});

// describe("문자열 테스트", () => {
//   test("split 메서드로 주어진 값을 구분", () => {
//     const input = "1,2";
//     const result = input.split(",");

//     expect(result).toContain("2", "1");
//     expect(result).toContainEqual("1", "2");
//   });

//   test("split 메서드로 구분자가 포함되지 않은 경우 값을 그대로 반환", () => {
//     const input = "1";
//     const result = input.split(",");

//     expect(result).toContain("1");
//   });

//   test("substring 메서드로 특정 구간 값을 반환", () => {
//     const input = "(1,2)";
//     const result = input.substring(1, 4);

//     expect(result).toEqual("1,2");
//   });

//   test("at 메서드로 특정 위치의 문자 찾기", () => {
//     const input = "abc";
//     const result = input.at(0)

//     expect(result).toEqual("a");
//   });
// });
