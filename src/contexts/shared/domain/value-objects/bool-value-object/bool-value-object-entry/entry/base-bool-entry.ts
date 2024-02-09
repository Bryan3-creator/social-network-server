import { type BaseRootEntry } from '../../../root-value-object'
import { type BoolValue } from '../bool-value-object-entry-properties'
import { type IBoolValueObject } from './entry'

export interface BaseBoolEntry
  extends Omit<BaseRootEntry<BoolValue>, 'key'>,
    IBoolValueObject {}
