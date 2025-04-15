# Jobapp

A job board application similar to LinkedIn, without social network features.

## Features

- Browse and search for jobs
- Filter jobs by location, job type, experience level, etc.
- View detailed job descriptions
- Apply to jobs directly through the platform
- Save jobs for later
- Track job applications
- User profiles and resume management

## Tech Stack

- React
- Tailwind CSS
- Supabase Authentication
- CockroachDB with Drizzle ORM
- Vite
- Vercel

## Development

To run the application locally:

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Deployment

The application is deployed on Vercel.

```bash
# Build the application
npm run build

# Preview the production build
npm run serve
```

## Project Structure

The project follows a modular architecture:

- `src/modules/` - Feature-based modules
- `src/modules/core/` - Core utilities and components
- `src/modules/auth/` - Authentication functionality
- `src/modules/jobs/` - Job listing and details
- `src/modules/profile/` - User profile management