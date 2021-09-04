export default class AccountApplication {
  name: string;
  document: string;
  email: string;

  constructor(account: { name: string; document: string; email: string }) {
    this.name = account.name;
    this.document = account.document;
    this.email = account.email;
  }
}
