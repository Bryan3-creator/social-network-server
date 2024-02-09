import { InvalidEmailException } from '../../../exceptions'
import { StrValueObject } from '../../str-value-object'
import { DEFAULT_EMAIL_KEY } from './email-value-object-entry-consts'
import { EMAIL_REG_EXP } from './email-value-object-entry-consts/reg-exps-consts/email-reg-exp-const/email.reg-exp.const'
import { type IEmailValueObjectEntry } from './entry'

export class EmailValueObjectEntry extends StrValueObject {
  public constructor(entry: IEmailValueObjectEntry) {
    super({
      key: DEFAULT_EMAIL_KEY,
      ...entry
    })
    this._ensureEmailIsValid()
  }

  private readonly _ensureEmailIsValid = (): void => {
    const { value } = this._rootEntry
    if (!EMAIL_REG_EXP.test(value)) {
      throw new InvalidEmailException({})
    }
  }
}
