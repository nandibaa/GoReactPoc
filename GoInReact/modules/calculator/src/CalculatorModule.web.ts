import { registerWebModule, NativeModule } from 'expo';

import { ChangeEventPayload } from './Calculator.types';

type CalculatorModuleEvents = {
  onChange: (params: ChangeEventPayload) => void;
}

class CalculatorModule extends NativeModule<CalculatorModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
};

export default registerWebModule(CalculatorModule, 'CalculatorModule');
