/*
  Warnings:

  - Added the required column `PAN_number` to the `bankAccount` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `bankAccount` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "bankAccount" ADD COLUMN     "PAN_number" TEXT NOT NULL,
ADD COLUMN     "user_id" INTEGER NOT NULL,
ALTER COLUMN "KYC_Status" SET DEFAULT false;

-- AddForeignKey
ALTER TABLE "bankAccount" ADD CONSTRAINT "bankAccount_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
