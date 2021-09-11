import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import CustomersAdapter from './adapters/customers.adapter';
import CustomersService from './domain/customers.service';

@Module({
  imports: [TypeOrmModule.forFeature([CustomersAdapter])],
  providers: [CustomersService],
  exports: [CustomersService],
})
export class CustomersModule {}
