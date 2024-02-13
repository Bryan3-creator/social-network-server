import { InvalidImageException } from '../../../exceptions'
import { StrValueObject } from '../../str-value-object'
import { type IImageValueObjectEntry } from './entry'
import { VALID_IMAGE_REG_EXP } from './image-value-object-entry-consts/reg-exps-consts'

export class ImageValueObjectEntry extends StrValueObject {
  public constructor(entry: IImageValueObjectEntry) {
    super({
      ...entry
    })
    this._ensureImageIsValid()
  }

  private readonly _ensureImageIsValid = (): void => {
    const { key, value } = this._rootEntry
    if (!VALID_IMAGE_REG_EXP.test(value)) {
      throw new InvalidImageException({
        errorMessage: `<${key}> is invalid, only supports  formats (.jpeg, .jpg, .png and .gif)`
      })
    }
  }
}
