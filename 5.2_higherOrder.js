import { interval, map, take } from 'rxjs';

interval(1000).pipe(
  take(2),
  map((x) =>
    interval(1500).pipe(
      map((y) => x + ':' + y),
      take(2)
    )
  )
).subscribe(console.log)
