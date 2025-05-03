/*
  Warnings:

  - A unique constraint covering the columns `[user_id]` on the table `bankAccount` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "bankAccount" ALTER COLUMN "balance" SET DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX "bankAccount_user_id_key" ON "bankAccount"("user_id");
