import { BoolValueObject } from '@src/contexts/shared/domain'
import { type IUserPrivateEntry } from './entry'
import { DEFAULT_USER_PRIVATE_KEY } from './user-private-entry-consts'

export class UserPrivateEntry extends BoolValueObject {
  public constructor(entry: IUserPrivateEntry) {
    super({
      ...entry,
      key: DEFAULT_USER_PRIVATE_KEY
    })
  }
}
