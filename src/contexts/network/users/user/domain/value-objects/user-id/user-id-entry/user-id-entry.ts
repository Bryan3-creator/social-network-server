import { UUIDValueObject } from '@shared/domain/value-objects'
import { type IUserIdEntry } from './entry'
import { DEFAULT_USER_ID_KEY } from './user-id-entry-consts'

export class UserIdEntry extends UUIDValueObject {
  public constructor(entry: IUserIdEntry) {
    super({
      ...entry,
      key: DEFAULT_USER_ID_KEY
    })
  }
}
