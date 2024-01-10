import { PipeTransform, BadRequestException } from '@nestjs/common'
import { ZodError, ZodSchema } from 'zod'
import { fromZodError } from 'zod-validation-error'

// Pipes are a great way to enforce validation rules on incoming data. Nest comes with a built-in ValidationPipe that uses the class-validator package to validate incoming data. However, this package is not very flexible and does not support all the validation rules that we need. For this reason, we will create a custom pipe that uses the zod package to validate incoming data.
export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}

  transform(value: unknown) {
    try {
      return this.schema.parse(value)
    } catch (error) {
      if (error instanceof ZodError) {
        throw new BadRequestException({
          message: 'Validation failed',
          statusCode: 400,
          errors: fromZodError(error),
        })
      }

      throw new BadRequestException('Validation failed')
    }
  }
}
