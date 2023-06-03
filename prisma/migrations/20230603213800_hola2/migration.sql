-- DropForeignKey
ALTER TABLE "personaje_tiene_trabajo" DROP CONSTRAINT "personaje_tiene_trabajo_personajesId_fkey";

-- DropForeignKey
ALTER TABLE "personaje_tiene_trabajo" DROP CONSTRAINT "personaje_tiene_trabajo_trabajosId_fkey";

-- DropForeignKey
ALTER TABLE "pesonaje_habita_reino" DROP CONSTRAINT "pesonaje_habita_reino_personajesId_fkey";

-- AddForeignKey
ALTER TABLE "personaje_tiene_trabajo" ADD CONSTRAINT "personaje_tiene_trabajo_trabajosId_fkey" FOREIGN KEY ("trabajosId") REFERENCES "trabajos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "personaje_tiene_trabajo" ADD CONSTRAINT "personaje_tiene_trabajo_personajesId_fkey" FOREIGN KEY ("personajesId") REFERENCES "personajes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pesonaje_habita_reino" ADD CONSTRAINT "pesonaje_habita_reino_personajesId_fkey" FOREIGN KEY ("personajesId") REFERENCES "personajes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
