# Overview

This is a full-stack web application built with React and Express, featuring a payment information display interface. The application allows users to view various payment methods including local Sri Lankan bank accounts and international accounts (USD/EUR). The frontend is built with React, TypeScript, and Tailwind CSS using shadcn/ui components, while the backend uses Express.js with a planned PostgreSQL database integration via Drizzle ORM.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Component Library**: shadcn/ui components built on Radix UI primitives
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing
- **Build Tool**: Vite with custom configuration for development and production

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **Module System**: ES modules (type: "module")
- **Development**: Hot reloading with tsx
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage) ready for database integration
- **API Structure**: RESTful API with /api prefix for all backend routes

## Data Storage
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Schema Management**: Centralized schema definitions in shared directory
- **Migrations**: Drizzle Kit for database migrations
- **Current Implementation**: In-memory storage with interface ready for database swap

## Authentication & Authorization
- **Session Management**: Prepared with connect-pg-simple for PostgreSQL session storage
- **User Model**: Basic user schema with username/password structure
- **Storage Interface**: User CRUD operations abstracted for easy database integration

## External Dependencies

### Core Technologies
- **Database**: Neon Database (serverless PostgreSQL) via @neondatabase/serverless
- **ORM**: Drizzle ORM with Zod integration for schema validation
- **UI Components**: Radix UI primitives for accessibility and behavior
- **Form Handling**: React Hook Form with Hookform resolvers
- **Date Utilities**: date-fns for date manipulation

### Development Tools
- **Replit Integration**: Custom Vite plugins for Replit development environment
- **Build Tools**: esbuild for server bundling, Vite for client bundling
- **Type Checking**: TypeScript with strict mode enabled

### UI & Styling
- **CSS Framework**: Tailwind CSS with custom design tokens
- **Icons**: Lucide React for consistent iconography
- **Utilities**: clsx and tailwind-merge for conditional styling
- **Component Variants**: class-variance-authority for component styling patterns

### Data Fetching & State
- **HTTP Client**: Native fetch API wrapped in custom query functions
- **Cache Management**: TanStack Query for server state caching and synchronization
- **Form Validation**: Zod schemas integrated with Drizzle for type safety