import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1675195264696 implements MigrationInterface {
    name = 'createTables1675195264696'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "telephone"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "telephone" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "telephone"`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "telephone" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "telephone"`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "telephone" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "telephone"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "telephone" integer NOT NULL`);
    }

}
