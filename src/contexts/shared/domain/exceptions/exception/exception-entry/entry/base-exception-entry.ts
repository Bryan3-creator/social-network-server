import { type ErrorMessage } from '../exception-entry-properties'
import { type IExceptionEntry } from './entry'

export interface BaseExceptionEntry
  extends Omit<IExceptionEntry, 'requestStatus' | 'errorMessage'> {
  errorMessage?: ErrorMessage
}
