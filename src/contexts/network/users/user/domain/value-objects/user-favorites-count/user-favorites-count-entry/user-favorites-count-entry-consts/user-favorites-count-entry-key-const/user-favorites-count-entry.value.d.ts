import { type RootKey } from '@src/contexts/shared/domain'
import { type UserPrimitiveData } from '../../../../../entities'

export const DEFAULT_USER_FAVORITES_COUNT_KEY: RootKey<UserPrimitiveData> =
  'favoritesCount'
