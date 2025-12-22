import { requireNativeView } from 'expo';
import * as React from 'react';

import { CalculatorViewProps } from './Calculator.types';

const NativeView: React.ComponentType<CalculatorViewProps> =
  requireNativeView('Calculator');

export default function CalculatorView(props: CalculatorViewProps) {
  return <NativeView {...props} />;
}
