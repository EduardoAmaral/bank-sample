import { MigrationInterface, QueryRunner } from 'typeorm';

export default class AlterAccountsAddAuditFields1631407569698
  implements MigrationInterface
{
  name = 'AlterAccountsAddAuditFields1631407569698';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `accounts` ADD `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)',
    );
    await queryRunner.query(
      'ALTER TABLE `accounts` ADD `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)',
    );
    await queryRunner.query(
      'ALTER TABLE `accounts` ADD `deletedAt` datetime(6) NULL',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE `accounts` DROP COLUMN `deletedAt`');
    await queryRunner.query('ALTER TABLE `accounts` DROP COLUMN `updatedAt`');
    await queryRunner.query('ALTER TABLE `accounts` DROP COLUMN `createdAt`');
  }
}
