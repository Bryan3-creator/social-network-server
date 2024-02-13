import { type RootKey } from '@src/contexts/shared/domain'
import { type UserPrimitiveData } from '../../../../../entities'

export const DEFAULT_USER_PASSWORD_KEY: RootKey<UserPrimitiveData> = 'password'
