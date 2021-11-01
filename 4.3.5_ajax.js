// import { ajax } from 'rxjs/ajax';
// const ctx$ = ajax({
//   method: 'GET',
//   url: 'http://www.baidu.com',
//   responseType: 'text',
// });
// // const ctx$ = ajax.get('http://www.baid.com');
// ctx$.subscribe({
//   next(val) {
//     console.log('val', val);
//   },
//   error(err) {
//     console.error('err:', err);
//   },
//   complete() {
//     console.log('complete');
//   },
// });

// import { from } from 'rxjs';
// const ctx$ = from(fetch('http://www.baidu.com'));
// ctx$.subscribe({
//   next(val) {
//     console.log(val);
//   },
//   error(val) {
//     console.log(val);
//   },
//   complete(val) {
//     console.log('complete', val);
//   },
// });
