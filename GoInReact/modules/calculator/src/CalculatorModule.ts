import { NativeModule, requireNativeModule } from 'expo';

import { CalculatorModuleEvents } from './Calculator.types';

declare class CalculatorModule extends NativeModule<CalculatorModuleEvents> {
  PI: number;
  hello(): string;
  setValueAsync(value: string): Promise<void>;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<CalculatorModule>('Calculator');
