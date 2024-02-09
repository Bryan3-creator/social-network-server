import { validate } from 'uuid'

import { StrValueObject } from '../../str-value-object'
import { type IUUIDValueObjectEntry } from './entry'
import { InvalidArgumentExcetion } from '../../../exceptions'

export class UUIDValueObjectEntry extends StrValueObject {
  public constructor(entry: IUUIDValueObjectEntry) {
    super({
      ...entry
    })
    this._ensureValueIsValidUUID()
  }

  private readonly _ensureValueIsValidUUID = (): void => {
    const { key, value } = this._rootEntry
    if (!validate(value)) {
      throw new InvalidArgumentExcetion({
        errorMessage: `<${key}> is an invalid uuid`
      })
    }
  }
}
