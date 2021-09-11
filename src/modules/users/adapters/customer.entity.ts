import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
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

  constructor(id: string, document: string, name: string, email: string) {
    this.id = id;
    this.document = document;
    this.name = name;
    this.email = email;
  }

  static from(customer: Customer): any {
    return new CustomerEntity(
      customer.id,
      customer.document,
      customer.name,
      customer.email,
    );
  }

  toCustomer() {
    return new Customer({
      id: this.id,
      document: this.document,
      name: this.name,
      email: this.email,
    });
  }
}
