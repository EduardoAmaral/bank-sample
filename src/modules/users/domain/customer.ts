export default class Customer {
  id: string;
  name: string;
  email: string;
  document: string;

  constructor(customer: {
    id?: string;
    name: string;
    email: string;
    document: string;
  }) {
    this.id = customer.id;
    this.name = customer.name;
    this.email = customer.email;
    this.document = customer.document;
  }
}
