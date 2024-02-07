import {
  type RootKey,
  type Primitives,
  type RootValue,
  type RootTypeofData
} from '../root-value-object-entry-properties'

export interface IRootValueObjectEntry<T extends Primitives> {
  key: RootKey
  value: RootValue<T>
  typeofData: RootTypeofData
}
