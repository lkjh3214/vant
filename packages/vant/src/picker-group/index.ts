import { withInstall } from '../utils';
import _PickerGroup, { PickerGroupProps } from './PickerGroup';

export const PickerGroup = withInstall(_PickerGroup);
export default PickerGroup;
export { pickerGroupProps } from './PickerGroup';
export type { PickerGroupProps };

declare module 'vue' {
  export interface GlobalComponents {
    VanPickerGroup: typeof PickerGroup;
  }
}
