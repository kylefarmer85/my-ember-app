import Route from '@ember/routing/route';

export default class TodoRoute extends Route {
  model() {
    return ['go to the store', 'walk the dog', 'call mom', 'make dinner'];
  }
}

