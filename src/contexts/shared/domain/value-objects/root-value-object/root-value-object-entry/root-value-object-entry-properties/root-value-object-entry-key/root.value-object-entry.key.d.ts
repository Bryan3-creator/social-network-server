export type RootKey<Entity = string> = Entity extends string
  ? string
  : keyof Entity
