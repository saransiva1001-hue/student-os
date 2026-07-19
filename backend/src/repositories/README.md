# Repositories Directory

This directory implements the Repository Pattern, abstracting Prisma ORM queries from the rest of the application.
- Decouples database queries (e.g. `prisma.task.findMany()`) from controllers and service logic.
- Makes mocking database connections inside tests straightforward.
