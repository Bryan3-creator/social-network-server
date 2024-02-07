import { InvalidArgumentExcetion } from '../../../exceptions'
import { type IRootValueObjectEntry } from './entry'
import {
  type RootKey,
  type Primitives,
  type RootValue,
  type RootTypeofData
} from './root-value-object-entry-properties'

export class RootValueObjectEntry<T extends Primitives> {
  public constructor(protected readonly _rootEntry: IRootValueObjectEntry<T>) {
    if (_rootEntry.typeofData !== 'undefined') {
      this._ensureValueIsDefined()
      this._ensureValueIsCorrectTypeofData()
    }
  }

  public getKey = (): RootKey => {
    return this._rootEntry.key
  }

  public getValue = (): RootValue<T> => {
    return this._rootEntry.value
  }

  public getTypeofData = (): RootTypeofData => {
    return this._rootEntry.typeofData
  }

  private readonly _ensureValueIsDefined = (): void => {
    const { key, value } = this._rootEntry
    if (value === undefined || value === null) {
      throw new InvalidArgumentExcetion({
        errorMessage: `<${key}> is not defined`
      })
    }
  }

  private readonly _ensureValueIsCorrectTypeofData = (): void => {
    const { key, value, typeofData } = this._rootEntry
    if (typeof value !== typeofData) {
      throw new InvalidArgumentExcetion({
        errorMessage: `<${key}> must be of type <${typeofData}>`
      })
    }
  }
}
