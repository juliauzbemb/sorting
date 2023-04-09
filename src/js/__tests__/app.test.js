import orderByProps from '../sorting';

const obj = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

test('check orderByProps function with keys', () => {
  const received = orderByProps(obj, ['name', 'level']);
  const expectedResult = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  expect(received).toEqual(expectedResult);
});

test('check orderByProps without keys given', () => {
  const received = orderByProps(obj);
  const expectedResult = [
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ];
  expect(received).toEqual(expectedResult);
});

test('check orderByProps with undefined keys', () => {
  const received = orderByProps(obj, ['name', 'status']);
  const expectedResult = [
    { key: 'name', value: 'мечник' },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
  ];
  expect(received).toEqual(expectedResult);
});
