import { StrValueObject } from '@src/contexts/shared/domain'
import { type IUserAvatarEntry } from './entry'
import {
  DEFAULT_USER_AVATAR_KEY,
  DEFAULT_USER_AVATAR_VALUE
} from './user-avatar-entry-consts'

export class UserAvatarEntry extends StrValueObject {
  public constructor(entry: IUserAvatarEntry) {
    super({
      value: DEFAULT_USER_AVATAR_VALUE,
      ...entry,
      key: DEFAULT_USER_AVATAR_KEY
    })
  }
}
