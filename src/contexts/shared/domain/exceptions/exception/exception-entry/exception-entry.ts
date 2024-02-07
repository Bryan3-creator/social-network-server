import { type IExceptionEntry } from './entry'
import {
  type ErrorMessage,
  type RequestStatus
} from './exception-entry-properties'

export class ExceptionEntry extends Error {
  public constructor(protected readonly _rootEntry: IExceptionEntry) {
    super(_rootEntry.errorMessage)
  }

  public getErrorMessage = (): ErrorMessage => {
    return this._rootEntry.errorMessage
  }

  public getRequestStatus = (): RequestStatus => {
    return this._rootEntry.requestStatus
  }
}
