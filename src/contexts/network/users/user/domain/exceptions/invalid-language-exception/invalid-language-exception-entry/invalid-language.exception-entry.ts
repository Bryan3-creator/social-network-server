import { InvalidArgumentExcetion } from '@src/contexts/shared/domain'
import { type IInvalidLanguageExceptionEntry } from './entry/entry'
import { DEFAULT_INVALID_LANGUAGE_ERROR_MESSAGE } from './invalid-language-exception-entry-consts'

export class InvalidLanguageExceptionEntry extends InvalidArgumentExcetion {
  public constructor(entry: IInvalidLanguageExceptionEntry) {
    super({
      errorMessage: DEFAULT_INVALID_LANGUAGE_ERROR_MESSAGE,
      ...entry
    })
  }
}
