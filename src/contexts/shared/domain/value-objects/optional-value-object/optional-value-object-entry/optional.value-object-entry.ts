import { type Optional } from '../../../types'
import { type Primitives, RootValueObject } from '../../root-value-object'
import { type IOptionalValueObjectEntry } from './entry'
import {
  DEFAULT_OPTIONAL_TYPEOF_DATA,
  DEFAULT_OPTIONAL_VALUE
} from './optional-value-object-entry-consts'

export class OptionalValueObjectEntry<
  T extends Primitives
> extends RootValueObject<Optional<T>> {
  public constructor(entry: IOptionalValueObjectEntry<T>) {
    super({
      value: DEFAULT_OPTIONAL_VALUE,
      ...entry,
      typeofData:
        entry.value !== undefined
          ? entry.typeofData
          : DEFAULT_OPTIONAL_TYPEOF_DATA
    })
  }
}
