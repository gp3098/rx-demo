import { range } from 'rxjs';

const source$ = range(1, 100);
source$.subscribe(console.log);
