import {
  type BaseStrEntry,
  type IStrValueObjectEntry
} from '../../../str-value-object'

export interface IUUIDValueObject extends Pick<BaseStrEntry, 'value'> {}

export interface IUUIDValueObjectEntry extends IStrValueObjectEntry {}
