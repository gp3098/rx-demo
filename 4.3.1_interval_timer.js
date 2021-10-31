import { interval, mapTo, startWith, timer } from 'rxjs';
const $numbers = interval(1000);

// $numbers.subscribe(console.log);
const now = new Date();
const later = new Date(now.getTime() + 2000);

const source$ = timer(later);
source$.subscribe(console.log);
