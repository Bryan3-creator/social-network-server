import { InvalidArgumentExcetion } from '../../../exceptions'
import { type Optional } from '../../../types'
import { RootValueObject } from '../../root-value-object'
import { type IIntValueObjectEntry } from './entry'
import {
  DEFAULT_INT_MIN_VALUE,
  DEFAULT_INT_TYPEOF_DATA
} from './int-value-object-entry-consts'
import {
  type MinValue,
  type IntValue,
  type MaxValue
} from './int-value-object-entry-properties'

export class IntValueObjectEntry extends RootValueObject<IntValue> {
  protected readonly minValue: MinValue
  protected readonly maxValue?: Optional<MaxValue>
  public constructor(entry: IIntValueObjectEntry) {
    const { minValue = DEFAULT_INT_MIN_VALUE } = entry
    super({
      ...entry,
      typeofData: DEFAULT_INT_TYPEOF_DATA
    })
    this.minValue = minValue
    this.maxValue = entry.maxValue
    this._ensureValueIsGreaterThan()
    if (this.maxValue !== undefined) {
      this._ensureValueIsLessThan()
    }
  }

  public getMinValue = (): MinValue => {
    return this.minValue
  }

  public getMaxValue = (): Optional<MaxValue> => {
    return this.maxValue
  }

  private readonly _ensureValueIsGreaterThan = (): void => {
    const { key, value } = this._rootEntry
    const minValue = this.minValue
    if (value < minValue) {
      throw new InvalidArgumentExcetion({
        errorMessage: `<${key}> must be greater or equal to ${minValue}`
      })
    }
  }

  private readonly _ensureValueIsLessThan = (): void => {
    const { key, value } = this._rootEntry
    const maxValue = this.maxValue
    if (maxValue !== undefined && value > maxValue) {
      throw new InvalidArgumentExcetion({
        errorMessage: `<${key}> must be less or equal to ${maxValue}`
      })
    }
  }
}
