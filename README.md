# sget

> Safely access nested javascript object properties

## About

A utility method to safely access nested javascript object properties.

It enables you to write this:

```javascript
const age = sget(school, ["teachers", 0, "personal", "age"]);
```

Instead of this:

```javascript
const age =
  school &&
  school.teachers &&
  school.teachers[0] &&
  school.teachers[0].personal &&
  school.teachers[0].personal.age
    ? school.teachers[0].personal.age
    : null;
```

## Usage

```javascript
const menu = {
  id: "file",
  value: "File",
  style: {
    color: "black",
    background: "white"
  }
};

console.log(sget(menu, ["style", "color"])); // "black"
console.log(sget(menu, ["tooltip", "text"])); // "null" instead of access error
```

## License

[MIT](http://opensource.org/licenses/MIT)

## Twitter

[Follow me on Twitter](https://twitter.com/KrolsBjorn)
