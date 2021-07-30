import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class TodoListComponent extends Component {
  @tracked
  text = "";

  @action
  submit(model, e) {
    e.preventDefault();
    const newTodo = this.text;
    model.pushObject(newTodo);
    this.text = "";
  }

  @action
  onChange(e) {
    this.text = e.target.value;
  }
}