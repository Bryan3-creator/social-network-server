export abstract class AggregateRoot<PrimitiveData> {
  public abstract toPrimitives: () => PrimitiveData
}
