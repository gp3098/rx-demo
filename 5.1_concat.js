import { concat, interval, of } from 'rxjs';

const source1$ = of(1, 2, 3);
const source2$ = of(4, 5, 6);
const source3$ = of(7, 8, 9);

const concated$ = concat(source1$, source2$, source3$);

concated$.subscribe(console.log);

const source4$ = interval(1000);
const concatedNever$ = concat(source4$, source1$);
concatedNever$.subscribe(console.log)
