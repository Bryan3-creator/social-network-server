import {
  type BaseStrEntry,
  type IStrValueObjectEntry
} from '../../../str-value-object'

export interface IImageValueObject extends Pick<BaseStrEntry, 'value'> {}

export interface IImageValueObjectEntry
  extends IStrValueObjectEntry,
    IImageValueObject {}
