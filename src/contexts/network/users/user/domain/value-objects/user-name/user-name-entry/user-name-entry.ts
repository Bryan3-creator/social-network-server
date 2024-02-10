import { StrValueObject } from '@shared/domain/value-objects'
import { type IUserNameEntry } from './entry/entry'
import {
  DEFAULT_USER_NAME_KEY,
  DEFAULT_USER_NAME_MIN_LENGTH
} from './user-name-entry-consts'
import { InvalidNameException } from '../../../exceptions'

export class UserNameEntry extends StrValueObject {
  public constructor(entry: IUserNameEntry) {
    super({
      ...entry,
      key: DEFAULT_USER_NAME_KEY,
      minLength: DEFAULT_USER_NAME_MIN_LENGTH
    })
    this._ensureNameDoesNotHaveNumbers()
    this._ensureNameDoesNotHaveSpecialCharacters()
  }

  private readonly _ensureNameDoesNotHaveNumbers = (): void => {
    const { key } = this._rootEntry
    if (this.hasNumbers()) {
      throw new InvalidNameException({
        errorMessage: `<${key}> cannot have numbers`
      })
    }
  }

  private readonly _ensureNameDoesNotHaveSpecialCharacters = (): void => {
    const { key } = this._rootEntry
    if (this.hasSpecialCharacters()) {
      throw new InvalidNameException({
        errorMessage: `<${key}> cannot have special characters`
      })
    }
  }
}
