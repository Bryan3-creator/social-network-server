import { InvalidArgumentExcetion } from '../../../exceptions'
import { type Optional } from '../../../types'
import { RootValueObject } from '../../root-value-object'
import { type IStrValueObjectEntry } from './entry'
import {
  DEFAULT_STR_MIN_LENGTH,
  DEFAULT_STR_TYPEOF_DATA
} from './str-value-object-entry-consts'
import {
  type StrMaxLength,
  type StrMinLength,
  type StrValue
} from './str-value-object-entry-properties'

export class StrValueObjectEntry extends RootValueObject<StrValue> {
  protected readonly minLength: StrMinLength
  protected readonly maxLength?: Optional<StrMaxLength>
  public constructor(entry: IStrValueObjectEntry) {
    const { minLength = DEFAULT_STR_MIN_LENGTH } = entry
    super({
      ...entry,
      typeofData: DEFAULT_STR_TYPEOF_DATA
    })
    this.minLength = minLength
    this.maxLength = entry.maxLength
    this._formatString()
    this._ensureValueIsMoreThan()
    if (entry.maxLength !== undefined) {
      this._ensureValueIsLessThan()
    }
  }

  public getMinLength = (): StrMinLength => {
    return this.minLength
  }

  public getMaxLength = (): Optional<StrMaxLength> => {
    return this.maxLength
  }

  private readonly _formatString = (): void => {
    const { key, value } = this._rootEntry
    const formmatedValue = value.trim()
    if (formmatedValue === '') {
      throw new InvalidArgumentExcetion({
        errorMessage: `<${key}> cannot be an empty string`
      })
    }
    this._rootEntry.value = formmatedValue
  }

  private readonly _ensureValueIsMoreThan = (): void => {
    const { key, value } = this._rootEntry
    const minLength = this.minLength
    if (value.length < minLength) {
      throw new InvalidArgumentExcetion({
        errorMessage: `<${key}> must be at least ${minLength} chatacters`
      })
    }
  }

  private readonly _ensureValueIsLessThan = (): void => {
    const { key, value } = this._rootEntry
    const maxLength = this.maxLength
    if (maxLength === undefined) {
      throw new InvalidArgumentExcetion({
        errorMessage: 'the max length is not defined'
      })
    }
    if (value.length > maxLength) {
      throw new InvalidArgumentExcetion({
        errorMessage: `<${key}> can not is more than ${maxLength} characters`
      })
    }
  }
}
