-- CreateEnum
DO $$
BEGIN
  CREATE TYPE "CompanySector" AS ENUM ('MANUFACTURING', 'LOGISTICS', 'FOOD_PRODUCTION', 'CONSTRUCTION');
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

-- CreateEnum
DO $$
BEGIN
  CREATE TYPE "CompanyStatus" AS ENUM ('HEALTHY', 'ATTENTION', 'CRITICAL');
EXCEPTION
  WHEN duplicate_object THEN NULL;
END $$;

-- AlterTable
ALTER TABLE "Company"
ADD COLUMN IF NOT EXISTS "sector" "CompanySector",
ADD COLUMN IF NOT EXISTS "employeeCount" INTEGER,
ADD COLUMN IF NOT EXISTS "nextAuditAt" TIMESTAMP(3),
ADD COLUMN IF NOT EXISTS "status" "CompanyStatus";

-- Backfill defaults before applying NOT NULL constraints
UPDATE "Company"
SET "sector" = 'MANUFACTURING'
WHERE "sector" IS NULL;

UPDATE "Company"
SET "employeeCount" = 0
WHERE "employeeCount" IS NULL;

UPDATE "Company"
SET "status" = 'HEALTHY'
WHERE "status" IS NULL;

ALTER TABLE "Company"
ALTER COLUMN "sector" SET DEFAULT 'MANUFACTURING',
ALTER COLUMN "sector" SET NOT NULL,
ALTER COLUMN "employeeCount" SET DEFAULT 0,
ALTER COLUMN "employeeCount" SET NOT NULL,
ALTER COLUMN "status" SET DEFAULT 'HEALTHY',
ALTER COLUMN "status" SET NOT NULL,
ALTER COLUMN "address" DROP NOT NULL,
ALTER COLUMN "phone" DROP NOT NULL,
ALTER COLUMN "email" DROP NOT NULL;
