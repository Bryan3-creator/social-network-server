import { Exception } from '../../exception'
import { type IUnauthorizedExceptionEntry } from './entry'
import {
  DEFAULT_UNAUTHORIZED_ERROR_MESSAGE,
  DEFAULT_UNAUTHORIZED_REQUEST_STATUS
} from './unauthorized-exception-entry-consts'

export class UnauthorizedExceptionEntry extends Exception {
  public constructor(entry: IUnauthorizedExceptionEntry) {
    super({
      errorMessage: DEFAULT_UNAUTHORIZED_ERROR_MESSAGE,
      ...entry,
      requestStatus: DEFAULT_UNAUTHORIZED_REQUEST_STATUS
    })
  }
}
