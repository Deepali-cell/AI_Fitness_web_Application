/*
  Warnings:

  - A unique constraint covering the columns `[foodName]` on the table `FoodLibrary` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "FoodLibrary_foodName_key" ON "FoodLibrary"("foodName");
