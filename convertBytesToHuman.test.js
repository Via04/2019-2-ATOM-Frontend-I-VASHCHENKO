/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== '1 B',
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === '5 B'
 */

import convertBytesToHuman from './convertBytesToHuman';

test('Возвращает -1 для неправильного типа данных', () => {
  expect(convertBytesToHuman(-123321)).toBe(-1)
  expect(convertBytesToHuman("string")).toBe(-1)
  expect(convertBytesToHuman(123.123)).toBe(-1)
  expect(convertBytesToHuman([1,2,3,3,2,1])).toBe(-1)
});

test('Возвращает корректное значение для чисел', () => {
  for(let i = 0; i < 1023; i++) {
    expect(convertBytesToHuman(i)).toBe(i.toString() + " B")
  }
  expect(convertBytesToHuman(123123123)).toBe("117.42 MB")
  expect(convertBytesToHuman(1024)).toBe("1 KB")

});

// другая группа проверок
