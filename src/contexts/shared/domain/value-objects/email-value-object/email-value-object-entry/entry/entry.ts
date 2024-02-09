import { type IStrValueObjectEntry } from '../../../str-value-object'

export interface IEmailValueObject
  extends Partial<Pick<IStrValueObjectEntry, 'key'>> {}

export interface IEmailValueObjectEntry
  extends Omit<IStrValueObjectEntry, 'key'>,
    IEmailValueObject {}
