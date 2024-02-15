import type * as Primitives from '../../../../value-objects'

export interface UserPrimitiveData {
  userId: Primitives.Id
  name: Primitives.Name
  username: Primitives.Username
  email: Primitives.Email
  password: Primitives.Password
  avatar: Primitives.Avatar
  description: Optional<Primitives.Description>
  followingCount: Primitives.FollowingCount
  followersCount: Primitives.FollowersCount
  favoritesCount: Primitives.FavoritesCount
  private: Primitives.Private
  verified: Primitives.Verified
  lang: Primitives.Language
}
