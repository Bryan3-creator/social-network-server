import { type BaseRootEntry } from '../../../root-value-object'
import { type IntValue } from '../int-value-object-entry-properties'
import { type IIntValueObject } from './entry'

export interface BaseIntEntry
  extends Omit<BaseRootEntry<IntValue>, 'key'>,
    IIntValueObject {}
