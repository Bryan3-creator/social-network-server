import { type UserPrimitiveData } from '@src/contexts/network/users/user/domain/entities'
import { type RootKey } from '@src/contexts/shared/domain'

export const DEFAULT_USER_VERIFIED_KEY: RootKey<UserPrimitiveData> = 'verified'
