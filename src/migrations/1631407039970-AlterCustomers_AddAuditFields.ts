import { MigrationInterface, QueryRunner } from 'typeorm';

export default class AlterCustomersAddAuditFields1631407039970
  implements MigrationInterface
{
  name = 'AlterCustomersAddAuditFields1631407039970';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `customers` ADD `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)',
    );
    await queryRunner.query(
      'ALTER TABLE `customers` ADD `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)',
    );
    await queryRunner.query(
      'ALTER TABLE `customers` ADD `deletedAt` datetime(6) NULL',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE `customers` DROP COLUMN `deletedAt`');
    await queryRunner.query('ALTER TABLE `customers` DROP COLUMN `updatedAt`');
    await queryRunner.query('ALTER TABLE `customers` DROP COLUMN `createdAt`');
  }
}
