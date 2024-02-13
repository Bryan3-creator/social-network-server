import { type Optional, type BaseImageEntry } from '@src/contexts/shared/domain'
import { type Avatar } from '../user-avatar-entry-properties'

export interface IUserAvatarEntry extends Omit<BaseImageEntry, 'value'> {
  value?: Optional<Avatar>
}
