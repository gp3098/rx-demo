import { fromEvent, interval, take, withLatestFrom } from 'rxjs';
import { EventEmitter } from 'events';
const emitter = new EventEmitter();
// const source$ = fromEvent(emitter, 'msg');
const timer = interval(1000).pipe(take(10));

const click = fromEvent(emitter, 'click');
click.pipe(withLatestFrom(timer)).subscribe(console.log);

setTimeout(() => {
  emitter.emit('click', 'clicked 0');
}, 1000);

setTimeout(() => {
  emitter.emit('click', 'clicked 1');
}, 3000);

setTimeout(() => {
  emitter.emit('click', 'clicked 2');
}, 5000);