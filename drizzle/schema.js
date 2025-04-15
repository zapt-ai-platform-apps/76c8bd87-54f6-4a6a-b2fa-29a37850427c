import { pgTable, serial, text, timestamp, boolean, uuid, unique, integer } from 'drizzle-orm/pg-core';

export const jobs = pgTable('jobs', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  company: text('company').notNull(),
  location: text('location').notNull(),
  jobType: text('job_type').notNull(),
  salary: text('salary'),
  description: text('description').notNull(),
  requirements: text('requirements'),
  companyDescription: text('company_description'),
  logoUrl: text('logo_url'),
  postedDate: timestamp('posted_date').defaultNow().notNull(),
  deadlineDate: timestamp('deadline_date'),
  isActive: boolean('is_active').default(true).notNull(),
  userId: uuid('user_id')
});

export const jobApplications = pgTable('job_applications', {
  id: serial('id').primaryKey(),
  jobId: integer('job_id').notNull().references(() => jobs.id),
  userId: uuid('user_id').notNull(),
  status: text('status').default('pending').notNull(),
  appliedDate: timestamp('applied_date').defaultNow().notNull(),
  resumeUrl: text('resume_url'),
  coverLetter: text('cover_letter')
});

export const savedJobs = pgTable('saved_jobs', {
  id: serial('id').primaryKey(),
  jobId: integer('job_id').notNull().references(() => jobs.id),
  userId: uuid('user_id').notNull(),
  savedDate: timestamp('saved_date').defaultNow().notNull(),
}, (table) => {
  return {
    unique: unique().on(table.jobId, table.userId)
  };
});

export const userProfiles = pgTable('user_profiles', {
  id: serial('id').primaryKey(),
  userId: uuid('user_id').notNull().unique(),
  fullName: text('full_name'),
  headline: text('headline'),
  location: text('location'),
  phone: text('phone'),
  website: text('website'),
  bio: text('bio'),
  resumeUrl: text('resume_url'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull()
});