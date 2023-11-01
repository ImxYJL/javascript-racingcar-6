import Garage from './Garage.js';
import {
  splitStringByComma,
  joinArrayWithCommaAndBlank,
} from '../utility/string.js';
import { print, readLineAsync } from '../utility/console.js';
import { MESSAGE, ERROR_MESSAGE } from '../constant/message.js';
import {
  isValidateNumber,
  isNumberWithinBounds,
  isLengthWithinBounds,
  isDuplicateString,
  isContainString,
  isEmptyString,
} from '../utility/validation.js';

class RacingCarGame {
  #gameCount = 0;

  #nameList = [];

  #nameListString = '';

  #isMaxNameListLength() {
    if (this.#nameList.length > 1000) {
      throw new Error(ERROR_MESSAGE.wrongNameListLength);
    }
  }

  #isValidName() {
    const uniqueNameList = [];

    this.#nameList.forEach((name) => {
      isDuplicateString(name, uniqueNameList);
      isEmptyString(name, ERROR_MESSAGE.wrongNameInput);
      isLengthWithinBounds(name, 1, 5);

      uniqueNameList.push(name);
    });
  }

  #isValidGameCount() {
    isEmptyString(this.#gameCount, ERROR_MESSAGE.wrongGameCountInput);
    isValidateNumber(this.#gameCount);
    isNumberWithinBounds(parseInt(this.#gameCount, 10), 1, 70);
  }

  async #getNameString() {
    this.#nameListString = await readLineAsync(MESSAGE.nameInputGuide);
  }

  async #getGameCount() {
    this.#gameCount = await readLineAsync(MESSAGE.countInputGuide);
  }

  async gameStart() {
    await this.#getNameString();
    // 이름 문자열의 유효성 검증
    isEmptyString(this.#nameListString, ERROR_MESSAGE.wrongNameInput);
    isContainString(this.#nameListString, ',');

    // 각 이름의 유효성 검증
    this.#nameList = splitStringByComma(this.#nameListString);
    this.#isMaxNameListLength();
    this.#isValidName();

    await this.#getGameCount();
    this.#isValidGameCount();

    const garage = new Garage(Array.from(this.#nameList));

    print('');
    print(MESSAGE.resultGuide);

    while (this.#gameCount) {
      garage.tryAllCarsMove();
      garage.displayCarStateList();
      print('');
      this.#gameCount -= 1;
    }

    print(
      MESSAGE.winnerGuide +
        joinArrayWithCommaAndBlank(garage.findCarNamesWithMaxSteps()),
    );
  }
}

export default RacingCarGame;
