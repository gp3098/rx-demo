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
