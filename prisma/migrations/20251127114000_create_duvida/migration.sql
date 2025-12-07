-- CreateTable
CREATE TABLE "Duvida" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Duvida_pkey" PRIMARY KEY ("id")
);
