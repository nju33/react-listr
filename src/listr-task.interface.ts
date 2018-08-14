import {Task} from './task';

export interface ListrTask<C extends object> {
  title: string;
  task(context: C | {}, task: Task<C>): Promise<any>;
}
