/*
  Warnings:

  - You are about to alter the column `defensa` on the `defensas` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(45)`.
  - You are about to drop the column `es_alieado` on the `diplomacias` table. All the data in the column will be lost.
  - You are about to alter the column `modelo` on the `karts` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(45)`.
  - You are about to alter the column `color` on the `karts` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(45)`.
  - You are about to alter the column `nombre` on the `personajes` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(45)`.
  - You are about to alter the column `objeto` on the `personajes` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(30)`.
  - You are about to alter the column `nombre` on the `reinos` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(45)`.
  - You are about to alter the column `ubicacion` on the `reinos` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(45)`.
  - You are about to alter the column `descripcion` on the `trabajos` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(45)`.
  - Added the required column `es_aliado` to the `diplomacias` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "defensas" ALTER COLUMN "defensa" SET DATA TYPE VARCHAR(45);

-- AlterTable
ALTER TABLE "diplomacias" DROP COLUMN "es_alieado",
ADD COLUMN     "es_aliado" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "karts" ALTER COLUMN "modelo" SET DATA TYPE VARCHAR(45),
ALTER COLUMN "color" SET DATA TYPE VARCHAR(45);

-- AlterTable
ALTER TABLE "personaje_tiene_trabajo" ALTER COLUMN "fecha_inicio" SET DATA TYPE DATE,
ALTER COLUMN "fecha_termino" SET DATA TYPE DATE;

-- AlterTable
ALTER TABLE "personajes" ALTER COLUMN "nombre" SET DATA TYPE VARCHAR(45),
ALTER COLUMN "fecha_nacimiento" SET DATA TYPE DATE,
ALTER COLUMN "objeto" SET DATA TYPE VARCHAR(30);

-- AlterTable
ALTER TABLE "reinos" ALTER COLUMN "nombre" SET DATA TYPE VARCHAR(45),
ALTER COLUMN "ubicacion" SET DATA TYPE VARCHAR(45);

-- AlterTable
ALTER TABLE "trabajos" ALTER COLUMN "descripcion" SET DATA TYPE VARCHAR(45);
