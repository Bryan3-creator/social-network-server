import {
  type ErrorMessage,
  type RequestStatus
} from '../exception-entry-properties'

export interface IExceptionEntry {
  errorMessage: ErrorMessage
  requestStatus: RequestStatus
}
