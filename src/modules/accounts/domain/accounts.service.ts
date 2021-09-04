import { Injectable, NotImplementedException } from '@nestjs/common';
import AccountApplication from './account-application';

@Injectable()
export class AccountsService {
  create(accountApplication: AccountApplication): Promise<void> {
    throw new NotImplementedException();
  }
}
