import { type BaseRootEntry } from '../../../root-value-object'
import { type DateValue } from '../date-value-object-entry-properties'

export interface IDateValueObject
  extends Pick<BaseRootEntry<DateValue>, 'value'> {}

export interface IDateValueObjectEntry
  extends BaseRootEntry<DateValue>,
    IDateValueObject {}
