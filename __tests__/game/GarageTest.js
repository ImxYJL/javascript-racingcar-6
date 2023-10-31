import Garage from '../../src/game/Garage'; // Import the Garage class
import Car from '../../src/game/Car'; // You may need to import the Car class or create a mock

// Mock the Car class as it is used within the Garage class
jest.mock('../../src/game/Car');

describe('Garage class', () => {
    test('tryAllCarsMove method should call tryToMove on all cars', () => {
      const garage = new Garage(['Car1', 'Car2']);
      garage.tryAllCarsMove();
  
      // Ensure that tryToMove is called on all car instances
      expect(Car).toHaveBeenCalledTimes(2); // Two car instances were created
      expect(Car.mock.instances[0].tryToMove).toHaveBeenCalled();
      expect(Car.mock.instances[1].tryToMove).toHaveBeenCalled();
    });

      afterEach(() => {
    // Clear the mock implementation and reset any mock state after each test
    jest.clearAllMocks();
  });

  test('displayCarStateList method should call printStepState on all cars', () => {
    const garage = new Garage(['Car1', 'Car2']);
    garage.displayCarStateList();

    // Ensure that printStepState is called on all car instances
    expect(Car.mock.instances[0].printStepState).toHaveBeenCalled();
    expect(Car.mock.instances[1].printStepState).toHaveBeenCalled();
  });

  // 않되,
  test('findCarNameByValue method should return names of cars with max step count', () => {
    // Mock the behavior of compareAndUpdateMaxStepCount and isStepCountEqualToMax

    
    console.log(Car.mock.instances); // []
    Car.mock.instances[0].compareAndUpdateMaxStepCount.mockReturnValue(5);
    Car.mock.instances[1].compareAndUpdateMaxStepCount.mockReturnValue(3);
    Car.mock.instances[0].isStepCountEqualToMax.mockReturnValue('Car1');
    Car.mock.instances[1].isStepCountEqualToMax.mockReturnValue('Car2');

    const garage = new Garage(['Car1', 'Car2']);
    const result = garage.findCarNamesWithMaxSteps();

    // Ensure that the method returns the correct names
    expect(result).toEqual(['Car1']);
  });
  });

