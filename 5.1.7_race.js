import { map, race, timer } from 'rxjs';

const source1$ = timer(0, 2000).pipe(map((x) => x + 'a'));

const source2$ = timer(500, 2000).pipe(map((x) => x + 'b'));

const winner$ = race([source1$, source2$]);
winner$.subscribe(console.log)
