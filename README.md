# sget

Safely access nested JavaScript object properties

## About

A utility method to safely access nested JavaScript object properties.

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

## Installation

```bash
npm install --save sget-js
```

[npm package link](https://www.npmjs.com/package/sget-js)

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
console.log(sget(menu, ["tooltip", "text"])); // undefined instead of access error
```
