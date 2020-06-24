import { Module } from '@nestjs/common';
import { CommodityService } from './commodity.service';
import { CommodityController } from './commodity.controller';

@Module({
  controllers: [CommodityController],
  providers: [CommodityService],
  exports: [CommodityService],
})
export class CommodityModule {}
