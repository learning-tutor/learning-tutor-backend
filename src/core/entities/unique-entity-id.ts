import { randomUUID } from 'node:crypto'

// This is the value object that represents the id of the entity. It is a simple wrapper around the string primitive type.
// This class is useful for two reasons:
// It gives a semantic meaning to the id of the entity. Instead of using a string, we use the UniqueEntityID class.
// It makes the code more readable. Instead of using a string, we use the UniqueEntityID class.
export class UniqueEntityID {
  private value: string

  toString() {
    return this.value
  }

  toValue() {
    return this.value
  }

  constructor(value?: string) {
    this.value = value ?? randomUUID()
  }

  public equals(id: UniqueEntityID) {
    return id.toValue() === this.value
  }
}
