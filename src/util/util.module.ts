import { Module } from '@nestjs/common';
import { UtilService } from './util.service';
import { RandomStringService } from '../random-string/random-string.service';

@Module({
  providers: [UtilService],
  exports: [UtilService]
})
export class UtilModule {}
