export default function orderByProps(object, keys = []) {
  const arrayByKeys = [];
  const arrayByAlphabet = [];

  for (const key in object) {
    if (keys.includes(key)) {
      arrayByKeys.push({ key, value: object[key] });
    } else {
      arrayByAlphabet.push({ key, value: object[key] });
    }
  }

  arrayByKeys.sort((a, b) => keys.indexOf(a.key) - keys.indexOf(b.key));
  arrayByAlphabet.sort((a, b) => (a.key > b.key ? 1 : -1));
  return [...arrayByKeys, ...arrayByAlphabet];
}
