import { of, startWith, timer } from 'rxjs';

const original$ = timer(0, 1000);
original$.pipe(startWith('start')).subscribe(console.log);
