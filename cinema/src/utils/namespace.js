function mapValues(obj, f) {
  const res = {};
  Object.keys(obj).forEach((key) => {
    res[key] = f(obj[key], key);
  });
  return res;
}

export default (module, types) => {
  const newObj = {};
  mapValues(types, (names, type) => {
    newObj[type].forEach((name) => {
      newObj[type][name] = `${module}:${name}`;
    });
  });
  return newObj;
};
