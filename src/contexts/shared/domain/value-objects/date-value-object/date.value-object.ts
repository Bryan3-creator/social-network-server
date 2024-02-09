import { type DateValue, DateValueObjectEntry } from './date-value-object-entry'

export class DateValueObject extends DateValueObjectEntry {
  static create = (): DateValue => {
    return new Date()
  }
}
