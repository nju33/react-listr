import React from 'react';
import {Wrapper} from './wrapper.atom';
import {ListrTask} from './listr-task.interface';
import {Task} from './task';
import {Task as TaskAtom} from './task.atom';
import {Progress, ProgressState} from './progress.molecule';

export interface ListrProps<C extends object> {
  tasks: ListrTask<C>[];
  concurrent?: boolean;
  onDone?(context: C | {}): any;
}

export interface ListrState {
  completedTaskTitles: string[];
}

export class Listr<C extends object> extends React.Component<
  ListrProps<C>,
  ListrState
> {
  constructor(props: ListrProps<C>) {
    super(props);

    this.state = {
      completedTaskTitles: [],
    };
  }

  static defaultProps = {
    concurrent: false,
  };

  static Wrapper: React.SFC<{}> = props => {
    return <Wrapper>{props.children}</Wrapper>;
  };

  completeTask(task: ListrTask<C>) {
    this.setState({
      completedTaskTitles: [...this.state.completedTaskTitles, task.title],
    });
  }

  async runTasks(): Promise<C | {}> {
    const context: C | {} = {};
    const tasks = this.props.tasks.map(task => new Task(task));

    if (this.props.concurrent) {
      await Promise.all(
        tasks.map(async task => {
          await task.task(context, task);
          this.completeTask(task);
        }),
      );
    } else {
      for (const task of tasks) {
        await task.task(context, task);
        this.completeTask(task);
      }
    }

    return context;
  }

  async componentDidMount() {
    const context = await this.runTasks();

    if (this.props.onDone !== undefined) {
      this.props.onDone(context);
    }
  }

  getState(task: ListrTask<C>): ProgressState {
    if (this.state.completedTaskTitles.indexOf(task.title) === -1) {
      return 'processing';
    }
    return 'complete';
  }

  render() {
    return (
      <Wrapper>
        {this.props.tasks.map(task => {
          return (
            <TaskAtom key={task.title}>
              <Progress state={this.getState(task)} />
              {task.title}
            </TaskAtom>
          );
        })}
      </Wrapper>
    );
  }
}
