import { ArgumentMetadata, ParseEnumPipe } from '@nestjs/common';

export class OptionalParseEnumPipe<T> extends ParseEnumPipe<T> {
  async transform(value: T, metadata: ArgumentMetadata) {
    if (!value) {
      return undefined;
    }

    return super.transform(value, metadata);
  }
}
