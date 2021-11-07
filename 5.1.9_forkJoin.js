import { forkJoin, interval, take } from 'rxjs';

const source1$ = interval(1000).pipe(take(5));

const source2$ = interval(1000).pipe(take(2));
forkJoin([source1$,source2$]).subscribe(console.log)
