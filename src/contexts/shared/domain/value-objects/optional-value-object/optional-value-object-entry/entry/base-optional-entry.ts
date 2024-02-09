import { type Optional } from '../../../../types'
import { type BaseRootEntry, type Primitives } from '../../../root-value-object'
import { type IOptionalValueObject } from './entry'

export interface BaseOptionalEntry<T extends Primitives>
  extends Omit<BaseRootEntry<Optional<T>>, 'key' | 'value'>,
    IOptionalValueObject<T> {}
