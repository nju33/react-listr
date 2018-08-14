import React from 'react';
import {render} from 'react-dom';
import {Listr} from '../dist';

const div = document.createElement('div');
document.body.appendChild(div);
Object.assign(document.body.style, {
  fontFamily: 'Menlo, Monaco, "Courier New", monospace',
  margin: '0',
  background: '#222',
  height: '100vh',
  width: '100vw',
});

const delay = (sec: number) => {
  return new Promise(r => {
    setTimeout(() => {
      r();
    }, sec * 1000);
  });
};

render(
  <div
    style={{
      width: '500px',
      margin: '1em auto',
      padding: '1em',
      borderRadius: '3px',
      background: '#111',
      color: '#fff',
    }}
  >
    <Listr
      // concurrent
      tasks={[
        {
          title: 'test',
          async task() {
            await delay(2);
          },
        },
        {
          title: 'test2',
          async task() {
            await delay(3);
          },
        },
        {
          title: 'test3',
          async task() {
            await delay(1);
          },
        },
        {
          title: 'test4',
          async task() {
            await delay(4);
          },
        },
      ]}
    />
  </div>,
  div,
);
