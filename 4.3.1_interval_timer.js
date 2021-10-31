import { interval, mapTo, startWith, timer } from 'rxjs';
const $numbers = interval(1000);

// $numbers.subscribe(console.log);
const now = new Date();
const later = new Date(now.getTime() + 2000);

const source$ = timer(later);
// source$.subscribe(console.log);
//第二个参数设置时间间隔，设置后同interval
timer(3000,1000).subscribe(console.log)
