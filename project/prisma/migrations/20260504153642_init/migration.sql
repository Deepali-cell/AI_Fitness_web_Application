-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "contact" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserBodyDetails" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "gender" TEXT NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "height" DOUBLE PRECISION NOT NULL,
    "bloodGroup" TEXT,
    "diet" TEXT NOT NULL,
    "activity" TEXT NOT NULL,
    "sleepHours" INTEGER NOT NULL DEFAULT 7,
    "hydration" DOUBLE PRECISION NOT NULL DEFAULT 2.0,
    "profession" TEXT,
    "goal" TEXT NOT NULL DEFAULT 'Maintenance',
    "allergies" TEXT[],
    "chronicDiseases" TEXT[],
    "habits" TEXT[],
    "onTreatment" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserBodyDetails_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserBodyDetails_userId_key" ON "UserBodyDetails"("userId");

-- AddForeignKey
ALTER TABLE "UserBodyDetails" ADD CONSTRAINT "UserBodyDetails_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
