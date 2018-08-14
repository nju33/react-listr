import {ListrTask} from './listr-task.interface';

export class Task<C extends object> {
  title: ListrTask<C>['title'];
  task: ListrTask<C>['task'];
  private _output: string = '';

  constructor(task: ListrTask<C>) {
    this.title = task.title;
    this.task = task.task;
  }

  set output(text: string) {
    this._output = text;
  }
}