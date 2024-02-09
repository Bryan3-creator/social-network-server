import { type BaseRootEntry } from '../../../root-value-object'
import { type DateValue } from '../date-value-object-entry-properties'
import { type IDateValueObject } from './entry'

export interface BaseDateEntry
  extends Omit<BaseRootEntry<DateValue>, 'key'>,
    IDateValueObject {}
