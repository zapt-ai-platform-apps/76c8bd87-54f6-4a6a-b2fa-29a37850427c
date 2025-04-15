CREATE TABLE IF NOT EXISTS "jobs" (
  "id" SERIAL PRIMARY KEY,
  "title" TEXT NOT NULL,
  "company" TEXT NOT NULL,
  "location" TEXT NOT NULL,
  "job_type" TEXT NOT NULL,
  "salary" TEXT,
  "description" TEXT NOT NULL,
  "requirements" TEXT,
  "company_description" TEXT,
  "logo_url" TEXT,
  "posted_date" TIMESTAMP NOT NULL DEFAULT NOW(),
  "deadline_date" TIMESTAMP,
  "is_active" BOOLEAN NOT NULL DEFAULT TRUE,
  "user_id" UUID
);

CREATE TABLE IF NOT EXISTS "job_applications" (
  "id" SERIAL PRIMARY KEY,
  "job_id" INTEGER NOT NULL REFERENCES "jobs"("id"),
  "user_id" UUID NOT NULL,
  "status" TEXT NOT NULL DEFAULT 'pending',
  "applied_date" TIMESTAMP NOT NULL DEFAULT NOW(),
  "resume_url" TEXT,
  "cover_letter" TEXT
);

CREATE TABLE IF NOT EXISTS "saved_jobs" (
  "id" SERIAL PRIMARY KEY,
  "job_id" INTEGER NOT NULL REFERENCES "jobs"("id"),
  "user_id" UUID NOT NULL,
  "saved_date" TIMESTAMP NOT NULL DEFAULT NOW(),
  UNIQUE("job_id", "user_id")
);

CREATE TABLE IF NOT EXISTS "user_profiles" (
  "id" SERIAL PRIMARY KEY,
  "user_id" UUID NOT NULL UNIQUE,
  "full_name" TEXT,
  "headline" TEXT,
  "location" TEXT,
  "phone" TEXT,
  "website" TEXT,
  "bio" TEXT,
  "resume_url" TEXT,
  "created_at" TIMESTAMP NOT NULL DEFAULT NOW(),
  "updated_at" TIMESTAMP NOT NULL DEFAULT NOW()
);