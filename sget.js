module.exports = (object, path) =>
  path.reduce(
    (parent, property) =>
      parent && parent[property] ? parent[property] : null,
    object
  );
