
/**
* @format
* @flow
*/

import { observable, action, computed } from 'mobx'
import store from '../../stores'

class TodoController {

  @observable
  todo


  @action
  saveTodo() {
    store.todos.addTodo(this.todo)
    this.todo = ''
  }

  @action
  addTodo(todo: string) {
    this.todo = todo
  }

  @computed
  get items() {
    return store.todos.items
  }

  @computed
  get newTodo() {
    return this.todo
  }

}


export default new TodoController()
