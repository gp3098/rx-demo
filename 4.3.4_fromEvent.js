import { fromEvent } from 'rxjs';
import { EventEmitter } from 'events';

class eventA extends EventEmitter {}
// eventA.on('data')
const eA = new eventA();
eA.emit('data', { a: 1 });
setTimeout(() => {
  eA.emit('data', { b: 1 });
}, 2000);
let i = 0;
setInterval(() => {
  i++;
  eA.emit('doSomeThing', { someThing: i });
}, 2000);
// const eventA$ = fromEvent(eA, 'data');
// eventA$.subscribe(console.log);

const eventA$ = fromEvent(eA, 'doSomeThing');
const subscr1 = eventA$.subscribe(console.log);
setTimeout(() => {
  subscr1.unsubscribe();
}, 7000);
//-------------
const emitter = new EventEmitter();
const source$ = fromEvent(emitter, 'msg');
source$.subscribe(
  (val) => {
    console.log('msg:', val);
  },
  (err) => console.error('catch', err),
  () => console.log('complete')
);
emitter.emit('msg', 1);
emitter.emit('msg', 2);
emitter.emit('another-msg', 'oops');
emitter.emit('msg', 3);
