-- DropForeignKey
ALTER TABLE "diplomacias" DROP CONSTRAINT "diplomacias_reinos1_fkey";

-- DropForeignKey
ALTER TABLE "diplomacias" DROP CONSTRAINT "diplomacias_reinos2_fkey";

-- DropForeignKey
ALTER TABLE "pesonaje_habita_reino" DROP CONSTRAINT "pesonaje_habita_reino_reinosId_fkey";

-- AddForeignKey
ALTER TABLE "pesonaje_habita_reino" ADD CONSTRAINT "pesonaje_habita_reino_reinosId_fkey" FOREIGN KEY ("reinosId") REFERENCES "reinos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "diplomacias" ADD CONSTRAINT "diplomacias_reinos1_fkey" FOREIGN KEY ("reinos1") REFERENCES "reinos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "diplomacias" ADD CONSTRAINT "diplomacias_reinos2_fkey" FOREIGN KEY ("reinos2") REFERENCES "reinos"("id") ON DELETE CASCADE ON UPDATE CASCADE;
