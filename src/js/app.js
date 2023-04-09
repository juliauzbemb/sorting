import orderByProps from './sorting';

const obj = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

const sortedObj = orderByProps(obj, ['name', 'level']);
console.log(sortedObj);
