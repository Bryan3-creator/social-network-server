import { type BaseRootEntry } from '../../../root-value-object'
import { type StrValue } from '../str-value-object-entry-properties'
import { type IStrValueObject } from './entry'

export interface BaseStrEntry
  extends Omit<BaseRootEntry<StrValue>, 'key'>,
    IStrValueObject {}
