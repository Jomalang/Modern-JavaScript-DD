const fibonacci = {
  [Symbol.iterator]() {
    [pre, cur] = [0, 1];
    const max = 30;

    return {
      next() {
        [pre, cur] = [cur, pre + cur];
        return {
          value: cur,
          done: cur >= max,
        };
      },
    };
  },
};

for (let item of fibonacci) {
  console.log(item);
}

const arr = [...fibonacci];
console.log(arr);

const [first, second, ...rest] = fibonacci;
console.log(first, second, rest);
