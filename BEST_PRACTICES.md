# Best Practices

Guidelines for maintaining code quality and consistency across the piecodingschools project.

## 1. Services - Never Fetch in Components

### ✅ DO: Use Services
```typescript
// features/programs/components/ProgramList.tsx
import { ProgramsService } from '@/features/programs/services/programs.service';
import { useEffect, useState } from 'react';

export function ProgramList() {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    ProgramsService.getPrograms().then(setPrograms);
  }, []);

  return programs.map(program => <ProgramCard key={program.id} {...program} />);
}
```

### ❌ DON'T: Fetch Directly in Component
```typescript
// ❌ Bad - Data fetching logic mixed with UI
export function ProgramList() {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    fetch('/api/programs')
      .then(res => res.json())
      .then(setPrograms);
  }, []);

  return programs.map(program => <div>{program.title}</div>);
}
```

## 2. Type Safety

### ✅ DO: Import Types from Feature
```typescript
import { Program } from '@/features/programs/types/program.types';

interface ProgramCardProps {
  program: Program;
}

export function ProgramCard({ program }: ProgramCardProps) {
  return <div>{program.title}</div>;
}
```

### ❌ DON'T: Use `any` Types
```typescript
// ❌ Bad - Loses type information
export function ProgramCard(props: any) {
  return <div>{props.program.title}</div>;
}
```

## 3. Error Handling in Services

### ✅ DO: Handle Errors Properly
```typescript
export class ProgramsService {
  static async getPrograms() {
    try {
      const response = await apiCall<Program[]>('/api/programs');
      
      if (!response.success) {
        throw new Error(response.error);
      }
      
      return response.data || [];
    } catch (error) {
      console.error('[ProgramsService] Failed to fetch programs:', error);
      throw error;
    }
  }
}
```

### ❌ DON'T: Silently Fail
```typescript
// ❌ Bad - Errors are swallowed
export class ProgramsService {
  static async getPrograms() {
    const response = await fetch('/api/programs');
    return response.json(); // What if it fails?
  }
}
```

## 4. Component Organization

### ✅ DO: One Responsibility Per Component
```typescript
// ProgramCard.tsx - Just displays a card
export function ProgramCard({ program }: { program: Program }) {
  return (
    <div className="rounded-lg border p-6">
      <h3>{program.title}</h3>
      <p>{program.description}</p>
    </div>
  );
}

// ProgramList.tsx - Fetches and lists programs
export function ProgramList() {
  const [programs, setPrograms] = useState<Program[]>([]);

  useEffect(() => {
    ProgramsService.getPrograms().then(setPrograms);
  }, []);

  return (
    <div className="grid gap-4">
      {programs.map(program => <ProgramCard key={program.id} program={program} />)}
    </div>
  );
}

// ProgramPage.tsx - Combines everything
export default function ProgramPage() {
  return (
    <div>
      <h1>Our Programs</h1>
      <ProgramList />
    </div>
  );
}
```

### ❌ DON'T: Do Everything in One Component
```typescript
// ❌ Bad - Component does too much
export default function ProgramPage() {
  const [programs, setPrograms] = useState([]);
  
  useEffect(() => {
    fetch('/api/programs').then(r => r.json()).then(setPrograms);
  }, []);

  return (
    <div>
      <h1>Programs</h1>
      <div className="grid gap-4">
        {programs.map(p => (
          <div key={p.id} className="rounded-lg border p-6">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            {/* More UI logic here */}
          </div>
        ))}
      </div>
    </div>
  );
}
```

## 5. Constants & Configuration

### ✅ DO: Centralize Configuration
```typescript
// lib/constants/config.ts
export const APP_CONFIG = {
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    timeout: 30000,
  },
  pagination: {
    defaultPageSize: 10,
  },
};

// features/programs/constants/program.constants.ts
export const PROGRAM_CATEGORIES = {
  INTERNSHIP: 'internship',
  BOOTCAMP: 'bootcamp',
};
```

### ❌ DON'T: Hardcode Values
```typescript
// ❌ Bad - Magic numbers scattered everywhere
const timeout = 30000;
const pageSize = 10;
const category = 'internship';
```

## 6. Imports Organization

### ✅ DO: Organize Imports
```typescript
// 1. Next.js imports
import Link from 'next/link';

// 2. React imports
import { useEffect, useState } from 'react';

// 3. Feature imports
import { ProgramsService } from '@/features/programs/services/programs.service';
import { Program } from '@/features/programs/types/program.types';

// 4. Component imports
import { Button } from '@/components/ui/button';

// 5. Utils/Config imports
import { APP_CONFIG } from '@/lib/constants/config';
```

### ❌ DON'T: Random Import Order
```typescript
// ❌ Bad - Disorganized imports
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import Link from 'next/link';
import { ProgramsService } from '@/features/programs/services/programs.service';
import { APP_CONFIG } from '@/lib/constants/config';
```

## 7. API Utility Usage

### ✅ DO: Use API Utility
```typescript
import { apiCall } from '@/lib/utils/api.utils';

const response = await apiCall<Program[]>('/api/programs', {
  method: 'GET',
});

if (response.success && response.data) {
  // Use data
} else {
  console.error(response.error);
}
```

### ❌ DON'T: Raw Fetch
```typescript
// ❌ Bad - Inconsistent error handling
const response = await fetch('/api/programs');
const data = await response.json();
```

## 8. Feature Isolation

### ✅ DO: Keep Features Independent
```typescript
// Each feature is self-contained
src/features/programs/
├── components/        # Only program components
├── services/          # Only program services
├── types/            # Only program types
└── constants/        # Only program constants

// Features can import from lib/ and common/
import { apiCall } from '@/lib/utils/api.utils';
import { CommonHeader } from '@/features/common/components/CommonHeader';
```

### ❌ DON'T: Create Cross-Feature Dependencies
```typescript
// ❌ Bad - Programs depends on Mentors directly
import { MentorsService } from '@/features/mentors/services/mentors.service';

export class ProgramsService {
  static async getProgramsWithMentors() {
    const mentors = await MentorsService.getMentors(); // Wrong!
  }
}
```

## 9. Testing Services

### ✅ DO: Mock Services for Testing
```typescript
// __tests__/programs.service.test.ts
jest.mock('@/features/programs/services/programs.service');

import { ProgramsService } from '@/features/programs/services/programs.service';

describe('ProgramsService', () => {
  it('should return programs', async () => {
    const mockPrograms = [{ id: '1', title: 'Test' }];
    
    (ProgramsService.getPrograms as jest.Mock).mockResolvedValue(mockPrograms);
    
    const result = await ProgramsService.getPrograms();
    
    expect(result).toEqual(mockPrograms);
  });
});
```

## 10. Documentation

### ✅ DO: Add JSDoc Comments
```typescript
/**
 * Fetch programs with optional filtering
 * 
 * @param filters - Optional filter criteria
 * @param filters.category - Filter by program category
 * @param filters.search - Search by title or description
 * @returns Promise resolving to filtered programs array
 * @throws Error if API call fails
 * 
 * @example
 * const programs = await ProgramsService.getPrograms({ 
 *   category: 'internship' 
 * });
 */
export static async getPrograms(filters?: ProgramFilter): Promise<Program[]> {
  // Implementation
}
```

### ❌ DON'T: Leave Functions Undocumented
```typescript
// ❌ Bad - No documentation
export static async getPrograms(filters?: ProgramFilter): Promise<Program[]> {
  // ...
}
```

## Checklist for New Features

- [ ] Created feature folder structure
- [ ] Defined types in `types/` directory
- [ ] Added constants in `constants/` directory
- [ ] Created service with proper error handling
- [ ] Built components using the service
- [ ] Added JSDoc comments to public methods
- [ ] Organized imports properly
- [ ] No hardcoded values (use constants instead)
- [ ] Type-safe throughout (no `any` types)
- [ ] Documented complex logic with comments

## Code Review Checklist

- [ ] Are services used instead of direct API calls in components?
- [ ] Are all types properly defined and imported?
- [ ] Is error handling present and consistent?
- [ ] Are imports organized and using path aliases?
- [ ] Are constants centralized and not hardcoded?
- [ ] Does each component have a single responsibility?
- [ ] Is there JSDoc documentation for public functions?
- [ ] Are there no cross-feature dependencies?
- [ ] Is the code following naming conventions?
- [ ] Are boolean variables prefixed with is/has/can?
