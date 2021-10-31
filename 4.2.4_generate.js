import { map, of, generate, range } from 'rxjs';
// const source$ = of(1, 2, 3).pipe(map((x) => x * 2));

// source$.subscribe(console.log);

// const source1$ = generate(
//   0,
//   (x) => x < 4,
//   (x) => x + 1,
//   (x) => x * x
// );

// source1$.subscribe(console.log);

//手动实现一个range
const range1$ = range(1, 5);

range1$.subscribe(console.log);
console.log('手动通过generate实现range');
const range2$ = generate(
  1,
  (x) => x <= 5,
  (x) => x + 1,
  (x) => x
);

range2$.subscribe(console.log);

const range3$ = generate({
  initialState: 1,
  condition(value) {
    return value <= 5;
  },
  iterate(value) {
    return value + 1;
  },
  resultSelector(value) {
    return value;
  },
});

console.log('generate的创建模式函数形式已经被废弃了，需要该用选项形式');
range3$.subscribe(console.log);
/**
 * 在传统的js编程中，如果某个问题的解决方法是用一个for循环产生的数据集合，那么搬到rxjs世界内就是适合于使用generate来产生一个Observable对象
 */
const source$ = generate({
  initialState: 'x',
  condition(val) {
    return val.length <= 3;
  },
  iterate(val) {
    return val + 'x';
  },
  resultSelector(val) {
    return val;
  },
});
console.log('通过generate产生字符串');
source$.subscribe(console.log);

const digit$ = generate({
  initialState: '0',
  condition(bits) {
    return bits.length <= 8;
  },
  iterate(bit) {
    return bit + '0';
  },
  resultSelector(bit) {
    return String(bit);
  },
});

digit$.subscribe(console.log);
