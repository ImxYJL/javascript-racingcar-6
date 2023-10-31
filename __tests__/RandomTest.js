import { Random } from '@woowacourse/mission-utils';
import { pickNumberInRange } from '../src/utility/random'; // Import the pickNumberInRange function from your module

describe('pickNumberInRange', () => {
  // Mocking Random.pickNumberInRange 메서드
  jest.spyOn(Random, 'pickNumberInRange');

  it('should call Random.pickNumberInRange with the correct arguments', () => {
    const startNumber = 1;
    const endNumber = 10;
    pickNumberInRange(startNumber, endNumber);

    expect(Random.pickNumberInRange).toHaveBeenCalledWith(
      startNumber,
      endNumber,
    );
  });

  it('should return the value from Random.pickNumberInRange', () => {
    const startNumber = 1;
    const endNumber = 10;
    const expectedResult = 5; // 예상 결과값, 필요에 따라 수정하세요
    Random.pickNumberInRange.mockReturnValue(expectedResult);

    const result = pickNumberInRange(startNumber, endNumber);

    expect(result).toBe(expectedResult);
  });

  // 다른 테스트 케이스를 추가하세요
});
