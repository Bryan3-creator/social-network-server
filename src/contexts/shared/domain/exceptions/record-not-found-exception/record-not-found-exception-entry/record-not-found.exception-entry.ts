import { Exception } from '../../exception'
import { type IRecordNotFoundExceptionEntry } from './entry'
import {
  DEFAULT_RECORD_NOT_FOUND_ERROR_MESSAGE,
  DEFAULT_RECORD_NOT_FOUND_REQUEST_STATUS
} from './record-not-found-exception-consts'

export class RecordNotFoundExceptionEntry extends Exception {
  public constructor(entry: IRecordNotFoundExceptionEntry) {
    super({
      errorMessage: DEFAULT_RECORD_NOT_FOUND_ERROR_MESSAGE,
      ...entry,
      requestStatus: DEFAULT_RECORD_NOT_FOUND_REQUEST_STATUS
    })
  }
}
