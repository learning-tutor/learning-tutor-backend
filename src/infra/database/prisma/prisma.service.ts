import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { PrismaClient } from '@prisma/client' // Import the PrismaClient class from the @prisma/client package. This class is the main API to interact with the Prisma ORM.

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super({
      log: ['warn', 'error'],
    })
  }

  // The onModuleInit() method is a lifecycle hook that will be executed once the application has started. This method will be used to connect to the database.
  onModuleInit() {
    return this.$connect()
  }

  //  The onModuleDestroy() method is a lifecycle hook that will be executed once the application is shutting down. This method will be used to disconnect from the database.
  onModuleDestroy() {
    return this.$disconnect()
  }
}
