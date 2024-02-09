import { type BaseRootEntry } from '../../../root-value-object'
import {
  type StrMaxLength,
  type StrMinLength,
  type StrValue
} from '../str-value-object-entry-properties'

export interface IStrValueObject
  extends Pick<BaseRootEntry<StrValue>, 'value'> {}

export interface IStrValueObjectEntry
  extends BaseRootEntry<StrValue>,
    IStrValueObject {
  minLength?: StrMinLength
  maxLength?: StrMaxLength
}
