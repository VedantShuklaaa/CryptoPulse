-- CreateTable
CREATE TABLE "bankAccount" (
    "id" SERIAL NOT NULL,
    "balance" INTEGER NOT NULL,
    "KYC_Status" BOOLEAN NOT NULL,

    CONSTRAINT "bankAccount_pkey" PRIMARY KEY ("id")
);
