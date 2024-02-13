import { InvalidArgumentExcetion } from '../../invalid-argument-exception'
import { type IInvalidImageExceptionEntry } from './entry'
import { DEFAULT_INVALID_IMAGE_ERROR_MESSAGE } from './invalid-image-exception-entry-consts'

export class InvalidImageExceptionEntry extends InvalidArgumentExcetion {
  public constructor(entry: IInvalidImageExceptionEntry) {
    super({
      errorMessage: DEFAULT_INVALID_IMAGE_ERROR_MESSAGE,
      ...entry
    })
  }
}
