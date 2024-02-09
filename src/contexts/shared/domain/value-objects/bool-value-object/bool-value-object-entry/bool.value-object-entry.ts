import { RootValueObject } from '../../root-value-object'
import { DEFAULT_BOOL_TYPEOF_DATA } from './bool-value-object-entry-consts'
import { type BoolValue } from './bool-value-object-entry-properties'
import { type IBoolValueObjectEntry } from './entry'

export class BoolValueObjectEntry extends RootValueObject<BoolValue> {
  public constructor(entry: IBoolValueObjectEntry) {
    super({
      ...entry,
      typeofData: DEFAULT_BOOL_TYPEOF_DATA
    })
  }
}
