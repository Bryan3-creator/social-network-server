import { IntValueObject } from '@src/contexts/shared/domain'
import { type IUserFavoritesCountEntry } from './entry'
import { DEFAULT_USER_FAVORITES_COUNT_KEY } from './user-favorites-count-entry-consts'

export class UserFavoritesCountEntry extends IntValueObject {
  public constructor(entry: IUserFavoritesCountEntry) {
    super({
      ...entry,
      key: DEFAULT_USER_FAVORITES_COUNT_KEY
    })
  }
}
