import { type ValidOptionalTypeofData } from './optional.value-object-entry.optional-typeof-data'

export type OptionalTypeofData<
  T extends ValidOptionalTypeofData = 'undefined'
> = T
