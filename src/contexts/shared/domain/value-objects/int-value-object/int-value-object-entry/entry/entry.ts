import { type BaseRootEntry } from '../../../root-value-object'
import {
  type MinValue,
  type IntValue,
  type MaxValue
} from '../int-value-object-entry-properties'

export interface IIntValueObject
  extends Pick<BaseRootEntry<IntValue>, 'value'> {}

export interface IIntValueObjectEntry extends BaseRootEntry<IntValue> {
  minValue?: MinValue
  maxValue?: MaxValue
}
