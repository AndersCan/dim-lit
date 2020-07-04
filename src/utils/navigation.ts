import * as Router from '../router';

export function goTo(url: string) {
  return function (event: Event) {
    event.preventDefault();
    history.pushState({ data: 'no data' }, document.title, url);
    Router.update();
  };
}
