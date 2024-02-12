import { InvalidArgumentExcetion } from '@src/contexts/shared/domain'
import { type IInvalidUsernameExceptionEntry } from './entry'
import { DEFAULT_USERNAME_ERROR_MESSAGE } from './invalid-username-exception-entry-consts'

export class InvalidUsernameExceptionEntry extends InvalidArgumentExcetion {
  public constructor(entry: IInvalidUsernameExceptionEntry) {
    super({
      errorMessage: DEFAULT_USERNAME_ERROR_MESSAGE,
      ...entry
    })
  }
}
