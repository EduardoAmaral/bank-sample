import { MigrationInterface, QueryRunner } from 'typeorm';

export default class CreateCustomers1631397204879
  implements MigrationInterface
{
  name = 'CreateCustomers1631397204879';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `customers` (`id` char(36) NOT NULL, `document` varchar(255) NOT NULL, `name` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, UNIQUE INDEX `IDX_68c9c024a07c49ad6a2072d23c` (`document`), UNIQUE INDEX `IDX_8536b8b85c06969f84f0c098b0` (`email`), PRIMARY KEY (`id`)) ENGINE=InnoDB',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'DROP INDEX `IDX_8536b8b85c06969f84f0c098b0` ON `customers`',
    );
    await queryRunner.query(
      'DROP INDEX `IDX_68c9c024a07c49ad6a2072d23c` ON `customers`',
    );
    await queryRunner.query('DROP TABLE `customers`');
  }
}
