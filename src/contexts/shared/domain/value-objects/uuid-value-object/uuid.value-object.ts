import { v4 as uuidv4 } from 'uuid'

import { type StrValue } from '../str-value-object'
import { UUIDValueObjectEntry } from './uuid-value-object-entry'

export class UUIDValueObject extends UUIDValueObjectEntry {
  static create = (): StrValue => {
    return uuidv4()
  }
}
