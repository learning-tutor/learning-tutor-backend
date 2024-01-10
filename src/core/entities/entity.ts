import { UniqueEntityID } from './unique-entity-id'

// This Entity class is useful for two reasons:
// It gives a semantic meaning to the id of the entity. Instead of using a string, we use the UniqueEntityID class.
// It makes the code more readable. Instead of using a string, we use the UniqueEntityID class.
export abstract class Entity<Props> {
  private _id: UniqueEntityID
  protected props: Props

  get id() {
    return this._id
  }

  protected constructor(props: Props, id?: UniqueEntityID) {
    this.props = props
    this._id = id ?? new UniqueEntityID()
  }

  public equals(entity: Entity<unknown>) {
    if (entity === this) {
      return true
    }

    if (entity.id === this._id) {
      return true
    }

    return false
  }
}
