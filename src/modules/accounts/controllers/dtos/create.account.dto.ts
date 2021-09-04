import AccountApplication from '../../domain/account-application';

export default class CreateAccountDto {
  name: string;
  document: string;
  email: string;

  constructor(name: string, document: string, email: string) {
    this.name = name;
    this.document = document;
    this.email = email;
  }

  toAccountApplication(): AccountApplication {
    return new AccountApplication({
      name: this.name,
      document: this.document,
      email: this.email,
    });
  }
}
