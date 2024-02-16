import { MigrationInterface } from 'typeorm/migration/MigrationInterface';
import { QueryRunner } from 'typeorm/query-runner/QueryRunner';

export class IndexTs1708118036114 implements MigrationInterface {
  name = 'IndexTs1708118036114';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "Estados" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, "sigla" character varying NOT NULL, "create_at" character varying NOT NULL, "update_at" character varying NOT NULL, CONSTRAINT "PK_a86707e076005734c787e064a56" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "Doacoes" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "pessoa_id" character varying NOT NULL, "data" character varying NOT NULL, "create_at" character varying NOT NULL, "update_at" character varying NOT NULL, "local_id" uuid, CONSTRAINT "PK_4249975758b6634b55b38ae91a7" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "LocaisColeta" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, "rua" character varying NOT NULL, "numero" character varying NOT NULL, "complemento" character varying NOT NULL, "create_at" character varying NOT NULL, "update_at" character varying NOT NULL, "cidade_id" uuid, CONSTRAINT "PK_59bc1d7639e77e66cf2e1fb0853" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "Cidades" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, "create_at" character varying NOT NULL, "update_at" character varying NOT NULL, "estado_id" uuid, CONSTRAINT "PK_43f7f663a1febd06819da244150" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "Pessoas" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, "rua" character varying NOT NULL, "numero" character varying NOT NULL, "complemento" character varying NOT NULL, "rg" character varying NOT NULL, "create_at" character varying NOT NULL, "update_at" character varying NOT NULL, "cidade_id" uuid, "tipo_id" uuid, CONSTRAINT "PK_3e9888411f62082be12e16ed545" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "TipoSanguineo" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "tipo" character varying NOT NULL, "fator" character varying NOT NULL, "create_at" character varying NOT NULL, "update_at" character varying NOT NULL, CONSTRAINT "PK_0ff8b5315baef7384f11b29d086" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "Doacoes" ADD CONSTRAINT "FK_6b32a24623ba251d0dba4d87eb2" FOREIGN KEY ("local_id") REFERENCES "LocaisColeta"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "LocaisColeta" ADD CONSTRAINT "FK_3cbfc948cf1e5b9b6dd922956a6" FOREIGN KEY ("cidade_id") REFERENCES "Cidades"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "Cidades" ADD CONSTRAINT "FK_567717650ca06f4e543c40a13a6" FOREIGN KEY ("estado_id") REFERENCES "Estados"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "Pessoas" ADD CONSTRAINT "FK_50dcdd15ff732526a02ade3e829" FOREIGN KEY ("cidade_id") REFERENCES "Cidades"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "Pessoas" ADD CONSTRAINT "FK_6ff2a90a5462b7b444e53136c72" FOREIGN KEY ("tipo_id") REFERENCES "TipoSanguineo"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "Pessoas" DROP CONSTRAINT "FK_6ff2a90a5462b7b444e53136c72"`,
    );
    await queryRunner.query(
      `ALTER TABLE "Pessoas" DROP CONSTRAINT "FK_50dcdd15ff732526a02ade3e829"`,
    );
    await queryRunner.query(
      `ALTER TABLE "Cidades" DROP CONSTRAINT "FK_567717650ca06f4e543c40a13a6"`,
    );
    await queryRunner.query(
      `ALTER TABLE "LocaisColeta" DROP CONSTRAINT "FK_3cbfc948cf1e5b9b6dd922956a6"`,
    );
    await queryRunner.query(
      `ALTER TABLE "Doacoes" DROP CONSTRAINT "FK_6b32a24623ba251d0dba4d87eb2"`,
    );
    await queryRunner.query(`DROP TABLE "TipoSanguineo"`);
    await queryRunner.query(`DROP TABLE "Pessoas"`);
    await queryRunner.query(`DROP TABLE "Cidades"`);
    await queryRunner.query(`DROP TABLE "LocaisColeta"`);
    await queryRunner.query(`DROP TABLE "Doacoes"`);
    await queryRunner.query(`DROP TABLE "Estados"`);
  }
}
