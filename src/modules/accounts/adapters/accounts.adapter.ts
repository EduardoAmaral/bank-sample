import { AbstractRepository, EntityRepository } from 'typeorm';
import Account from '../domain/account';
import AccountEntity from './account.entity';

@EntityRepository(AccountEntity)
export default class AccountsAdapter extends AbstractRepository<AccountEntity> {
  async create(account: Account): Promise<Account> {
    return (
      await this.repository.save(AccountEntity.from(account))
    ).toAccount();
  }
}
