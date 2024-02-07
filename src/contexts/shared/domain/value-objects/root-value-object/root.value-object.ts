import {
  type Primitives,
  RootValueObjectEntry
} from './root-value-object-entry'

export abstract class RootValueObject<
  T extends Primitives
> extends RootValueObjectEntry<T> {}
