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
