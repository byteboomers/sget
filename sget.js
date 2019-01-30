module.exports = function(object, path) {
  return path.reduce(function(parent, property) {
    if (parent === undefined) {
      return undefined;
    }
    const value = parent[property];
    if (value === undefined) {
      return undefined;
    }
    return value;
  }, object);
};
