import { BoolValueObject } from '@src/contexts/shared/domain'
import { type IUserVerifiedEntry } from './entry'
import { DEFAULT_USER_VERIFIED_KEY } from './user-verified-entry-consts'

export class UserVerifiedEntry extends BoolValueObject {
  public constructor(entry: IUserVerifiedEntry) {
    super({
      ...entry,
      key: DEFAULT_USER_VERIFIED_KEY
    })
  }
}
