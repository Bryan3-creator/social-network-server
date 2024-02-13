import {
  OptionalValueObject,
  StrValueObject
} from '@src/contexts/shared/domain'
import { type IUserDescriptionEntry } from './entry'
import {
  DEFAULT_USER_DESCRIPTION_KEY,
  DEFAULT_USER_DESCRIPTION_TYPEOF_DATA
} from './user-description-entry-consts'
import { type Description } from './user-description-entry-properties'

export class UserDescriptionEntry extends OptionalValueObject<Description> {
  public constructor(entry: IUserDescriptionEntry) {
    super({
      ...entry,
      key: DEFAULT_USER_DESCRIPTION_KEY,
      typeofData: DEFAULT_USER_DESCRIPTION_TYPEOF_DATA
    })
    this._formatDescription()
  }

  private readonly _formatDescription = (): void => {
    const { key, value: rootValue } = this._rootEntry
    const value = rootValue
    if (value !== undefined) {
      this._rootEntry.value = new StrValueObject({
        key,
        value
      }).getValue()
    }
  }
}
