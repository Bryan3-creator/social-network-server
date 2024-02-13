import { StrValueObject } from '@src/contexts/shared/domain'
import { type IUserPasswordEntry } from './entry'
import {
  DEFAULT_USER_PASSWORD_KEY,
  DEFAULT_USER_PASSWORD_MIN_LENGTH
} from './user-password-entry-consts'

export class UserPasswordEntry extends StrValueObject {
  public constructor(entry: IUserPasswordEntry) {
    super({
      ...entry,
      key: DEFAULT_USER_PASSWORD_KEY,
      minLength: DEFAULT_USER_PASSWORD_MIN_LENGTH
    })
  }
}
