import Car from '../../src/game/Car';
import * as randomUtils from '../utility/random'; // Import the random utility functions
import * as validationUtils from '../utility/validation'; // Import the validation utility functions
import * as stringUtils from '../utility/string'; // Import the string utility functions
import * as consoleUtils from '../utility/console'; // Import the console utility functions

// Mock the utility functions
jest.mock('../utility/random');
jest.mock('../utility/validation');
jest.mock('../utility/string');
jest.mock('../utility/console');

describe('Car class', () => {
  beforeEach(() => {
    // Clear the mock implementation and reset any mock state before each test
    jest.clearAllMocks();
  });

  

  test('tryToMove method should not increase step count when randomNumber is not within 4 to 9', () => {
    // Mock the behavior of pickNumberInRange and isWithinFourToNine
    randomUtils.pickNumberInRange.mockReturnValue(2); // Mock a random number outside 4 to 9
    validationUtils.isWithinFourToNine.mockReturnValue(false); // Mock that it's not within 4 to 9

    const car = new Car('testCar');
    car.tryToMove();

    // Ensure that step count remains 0
    expect(car.#stepCount).toBe(0);
  });

  test('printStepState method should print the correct step state', () => {
    // Mock the behavior of getHyphens
    stringUtils.getHyphens.mockReturnValue('---'); // Mock hyphens for step count 3

    const car = new Car('testCar');
    car.#stepCount = 3; // Set step count to 3

    car.printStepState();

    // Ensure that the print function is called with the expected string
    expect(consoleUtils.print).toHaveBeenCalledWith('testCar : ---');
  });

  test('compareAndUpdateMaxStepCount method should return the maximum of two values', () => {
    const car = new Car('testCar');
    car.#stepCount = 5; // Set step count to 5
    const maxStepCount = 3;

    const updatedMaxStepCount = car.compareAndUpdateMaxStepCount(maxStepCount);

    // Ensure that the updated max step count is the maximum of the two values
    expect(updatedMaxStepCount).toBe(5);
  });

  test('isStepCountEqualToMax method should return the name if step count equals max step count', () => {
    const car = new Car('testCar');
    car.#stepCount = 5; // Set step count to 5
    const maxStepCount = 5; // Set max step count to the same value

    const result = car.isStepCountEqualToMax(maxStepCount);

    // Ensure that the result is the name of the car
    expect(result).toBe('testCar');
  });

  test('isStepCountEqualToMax method should return undefined if step count is not equal to max step count', () => {
    const car = new Car('testCar');
    car.#stepCount = 5; // Set step count to 5
    const maxStepCount = 3; // Set max step count to a different value

    const result = car.isStepCountEqualToMax(maxStepCount);

    // Ensure that the result is undefined
    expect(result).toBeUndefined();
  });
});

// describe("Car 클래스 테스트", () => {
//     test("isStepCountEqualToMax 테스트", () => {
//       const car = new Car("testCar");
//       car.tryToMove(); // Simulate a move
//       const maxStepCount = car.compareAndUpdateMaxStepCount(0);
  
//       // Test when step count is equal to max
//       expect(car.isStepCountEqualToMax(maxStepCount)).toBe("testCar");
  
//       // Test when step count is not equal to max
//       expect(car.isStepCountEqualToMax(maxStepCount + 1)).toBe(undefined);
//     });
//   });
  