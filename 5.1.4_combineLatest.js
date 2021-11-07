import { combineLatest, map, of, timer } from 'rxjs';
const source1$ = timer(500, 1000);
const source2$ = timer(1000, 1000);

// const result$ = combineLatest([source1$, source2$]);
// result$.subscribe(console.log);

//=============

// const source3$ = of('a', 'b', 'c', 'd');
// const source4$ = of(1, 2, 3);
// const result1$ = combineLatest([source3$, source4$]);
// result1$.subscribe(console.log);

const result$ = combineLatest([source1$, source2$], (a, b) => `${a} and ${b}`);

// result$.subscribe(console.log);

//-------bug fixed by official--------
const original$ = timer(0, 1000);
const source3$ = original$.pipe(map((x) => (x = 'a')));
const source4$ = original$.pipe(map((x) => (x = 'b')));
const result2$ = combineLatest([source3$, source4$]);

result2$.subscribe(console.log);
