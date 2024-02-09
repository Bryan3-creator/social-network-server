import { type Optional } from '../../../../types'
import {
  type IRootValueObjectEntry,
  type Primitives
} from '../../../root-value-object'

export interface IOptionalValueObject<T extends Primitives> {
  value?: Optional<T>
}

export interface IOptionalValueObjectEntry<T extends Primitives>
  extends Omit<IRootValueObjectEntry<Optional<T>>, 'value'>,
    IOptionalValueObject<T> {}
