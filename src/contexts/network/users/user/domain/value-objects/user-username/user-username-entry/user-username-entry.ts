import { StrValueObject } from '@src/contexts/shared/domain'
import { type IUserUsernameEntry } from './entry'
import {
  DEFAULT_USER_USERNAME_KEY,
  INVALID_USERNAME_SPECIAL_CHARACTERS
} from './user-username-entry-consts'
import { InvalidUsernameException } from '../../../exceptions'

export class UserUsernameEntry extends StrValueObject {
  public constructor(entry: IUserUsernameEntry) {
    super({
      ...entry,
      key: DEFAULT_USER_USERNAME_KEY
    })
    this._ensureUsernameDoesNotHaveSpecialCharacters()
    this._ensureUsernameDoesNotStartWithUnderscore()
  }

  private readonly _ensureUsernameDoesNotHaveSpecialCharacters = (): void => {
    const { key, value } = this._rootEntry
    if (INVALID_USERNAME_SPECIAL_CHARACTERS.test(value)) {
      throw new InvalidUsernameException({
        errorMessage: `<${key}> can only use ( _ ) as a special character`
      })
    }
  }

  private readonly _ensureUsernameDoesNotStartWithUnderscore = (): void => {
    const { key, value } = this._rootEntry
    if (value.startsWith('_')) {
      throw new InvalidUsernameException({
        errorMessage: `<${key}> cannot start with ( _ )`
      })
    }
  }
}
