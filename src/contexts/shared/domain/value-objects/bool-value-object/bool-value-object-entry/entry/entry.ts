import { type BaseRootEntry } from '../../../root-value-object'
import { type BoolValue } from '../bool-value-object-entry-properties'

export interface IBoolValueObject
  extends Pick<BaseRootEntry<BoolValue>, 'value'> {}

export interface IBoolValueObjectEntry
  extends BaseRootEntry<BoolValue>,
    IBoolValueObject {}
