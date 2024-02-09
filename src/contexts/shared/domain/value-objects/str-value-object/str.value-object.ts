import {
  CONTAIN_NUMBERS_REG_EXP,
  CONTAIN_SPECIAL_CHARACTERS
} from './str-value-object-consts'
import { StrValueObjectEntry } from './str-value-object-entry'

export class StrValueObject extends StrValueObjectEntry {
  public hasNumbers = (): boolean => {
    const { value } = this._rootEntry
    if (CONTAIN_NUMBERS_REG_EXP.test(value)) return true
    return false
  }

  public hasSpecialCharacters = (): boolean => {
    const { value } = this._rootEntry
    if (CONTAIN_SPECIAL_CHARACTERS.test(value)) return true
    return false
  }
}
