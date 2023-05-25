-- AlterTable
CREATE SEQUENCE defensas_id_seq;
ALTER TABLE "defensas" ALTER COLUMN "id" SET DEFAULT nextval('defensas_id_seq');
ALTER SEQUENCE defensas_id_seq OWNED BY "defensas"."id";

-- AlterTable
CREATE SEQUENCE karts_id_seq;
ALTER TABLE "karts" ALTER COLUMN "id" SET DEFAULT nextval('karts_id_seq');
ALTER SEQUENCE karts_id_seq OWNED BY "karts"."id";

-- AlterTable
CREATE SEQUENCE personajes_id_seq;
ALTER TABLE "personajes" ALTER COLUMN "id" SET DEFAULT nextval('personajes_id_seq');
ALTER SEQUENCE personajes_id_seq OWNED BY "personajes"."id";

-- AlterTable
CREATE SEQUENCE reinos_id_seq;
ALTER TABLE "reinos" ALTER COLUMN "id" SET DEFAULT nextval('reinos_id_seq');
ALTER SEQUENCE reinos_id_seq OWNED BY "reinos"."id";

-- AlterTable
CREATE SEQUENCE trabajos_id_seq;
ALTER TABLE "trabajos" ALTER COLUMN "id" SET DEFAULT nextval('trabajos_id_seq');
ALTER SEQUENCE trabajos_id_seq OWNED BY "trabajos"."id";
