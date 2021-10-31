import Rxjs, { map, of } from 'rxjs';
let d$ = new Rxjs.Observable((observer) => {
  observer.next(12);
  // observer.error(new Error('error 12'))
});
d$.subscribe({
  next: (val) => {
    console.log(val);
  },
  // error: (val) => {
  //   console.error(val);
  // },
});

let a$ = of([1, 2, 3, 4, 5]);
a$.subscribe((val) => {
  console.log('of:', val);
});
let a1$ = of(1, 2, 3, 4, 5, 6);
a1$.subscribe((val) => {
  console.log('a1$', val);
});
