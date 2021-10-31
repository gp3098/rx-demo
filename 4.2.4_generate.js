import { map, of, generate } from 'rxjs';
// const source$ = of(1, 2, 3).pipe(map((x) => x * 2));

// source$.subscribe(console.log);

const source1$ = generate(
  0,
  (x) => x < 4,
  (x) => x + 1,
  (x) => x * x
);

source1$.subscribe(console.log);
