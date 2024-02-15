import { type ErrorMessage } from '@src/contexts/shared/domain'
import { Languages } from '../../../../../value-objects'

export const DEFAULT_INVALID_LANGUAGE_ERROR_MESSAGE: ErrorMessage = `Invalid language, we only support ${Object.values(
  Languages
).join(', ')}`
