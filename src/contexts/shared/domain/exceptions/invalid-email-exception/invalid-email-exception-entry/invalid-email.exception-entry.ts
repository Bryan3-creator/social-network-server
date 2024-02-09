import { InvalidArgumentExcetion } from '../../invalid-argument-exception'
import { type IInvalidEmailExceptionEntry } from './entry'
import { DEFAULT_INVALID_EMAIL_ERROR_MESSAGE } from './invalid-email-exception-entry-consts'

export class InvalidEmailExceptionEntry extends InvalidArgumentExcetion {
  public constructor(entry: IInvalidEmailExceptionEntry) {
    super({
      errorMessage: DEFAULT_INVALID_EMAIL_ERROR_MESSAGE,
      ...entry
    })
  }
}
