import {
  type BoolValue,
  type IntValue,
  type Optional,
  type StrValue
} from '@shared/domain/value-objects'

export interface UserPrimitiveData {
  userId: StrValue
  name: StrValue
  username: StrValue
  email: StrValue
  password: StrValue
  description: Optional<StrValue>
  location: StrValue
  followingCount: IntValue
  followersCount: IntValue
  favoritesCount: BoolValue
  private: BoolValue
  verified: BoolValue
  lang: StrValue
}
