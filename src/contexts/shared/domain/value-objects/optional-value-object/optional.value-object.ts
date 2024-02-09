import { type Primitives } from '../root-value-object'
import { OptionalValueObjectEntry } from './optional-value-object-entry'

export class OptionalValueObject<
  T extends Primitives
> extends OptionalValueObjectEntry<T> {}
