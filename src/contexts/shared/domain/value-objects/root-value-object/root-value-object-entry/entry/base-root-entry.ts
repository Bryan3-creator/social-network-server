import { type Primitives } from '../root-value-object-entry-properties'
import { type IRootValueObjectEntry } from './entry'

export interface BaseRootEntry<T extends Primitives>
  extends Omit<IRootValueObjectEntry<T>, 'typeofData'> {}
