/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "personajes" (
    "id" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,
    "fuerza" INTEGER NOT NULL,
    "fecha_nacimiento" TIMESTAMP(3) NOT NULL,
    "objeto" TEXT,

    CONSTRAINT "personajes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "karts" (
    "id" INTEGER NOT NULL,
    "modelo" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "velocidad_maxima" INTEGER,
    "personajesId" INTEGER,

    CONSTRAINT "karts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "trabajos" (
    "id" INTEGER NOT NULL,
    "descripcion" TEXT,
    "sueldo" INTEGER NOT NULL,

    CONSTRAINT "trabajos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "personaje_tiene_trabajo" (
    "personajesId" INTEGER NOT NULL,
    "trabajosId" INTEGER NOT NULL,
    "fecha_inicio" TIMESTAMP(3) NOT NULL,
    "fecha_termino" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "personaje_tiene_trabajo_pkey" PRIMARY KEY ("personajesId","trabajosId")
);

-- CreateTable
CREATE TABLE "reinos" (
    "id" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,
    "ubicacion" TEXT NOT NULL,
    "superficie" INTEGER NOT NULL,

    CONSTRAINT "reinos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pesonaje_habita_reino" (
    "personajesId" INTEGER NOT NULL,
    "reinosId" INTEGER NOT NULL,
    "fecha_registro" TIMESTAMP(3) NOT NULL,
    "es_gobernate" BOOLEAN NOT NULL,

    CONSTRAINT "pesonaje_habita_reino_pkey" PRIMARY KEY ("personajesId","reinosId")
);

-- CreateTable
CREATE TABLE "diplomacias" (
    "reinos1" INTEGER NOT NULL,
    "reinos2" INTEGER NOT NULL,
    "es_alieado" BOOLEAN NOT NULL,

    CONSTRAINT "diplomacias_pkey" PRIMARY KEY ("reinos1","reinos2")
);

-- CreateTable
CREATE TABLE "defensas" (
    "id" INTEGER NOT NULL,
    "defensa" TEXT NOT NULL,

    CONSTRAINT "defensas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_defensasToreinos" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_defensasToreinos_AB_unique" ON "_defensasToreinos"("A", "B");

-- CreateIndex
CREATE INDEX "_defensasToreinos_B_index" ON "_defensasToreinos"("B");

-- AddForeignKey
ALTER TABLE "karts" ADD CONSTRAINT "karts_personajesId_fkey" FOREIGN KEY ("personajesId") REFERENCES "personajes"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "personaje_tiene_trabajo" ADD CONSTRAINT "personaje_tiene_trabajo_trabajosId_fkey" FOREIGN KEY ("trabajosId") REFERENCES "trabajos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "personaje_tiene_trabajo" ADD CONSTRAINT "personaje_tiene_trabajo_personajesId_fkey" FOREIGN KEY ("personajesId") REFERENCES "personajes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pesonaje_habita_reino" ADD CONSTRAINT "pesonaje_habita_reino_personajesId_fkey" FOREIGN KEY ("personajesId") REFERENCES "personajes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pesonaje_habita_reino" ADD CONSTRAINT "pesonaje_habita_reino_reinosId_fkey" FOREIGN KEY ("reinosId") REFERENCES "reinos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "diplomacias" ADD CONSTRAINT "diplomacias_reinos1_fkey" FOREIGN KEY ("reinos1") REFERENCES "reinos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "diplomacias" ADD CONSTRAINT "diplomacias_reinos2_fkey" FOREIGN KEY ("reinos2") REFERENCES "reinos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_defensasToreinos" ADD CONSTRAINT "_defensasToreinos_A_fkey" FOREIGN KEY ("A") REFERENCES "defensas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_defensasToreinos" ADD CONSTRAINT "_defensasToreinos_B_fkey" FOREIGN KEY ("B") REFERENCES "reinos"("id") ON DELETE CASCADE ON UPDATE CASCADE;
