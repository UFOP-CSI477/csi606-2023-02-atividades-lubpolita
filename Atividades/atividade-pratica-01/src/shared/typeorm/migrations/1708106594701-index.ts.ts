import { MigrationInterface, QueryRunner } from 'typeorm';

export class IndexTs1708106594701 implements MigrationInterface {
  name = 'IndexTs1708106594701';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "Pessoas" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, "rua" character varying NOT NULL, "numero" character varying NOT NULL, "complemento" character varying NOT NULL, "rg" character varying NOT NULL, "cidade_id" character varying NOT NULL, "tipo_id" character varying NOT NULL, "create_at" character varying NOT NULL, "update_at" character varying NOT NULL, CONSTRAINT "PK_3e9888411f62082be12e16ed545" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "LocaisColeta" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, "rua" character varying NOT NULL, "numero" character varying NOT NULL, "complemento" character varying NOT NULL, "cidade_id" character varying NOT NULL, "create_at" character varying NOT NULL, "update_at" character varying NOT NULL, CONSTRAINT "PK_59bc1d7639e77e66cf2e1fb0853" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "Doacoes" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "pessoa_id" character varying NOT NULL, "local_id" character varying NOT NULL, "data" character varying NOT NULL, "create_at" character varying NOT NULL, "update_at" character varying NOT NULL, CONSTRAINT "PK_4249975758b6634b55b38ae91a7" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "TipoSanguineo" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "tipo" character varying NOT NULL, "fator" character varying NOT NULL, "create_at" character varying NOT NULL, "update_at" character varying NOT NULL, CONSTRAINT "PK_0ff8b5315baef7384f11b29d086" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "Estados" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, "sigla" character varying NOT NULL, "create_at" character varying NOT NULL, "update_at" character varying NOT NULL, CONSTRAINT "PK_a86707e076005734c787e064a56" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "Cidades" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, "estado_id" character varying NOT NULL, "create_at" character varying NOT NULL, "update_at" character varying NOT NULL, CONSTRAINT "PK_43f7f663a1febd06819da244150" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "Cidades"`);
    await queryRunner.query(`DROP TABLE "Estados"`);
    await queryRunner.query(`DROP TABLE "TipoSanguineo"`);
    await queryRunner.query(`DROP TABLE "Doacoes"`);
    await queryRunner.query(`DROP TABLE "LocaisColeta"`);
    await queryRunner.query(`DROP TABLE "Pessoas"`);
  }
}
