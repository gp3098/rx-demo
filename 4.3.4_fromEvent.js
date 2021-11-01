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
eventA$.subscribe(console.log);
