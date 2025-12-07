/*
  Warnings:

  - You are about to drop the column `mensagem` on the `Resposta` table. All the data in the column will be lost.
  - Added the required column `texto` to the `Resposta` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Resposta" DROP COLUMN "mensagem",
ADD COLUMN     "texto" TEXT NOT NULL;
