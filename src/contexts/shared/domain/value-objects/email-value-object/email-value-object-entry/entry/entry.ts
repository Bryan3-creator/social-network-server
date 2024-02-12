import { type RootKey } from '../../../root-value-object'
import { type IStrValueObjectEntry } from '../../../str-value-object'

export interface IEmailValueObject
  extends Pick<IStrValueObjectEntry, 'value'> {}

export interface IEmailValueObjectEntry
  extends Omit<IStrValueObjectEntry, 'key'>,
    IEmailValueObject {
  key?: RootKey
}
