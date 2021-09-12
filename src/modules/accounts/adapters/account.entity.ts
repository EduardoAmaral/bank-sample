import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import CustomerEntity from '../../users/adapters/customer.entity';
import Account from '../domain/account';

@Entity('accounts')
export default class AccountEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => CustomerEntity, { nullable: false, eager: true })
  @JoinColumn({ name: 'customerId', referencedColumnName: 'id' })
  customer: CustomerEntity;

  @Column()
  customerId: string;

  constructor(id: string, customer: CustomerEntity) {
    this.id = id;
    this.customer = customer;
  }

  static from(account: Account): AccountEntity {
    return new AccountEntity(account.id, CustomerEntity.from(account.customer));
  }

  toAccount(): Account {
    return new Account({ id: this.id, customer: this.customer.toCustomer() });
  }
}
