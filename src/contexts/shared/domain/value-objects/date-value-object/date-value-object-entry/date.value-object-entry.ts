import { RootValueObject } from '../../root-value-object'
import { DEFAULT_DATE_TYPEOF_DATA } from './date-value-object-entry-consts'
import { type DateValue } from './date-value-object-entry-properties'
import { type IDateValueObjectEntry } from './entry'

export class DateValueObjectEntry extends RootValueObject<DateValue> {
  public constructor(entry: IDateValueObjectEntry) {
    super({
      ...entry,
      typeofData: DEFAULT_DATE_TYPEOF_DATA
    })
  }
}
