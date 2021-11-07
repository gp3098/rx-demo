import { fromEvent, map, merge, of, timer } from 'rxjs';
import { EventEmitter } from 'events';
const emitter = new EventEmitter();

const source1$ = timer(0, 1000).pipe(map((x) => x + 'A'));
const source2$ = timer(500, 1000).pipe(map((x) => x + 'B'));
const source3$ = timer(1000, 1000).pipe(map((x) => x + 'C'));

const merged$ = merge(source1$, source2$);
// merged$.subscribe(console.log);

const mergedLimited$ = merge(source1$, source2$, source3$, 2); //限制最多merge2个流，前两个如果不完结，3永无出头之日

// mergedLimited$.subscribe(console.log);

//2.merge的应用场景

const msg$ = fromEvent(emitter, 'msg');
const emitData$ = fromEvent(emitter, 'data');

//合并事件
const eventAll = merge(msg$, emitData$);
eventAll.subscribe(console.log);
emitter.emit('msg', 'aaa');
emitter.emit('data', 'bbb');
emitter.emit('msg', 'ccc');
emitter.emit('data', 'ddd');
