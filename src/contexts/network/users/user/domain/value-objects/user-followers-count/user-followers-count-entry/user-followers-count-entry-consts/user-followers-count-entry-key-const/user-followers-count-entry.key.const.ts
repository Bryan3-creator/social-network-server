import { type RootKey } from '@src/contexts/shared/domain'
import { type UserPrimitiveData } from '../../../../../entities'

export const DEFAULT_USER_FOLLOWERS_COUNT_KEY: RootKey<UserPrimitiveData> =
  'followersCount'
