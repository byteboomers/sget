module.exports = (object, path) =>
  path.reduce((parent, property) => {
    if (parent === undefined) {
      return undefined;
    }
    const value = parent[property];
    if (value === undefined) {
      return undefined;
    }
    return value;
  }, object);
