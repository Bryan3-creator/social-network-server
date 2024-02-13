import { IntValueObject } from '@src/contexts/shared/domain'
import { type IUserFollowingCountEntry } from './entry'
import { DEFAULT_USER_FOLLOWING_COUNT_KEY } from './user-following-count-entry-consts'

export class UserFollowingCountEntry extends IntValueObject {
  public constructor(entry: IUserFollowingCountEntry) {
    super({
      ...entry,
      key: DEFAULT_USER_FOLLOWING_COUNT_KEY
    })
  }
}
