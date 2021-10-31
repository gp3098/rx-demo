import { Observable, of, repeat } from 'rxjs';

const source$ = of(1, 2, 3);
const repeated$ = source$.pipe(repeat(10));

// repeated$.subscribe(console.log)

const source2$ = new Observable((observer) => {
  console.log('on subscribe');
  observer.next(4);
  observer.next(5);
  observer.next(6);
  setTimeout(() => {
    observer.next(1);
  }, 1000);
  setTimeout(() => {
    observer.next(2);
  }, 2000);
  setTimeout(() => {
    observer.next(3);
  }, 3000);
  setTimeout(() => {
    observer.complete();//NOTE:这里注意一个细节，如果原始流不发送complete，是无法执行重复的
  }, 3000);
  return {
    unsubscribe() {
      console.log('on unsubscribe');
    },
  };
});

const repeated2$ = source2$.pipe(repeat(2));
repeated2$.subscribe({
  next(val) {
    console.log('val:', val);
  },
  complete() {
    console.log('complete');
  },
});
