import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import Customer from '../domain/customer';

@Entity('customers')
export default class CustomerEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  document: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false, unique: true })
  email: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  constructor(id: string, document: string, name: string, email: string) {
    this.id = id;
    this.document = document;
    this.name = name;
    this.email = email;
  }

  static from(customer: Customer): CustomerEntity {
    return new CustomerEntity(
      customer.id,
      customer.document,
      customer.name,
      customer.email,
    );
  }

  toCustomer(): Customer {
    return new Customer({
      id: this.id,
      document: this.document,
      name: this.name,
      email: this.email,
    });
  }
}
