import { InvalidArgumentExcetion } from '@shared/domain/exceptions'
import { type IInvalidNameExceptionEntry } from './entry'
import { DEFAULT_INVALID_NAME_ERROR_MESSAGE } from './invalid-name-exception-entry-consts'

export class InvalidNameExceptionEntry extends InvalidArgumentExcetion {
  public constructor(entry: IInvalidNameExceptionEntry) {
    super({
      errorMessage: DEFAULT_INVALID_NAME_ERROR_MESSAGE,
      ...entry
    })
  }
}
