import { concatAll, interval, map, take } from 'rxjs';

const ho$ = interval(1000).pipe(
  take(2),
  map((x) =>
    interval(1500).pipe(
      map((y) => x + ':' + y),
      take(2)
    )
  )
);

const concated$ = ho$.pipe(concatAll());
concated$.subscribe(console.log);
