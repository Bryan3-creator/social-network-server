import { Exception } from '../../exception'
import { type IInvalidArgumentExceptionEntry } from './entry'
import {
  DEFAULT_INVALID_ERROR_MESSAGE,
  DEFAULT_INVALID_REQUEST_STATUS
} from './invalid-argument-exception-entry-consts'

export class InvalidArgumentExcetionEntry extends Exception {
  public constructor(entry: IInvalidArgumentExceptionEntry) {
    super({
      errorMessage: DEFAULT_INVALID_ERROR_MESSAGE,
      ...entry,
      requestStatus: DEFAULT_INVALID_REQUEST_STATUS
    })
  }
}
