import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateAccounts1631405596153 implements MigrationInterface {
  name = 'CreateAccounts1631405596153';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `accounts` (`id` char(36) NOT NULL, `customerId` char(36) NOT NULL, UNIQUE INDEX `REL_3c8ddd991a3e7cc26517def48e` (`customerId`), PRIMARY KEY (`id`)) ENGINE=InnoDB',
    );
    await queryRunner.query(
      'ALTER TABLE `accounts` ADD CONSTRAINT `FK_3c8ddd991a3e7cc26517def48ed` FOREIGN KEY (`customerId`) REFERENCES `customers`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE `accounts` DROP FOREIGN KEY `FK_3c8ddd991a3e7cc26517def48ed`',
    );
    await queryRunner.query(
      'DROP INDEX `REL_3c8ddd991a3e7cc26517def48e` ON `accounts`',
    );
    await queryRunner.query('DROP TABLE `accounts`');
  }
}
