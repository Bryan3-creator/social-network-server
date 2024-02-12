import { EmailValueObject } from '@src/contexts/shared/domain'
import { type IUserEmailEntry } from './entry'

export class UserEmailEntry extends EmailValueObject {
  public constructor(entry: IUserEmailEntry) {
    super({
      ...entry
    })
  }
}
