# replit.md

## Overview

This is a full-stack web application built for VB Systems Communication, an IT services company. The application is a modern business website featuring a professional landing page with service offerings, testimonials, and a contact form. It uses a React frontend with Express.js backend, PostgreSQL database with Drizzle ORM, and is designed with a focus on small and medium business IT solutions.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: TanStack React Query for server state
- **Form Handling**: React Hook Form with Zod validation
- **Animations**: Framer Motion for smooth transitions
- **Build Tool**: Vite for development and building

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js 20
- **Database ORM**: Drizzle ORM
- **Validation**: Zod schemas shared between frontend and backend
- **Session Management**: Express sessions with PostgreSQL store
- **Development**: tsx for TypeScript execution

### Data Storage
- **Primary Database**: PostgreSQL (via Neon serverless)
- **ORM**: Drizzle ORM with migrations
- **Schema Location**: `shared/schema.ts` for type safety
- **Fallback**: In-memory storage for development/testing

## Key Components

### Database Schema
- **Users Table**: Basic user authentication (id, username, password)
- **Contact Submissions Table**: Stores contact form submissions with business inquiry details
- **Shared Types**: Drizzle-generated types with Zod validation schemas

### Frontend Components
- **Landing Page Sections**: Hero, Services, About, Stats, Testimonials, CTA, Contact
- **Navigation**: Sticky header with smooth scroll to sections
- **Contact Form**: Multi-field form with validation and submission handling
- **Chat Widget**: Interactive chat interface with webhook integration for real-time support
- **UI Components**: Comprehensive shadcn/ui component library
- **Theming**: Professional theme with primary blue color scheme

### Backend Services
- **Contact Service**: Handles contact form submissions with integrated email notifications
- **Email Service**: Nodemailer-based SMTP service for sending contact form notifications
- **Storage Layer**: Abstract interface supporting both database and in-memory storage
- **API Routes**: RESTful endpoints for contact form submission
- **Environment Configuration**: .env file for email credentials and SMTP settings

## Data Flow

1. **User Interaction**: Users navigate the single-page application and interact with the contact form
2. **Form Submission**: Contact form data is validated client-side using Zod schemas
3. **API Request**: Validated data is sent to `/api/contact` endpoint
4. **Server Processing**: Express server validates data again and processes through ContactService
5. **Database Storage**: Contact submissions are stored in PostgreSQL via Drizzle ORM
6. **Response**: Success/error response sent back to client with toast notifications

## External Dependencies

### Core Dependencies
- **Database**: Neon PostgreSQL serverless database
- **UI Framework**: Radix UI primitives for accessible components
- **Styling**: Tailwind CSS with custom theme configuration
- **Development**: Replit-specific plugins for theme and error handling

### Development Tools
- **TypeScript**: Full type safety across the stack
- **ESBuild**: Production build bundling for backend
- **Drizzle Kit**: Database migrations and schema management
- **PostCSS**: CSS processing with Tailwind

## Deployment Strategy

### Development Environment
- **Platform**: Replit with Node.js 20 runtime
- **Hot Reload**: Vite dev server with HMR for frontend changes
- **Backend Watch**: tsx for automatic TypeScript compilation and server restart
- **Port Configuration**: Development on port 5000, production on port 80

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: ESBuild bundles server code to `dist/index.js`
- **Static Serving**: Express serves built frontend assets in production
- **Database**: PostgreSQL connection via environment variable

### Scaling Considerations
- **Deployment Target**: Autoscale configuration for traffic handling
- **Database**: Serverless PostgreSQL for automatic scaling
- **Static Assets**: Efficient serving through Express static middleware

## Changelog

```
Changelog:
- June 27, 2025. Added interactive chat widget with n8n webhook integration in bottom-right corner
- June 27, 2025. Added comprehensive detailed services sections with professional images
- June 27, 2025. Implemented email functionality for contact form using nodemailer
- June 26, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```