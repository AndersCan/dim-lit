import mitt, { Handler } from 'mitt';
const emitter: mitt.Emitter = mitt();

type Types = 'change';

export function on(type: Types, handler: Handler) {
  emitter.on(type, handler);
  // TODO - Is this OK?
  handler(current());
}

export function update() {
  emitter.emit('change', current());

  window.scrollTo({
    top: 0,
  });
}

export function current() {
  return location;
}

window.onpopstate = function (event: PopStateEvent) {
  update();
};
