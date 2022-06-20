import {MigrationInterface, QueryRunner} from "typeorm";

export class ChangeCommentEntity1655732696850 implements MigrationInterface {
    name = 'ChangeCommentEntity1655732696850'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comment" ADD "user_id" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "comment" ADD "article_id" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comment" DROP COLUMN "article_id"`);
        await queryRunner.query(`ALTER TABLE "comment" DROP COLUMN "user_id"`);
    }

}
