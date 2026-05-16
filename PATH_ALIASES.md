# TypeScript Path Aliases

This project uses path aliases to make imports cleaner and more maintainable.

## Configured Aliases

```typescript
// In tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@/features/*": ["./src/features/*"],
      "@/lib/*": ["./src/lib/*"],
      "@/components/*": ["./src/components/*"],
      "@/types/*": ["./src/types/*"],
      "@/hooks/*": ["./src/hooks/*"],
    }
  }
}
```

## Usage Examples

### Import from Features
```typescript
import { ProgramsService } from '@/features/programs/services/programs.service';
import { Program } from '@/features/programs/types/program.types';
import { PROGRAMS_DATA } from '@/features/programs/constants/program.constants';
import { ProgramCard } from '@/features/programs/components/ProgramCard';

import { MentorsService } from '@/features/mentors/services/mentors.service';
import { Mentor } from '@/features/mentors/types/mentor.types';
```

### Import from Lib
```typescript
import { apiCall, buildQueryString } from '@/lib/utils/api.utils';
import { toSlug, fromSlug, truncate } from '@/lib/utils/string.utils';
import { APP_CONFIG, ROUTES, COLORS } from '@/lib/constants/config';
```

### Import from Components
```typescript
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
```

### Import from Types
```typescript
import { ApiResponse, PaginatedResponse } from '@/types/global.types';
```

## Benefits

✅ **Shorter imports** - `@/features/...` instead of `../../../features/...`
✅ **Easier refactoring** - Move files without breaking imports
✅ **Better IDE support** - Auto-completion works better
✅ **Consistent patterns** - Everyone uses the same import style
✅ **Clear dependencies** - Easy to see where code comes from
