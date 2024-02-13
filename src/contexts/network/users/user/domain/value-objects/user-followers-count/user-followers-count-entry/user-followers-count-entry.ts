import { IntValueObject } from '@src/contexts/shared/domain'
import { type IUserFollowersCountEntry } from './entry'
import { DEFAULT_USER_FOLLOWERS_COUNT_KEY } from './user-followers-count-entry-consts'

export class UserFollowersCountEntry extends IntValueObject {
  public constructor(entry: IUserFollowersCountEntry) {
    super({
      ...entry,
      key: DEFAULT_USER_FOLLOWERS_COUNT_KEY
    })
  }
}
