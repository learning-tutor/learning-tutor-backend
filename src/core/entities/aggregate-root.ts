import { DomainEvents } from '@/core/events/domain-events'
import { DomainEvent } from '../events/domain-event'
import { Entity } from './entity'
// This is the base class for all Aggregate Roots in the application.
export abstract class AggregateRoot<Props> extends Entity<Props> {
  private _domainEvents: DomainEvent[] = []

  get domainEvents(): DomainEvent[] {
    return this._domainEvents
  }

  protected addDomainEvent(domainEvent: DomainEvent): void {
    this._domainEvents.push(domainEvent)
    DomainEvents.markAggregateForDispatch(this)
  }

  public clearEvents() {
    this._domainEvents = []
  }
}
