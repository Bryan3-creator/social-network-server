import { StrValueObject } from '@src/contexts/shared/domain'
import { type IUserLangEntry } from './entry'
import { DEFAULT_USER_LANG_KEY } from './user-lang-entry-consts'
import { Languages } from './user-lang-entry-properties'
import { InvalidLanguageException } from '../../../exceptions'

export class UserLangEntry extends StrValueObject {
  public constructor(entry: IUserLangEntry) {
    super({
      ...entry,
      key: DEFAULT_USER_LANG_KEY
    })
    this._ensureLangIsValid()
  }

  private readonly _ensureLangIsValid = (): void => {
    const { value } = this._rootEntry
    const foundLanguage = Object.values(Languages).find(
      (language) => language.toString() === value.toLocaleLowerCase()
    )
    if (foundLanguage === undefined) {
      throw new InvalidLanguageException({})
    }
    this._rootEntry.value = foundLanguage
  }
}
