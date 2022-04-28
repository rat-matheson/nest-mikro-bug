import { Injectable } from '@nestjs/common';

import { TransformType } from '@ngx-tmp/bug-repo';

TransformType.newTransform<0|Date>({
  toDbValue:(v) => v,
  toJsValue:v => v
});

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
