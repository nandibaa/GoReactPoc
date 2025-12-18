import * as React from 'react';

import { CalculatorViewProps } from './Calculator.types';

export default function CalculatorView(props: CalculatorViewProps) {
  return (
    <div>
      <iframe
        style={{ flex: 1 }}
        src={props.url}
        onLoad={() => props.onLoad({ nativeEvent: { url: props.url } })}
      />
    </div>
  );
}
