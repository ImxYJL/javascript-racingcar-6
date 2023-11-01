import { Random } from '@woowacourse/mission-utils';
import { pickNumberInRange } from '../../src/utility/random'; // Import the pickNumberInRange function from your module

describe('난수 함수 테스트', () => {
  jest.spyOn(Random, 'pickNumberInRange');

  it('주어진 매개변수대로 함수를 호출하는지 테스트', () => {
    const startNumber = 1;
    const endNumber = 10;
    pickNumberInRange(startNumber, endNumber);

    expect(Random.pickNumberInRange).toHaveBeenCalledWith(
      startNumber,
      endNumber,
    );
  });

  it('Random.pickNumberInRange가 값을 제대로 반환하는지 테스트', () => {
    const startNumber = 1;
    const endNumber = 10;
    const expectedResult = 5; // 예상 결과값
    Random.pickNumberInRange.mockReturnValue(expectedResult);

    const result = pickNumberInRange(startNumber, endNumber);
    expect(result).toBe(expectedResult);
  });
});
