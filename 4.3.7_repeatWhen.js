import { delay, interval, of, repeatWhen } from 'rxjs';
const notifier = () => {
  return interval(3000);
};
const source$ = of(1, 2, 3, 4);
// const repeated$ = source$.pipe(repeatWhen(notifier));
// 使用延迟设置repeat
const notifier1 = (notification$) => {
  return notification$.pipe(delay(3000));
};
const repeated$ = source$.pipe(repeatWhen(notifier1));

repeated$.subscribe(console.log);
