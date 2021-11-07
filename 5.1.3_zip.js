import { interval, of, skip, take, zip } from 'rxjs';

const source1$ = of(1, 2, 3);
const source2$ = of('a', 'b', 'c');

const zipped$ = zip(source1$, source2$);

// zipped$.subscribe(console.log);

const source3$ = interval(1000).pipe(skip(1), take(10));

const source4$ = of('e', 'f', 'g', 'h', 'i');

const zipped2$ = zip(source3$, source2$, source4$);

zipped2$.subscribe(console.log);
