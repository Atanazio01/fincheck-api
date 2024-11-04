import { ArgumentMetadata, ParseUUIDPipe } from '@nestjs/common';

export class OptionalParseUUIDPipe extends ParseUUIDPipe {
  constructor() {
    super({ version: '4' });
  }

  async transform(value: string, metadata: ArgumentMetadata) {
    if (!value) {
      return undefined;
    }

    return super.transform(value, metadata);
  }
}
