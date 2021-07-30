import Route from '@ember/routing/route';

export default class TodoRoute extends Route {
  model() {
    return [
      {
        id: 1,
        todo: 'go to the store',
      },
      {
        id: 2,
        todo: 'walk the dog',
      },
      {
        id: 3,
        todo: 'call mom',
      },
      {
        id: 4,
        todo: 'make dinner',
      },
    ];
  }
}

