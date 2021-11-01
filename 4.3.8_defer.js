import { defer, fromEvent, interval } from 'rxjs';
import { EventEmitter } from 'events';
const emitter = new EventEmitter();
const clicksOrInterval = defer(function () {
  // return Math.random() > 0.5 ? fromEvent(emitter, 'click') : interval(1000);
  return fromEvent(emitter, 'click');
});
// emitter.emit('click', { ok: 1 });
// emitter.emit('click', { ok: 1 });
// emitter.emit('click', { ok: 1 });
// emitter.emit('click', { ok: 1 });

clicksOrInterval.subscribe((val) => {
  console.log(val);
  // emitter.emit('click', { ok: 1 });
  setTimeout(() => {
    //递归,每次调用emit事件的时候触发subscribe，每次触发subscribe的时候又会重新触发事件
    emitter.emit('click', { ok: 3 });
  }, 3000);
});
emitter.emit('click', { ok: 5 });

setTimeout(() => {
  emitter.emit('click', { ok: 6 });
}, 5000);
