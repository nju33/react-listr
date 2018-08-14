import React from 'react';
import {Processing, Complete} from './symbol';

export type ProgressState = 'processing' | 'complete';

export interface ProgressProps {
  state: ProgressState;
}

export const Progress: React.SFC<ProgressProps> = props => {
  if (props.state === 'processing') {
    return <Processing />;
  }

  return <Complete />;
};
