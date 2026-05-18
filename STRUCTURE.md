# piecodingschools - Senior Level File Structure

## Overview
This project follows a **feature-based architecture** with a **services layer** for data management. This structure is designed to scale with teams and maintain clean separation of concerns.

## Directory Structure

```
src/
├── app/                              # Next.js 16 App Router
│   ├── layout.tsx                   # Root layout
│   ├── page.tsx                     # Home page
│   ├── globals.css                  # Global styles
│   ├── (marketing)/                 # Marketing routes group
│   │   ├── layout.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── programs/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── mentors/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   └── projects/
│   │       └── page.tsx
│   └── api/                         # API routes
│       ├── programs/
│       │   └── route.ts
│       └── mentors/
│           └── route.ts
│
├── features/                         # Feature modules (business logic)
│   ├── programs/                    # Programs feature
│   │   ├── components/              # Programs-specific components
│   │   │   ├── ProgramCard.tsx
│   │   │   ├── ProgramDetail.tsx
│   │   │   ├── ProgramGrid.tsx
│   │   │   └── ProgramFilter.tsx
│   │   ├── services/                # Business logic
│   │   │   └── programs.service.ts
│   │   ├── types/                   # TypeScript interfaces
│   │   │   └── program.types.ts
│   │   └── constants/               # Static data
│   │       └── program.constants.ts
│   │
│   ├── mentors/                     # Mentors feature
│   │   ├── components/
│   │   │   ├── MentorCard.tsx
│   │   │   ├── MentorProfile.tsx
│   │   │   ├── MentorGrid.tsx
│   │   │   └── MentorFilter.tsx
│   │   ├── services/
│   │   │   └── mentors.service.ts
│   │   ├── types/
│   │   │   └── mentor.types.ts
│   │   └── constants/
│   │       └── mentor.constants.ts
│   │
│   ├── about/                       # About feature
│   │   ├── components/
│   │   ├── types/
│   │   └── constants/
│   │
│   └── common/                      # Shared across features
│       ├── components/              # Common UI components
│       │   ├── Hero.tsx
│       │   ├── CTA.tsx
│       │   └── Stats.tsx
│       ├── utils/                   # Shared utilities
│       │   └── filters.utils.ts
│       └── types/                   # Shared types
│           └── common.types.ts
│
├── components/                      # Reusable UI components
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   └── ui/                          # shadcn/ui components
│       └── ...
│
├── lib/                             # Core utilities
│   ├── utils/                       # Utility functions
│   │   ├── api.utils.ts            # API helpers
│   │   ├── string.utils.ts         # String helpers
│   │   └── format.utils.ts         # Formatting helpers
│   ├── constants/                   # Global constants
│   │   └── config.ts               # App configuration
│   └── helpers/                     # Helper functions
│       └── ...
│
├── hooks/                           # Custom React hooks
│   └── (minimal usage)
│
├── types/                           # Global types
│   └── global.types.ts
│
├── public/                          # Static assets
│   ├── images/
│   ├── icons/
│   └── mentors/
│
├── STRUCTURE.md                     # This file
└── README.md

```

## Architecture Principles

### 1. **Feature-Based Organization**
- Each feature (Programs, Mentors, About) is self-contained
- Easy to locate and maintain related code
- Scales well as new features are added
- Team members can own specific features

### 2. **Services Layer**
- All business logic lives in `/services/`
- Components consume services, don't fetch data directly
- Easy to swap implementations (mock → real API)
- Centralized error handling and data transformation

### 3. **Type Safety**
- Each feature has its own `/types/` directory
- Global types in `/types/global.types.ts`
- Strict TypeScript for better IDE support and fewer bugs

### 4. **Constants & Static Data**
- All static data in `/constants/` directories
- Easy to find and update configuration
- Centralized and organized

### 5. **Reusable Utilities**
- Common utilities in `/lib/utils/`
- Feature-specific utilities stay in feature folder
- String utilities, API helpers, formatting functions

### 6. **Shared Components**
- `/components/` for truly reusable UI (Navigation, Footer)
- Feature-specific components stay in their feature folder
- shadcn/ui components in `/components/ui/`

## How to Add a New Feature

### 1. Create Feature Structure
```bash
mkdir -p src/features/newfeature/{components,services,types,constants}
```

### 2. Define Types
```typescript
// src/features/newfeature/types/newfeature.types.ts
export interface MyType {
  id: string;
  name: string;
  // ...
}
```

### 3. Add Constants
```typescript
// src/features/newfeature/constants/newfeature.constants.ts
export const DATA: MyType[] = [
  // ...
];
```

### 4. Create Service
```typescript
// src/features/newfeature/services/newfeature.service.ts
export class NewfeatureService {
  static async getData() {
    // Fetch from API or return local data
  }
}
```

### 5. Build Components
```typescript
// src/features/newfeature/components/MyComponent.tsx
import { NewfeatureService } from '../services/newfeature.service';

export function MyComponent() {
  // Use service for data
}
```

## Import Paths
Use TypeScript path aliases for cleaner imports:

```typescript
// ✅ Good
import { ProgramsService } from '@/features/programs/services/programs.service';
import { Program } from '@/features/programs/types/program.types';
import { APP_CONFIG } from '@/lib/constants/config';

// ❌ Avoid
import { ProgramsService } from '../../../features/programs/services/programs.service';
```

## Data Flow
```
Component → Service → Constants/Types → API/Local Data
  ↓           ↓
 UI          Business Logic
```

1. Components import services
2. Services handle data fetching and transformation
3. Constants provide static data
4. Types ensure type safety throughout

## Scaling Considerations

### Adding API Integration
- Services handle API calls via `apiCall` utility
- Easy to swap between mock and real API
- Error handling centralized in service

### Adding New Pages
- Create in appropriate feature folder
- Use existing services for data
- Reuse components where possible

### Team Collaboration
- Each developer can own a feature
- Clear boundaries prevent conflicts
- Shared utilities prevent duplication

### Performance
- Tree-shakeable service classes
- Type-only imports don't add bundle size
- Code splitting by feature/route

## Best Practices

1. **Keep Features Independent** - Minimize cross-feature dependencies
2. **Use Services** - Never fetch data directly in components
3. **Type Everything** - Use TypeScript interfaces liberally
4. **Centralize Config** - Use `/lib/constants/config.ts`
5. **DRY Utilities** - Extract common logic to `/lib/utils/`
6. **Document Services** - Add JSDoc comments to public methods
7. **Test Services** - Business logic should have unit tests
8. **Organize Constants** - Keep static data organized by feature
