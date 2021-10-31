import { range } from 'rxjs';

const source$ = range(1, 100);
// source$.subscribe(console.log);

const source2$ = range(1.5, 3);
source2$.subscribe(console.log)
