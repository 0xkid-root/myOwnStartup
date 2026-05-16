# 📚 ZeroTwoCode Architecture Documentation

Welcome to the comprehensive documentation for the ZeroTwoCode project architecture. This project follows a **senior-level, feature-based architecture** designed for scalability and team collaboration.

## 🚀 Start Here

**New to the project?** → Start with [QUICK_START.md](./QUICK_START.md)

**Want an overview?** → Read [ARCHITECTURE_SUMMARY.md](./ARCHITECTURE_SUMMARY.md)

## 📖 Documentation Index

### 1. **[QUICK_START.md](./QUICK_START.md)** - *Get up and running in 5 minutes*
   - Where to find things
   - Creating new features step-by-step
   - Common tasks with examples
   - Do's and don'ts
   - Troubleshooting

### 2. **[ARCHITECTURE_SUMMARY.md](./ARCHITECTURE_SUMMARY.md)** - *High-level overview*
   - What we've built
   - Key features explained
   - How data flows
   - Files created
   - Production-ready checklist

### 3. **[STRUCTURE.md](./STRUCTURE.md)** - *Complete directory breakdown*
   - Full directory structure
   - What each folder does
   - Architecture principles
   - How to add features
   - Scaling considerations

### 4. **[NAMING_CONVENTIONS.md](./NAMING_CONVENTIONS.md)** - *Code style guide*
   - File and folder naming
   - Variable and function naming
   - Component naming
   - Import organization
   - Quick reference table

### 5. **[BEST_PRACTICES.md](./BEST_PRACTICES.md)** - *Development guidelines*
   - Services patterns
   - Type safety guidelines
   - Error handling
   - Component organization
   - Feature isolation
   - Code review checklist

### 6. **[PATH_ALIASES.md](./PATH_ALIASES.md)** - *Import alias guide*
   - Configured aliases
   - Usage examples
   - Benefits of path aliases
   - Import patterns

## 🏗️ Architecture at a Glance

```
Feature-Based Architecture
├── Features (Programs, Mentors, About)
│   ├── Components (UI)
│   ├── Services (Business Logic)
│   ├── Types (Type Safety)
│   └── Constants (Static Data)
├── Shared (Common utilities & components)
├── Core (Config, utilities, types)
└── Next.js App Router (Routing)
```

## 🎯 Key Principles

1. **Features are Independent** - Each feature is self-contained and can be developed independently
2. **Services Handle Data** - Components focus on UI, services handle all data logic
3. **Type Everything** - Strict TypeScript ensures fewer bugs and better IDE support
4. **Constants are Centralized** - No magic numbers or hardcoded values scattered around
5. **Clean Imports** - Path aliases make imports readable and maintainable
6. **Scalable** - Designed from day one to grow with your team

## 📁 Quick Navigation

| Need | Location | File |
|------|----------|------|
| Add a feature | `/src/features/` | See QUICK_START.md |
| Store types | `/src/features/[feature]/types/` | See NAMING_CONVENTIONS.md |
| Handle data | `/src/features/[feature]/services/` | See BEST_PRACTICES.md |
| Store static data | `/src/features/[feature]/constants/` | See STRUCTURE.md |
| Share code | `/src/lib/utils/` | See PATH_ALIASES.md |
| App config | `/src/lib/constants/config.ts` | See ARCHITECTURE_SUMMARY.md |

## 🔄 Data Flow

```
User Interaction
       ↓
  Component (UI only)
       ↓
   Service (getProgramBySlug)
       ↓
Constants or API (PROGRAMS_DATA or fetch)
       ↓
   Types (Type Safety)
       ↓
   Update Component
       ↓
  Display to User
```

## 💪 This Architecture Supports

✅ **Team Scaling** - Multiple developers can work on different features simultaneously
✅ **Code Maintainability** - Clear organization makes the code easy to understand
✅ **Type Safety** - TypeScript catches bugs before they reach production
✅ **Performance** - Tree-shakeable code and optimized imports
✅ **Testing** - Easy to mock services and test components
✅ **API Integration** - Simple to swap mock data for real APIs
✅ **Feature Addition** - New features follow the same predictable pattern
✅ **Production Ready** - Built with best practices from day one

## 📚 Reading Paths

**I'm a Frontend Developer:**
1. Start: [QUICK_START.md](./QUICK_START.md)
2. Deep dive: [STRUCTURE.md](./STRUCTURE.md)
3. Reference: [BEST_PRACTICES.md](./BEST_PRACTICES.md)

**I'm Setting Up This Project:**
1. Overview: [ARCHITECTURE_SUMMARY.md](./ARCHITECTURE_SUMMARY.md)
2. Details: [STRUCTURE.md](./STRUCTURE.md)
3. Reference: [NAMING_CONVENTIONS.md](./NAMING_CONVENTIONS.md)

**I'm Reviewing Code:**
1. Standards: [NAMING_CONVENTIONS.md](./NAMING_CONVENTIONS.md)
2. Quality: [BEST_PRACTICES.md](./BEST_PRACTICES.md)
3. Patterns: [QUICK_START.md](./QUICK_START.md)

**I'm Joining the Team:**
1. Quick start: [QUICK_START.md](./QUICK_START.md)
2. Understand structure: [STRUCTURE.md](./STRUCTURE.md)
3. Learn conventions: [NAMING_CONVENTIONS.md](./NAMING_CONVENTIONS.md)

## 🎓 Learning Order

1. **Day 1** - Read [QUICK_START.md](./QUICK_START.md) and [ARCHITECTURE_SUMMARY.md](./ARCHITECTURE_SUMMARY.md)
2. **Day 2** - Study [STRUCTURE.md](./STRUCTURE.md) and explore the actual code
3. **Day 3** - Review [BEST_PRACTICES.md](./BEST_PRACTICES.md) and [NAMING_CONVENTIONS.md](./NAMING_CONVENTIONS.md)
4. **Ongoing** - Use [QUICK_START.md](./QUICK_START.md) as reference when adding features

## 🔗 Key Files Created

### Type Definitions
- `/src/types/global.types.ts` - Global types and interfaces
- `/src/features/programs/types/program.types.ts` - Program feature types
- `/src/features/mentors/types/mentor.types.ts` - Mentor feature types

### Services
- `/src/features/programs/services/programs.service.ts` - Program business logic
- `/src/features/mentors/services/mentors.service.ts` - Mentor business logic

### Constants
- `/src/lib/constants/config.ts` - App configuration
- `/src/features/programs/constants/program.constants.ts` - Program data
- `/src/features/mentors/constants/mentor.constants.ts` - Mentor data

### Utilities
- `/src/lib/utils/api.utils.ts` - API call handler and helpers
- `/src/lib/utils/string.utils.ts` - String manipulation utilities

## 🚀 Next Steps

1. ✅ **Understand the structure** - Read the appropriate docs above
2. ✅ **Explore the code** - Look at `/src/features/programs/` as an example
3. ✅ **Follow patterns** - Use existing features as templates for new ones
4. ✅ **Stick to conventions** - Review [NAMING_CONVENTIONS.md](./NAMING_CONVENTIONS.md) regularly
5. ✅ **Build with confidence** - Use [BEST_PRACTICES.md](./BEST_PRACTICES.md) as a checklist

## 💬 FAQ

**Q: Where do I put API calls?**
A: In services! See [BEST_PRACTICES.md](./BEST_PRACTICES.md) section on "Services - Never Fetch in Components"

**Q: How do I add a new feature?**
A: Follow the step-by-step guide in [QUICK_START.md](./QUICK_START.md)

**Q: How should I name files?**
A: Check [NAMING_CONVENTIONS.md](./NAMING_CONVENTIONS.md) for all the rules

**Q: Can features depend on each other?**
A: Minimize it! See [BEST_PRACTICES.md](./BEST_PRACTICES.md) section on "Feature Isolation"

**Q: How do I use path aliases?**
A: Learn in [PATH_ALIASES.md](./PATH_ALIASES.md)

**Q: What's the folder structure?**
A: Full breakdown in [STRUCTURE.md](./STRUCTURE.md)

## 📊 Architecture Stats

- **Feature Modules**: 5 (Programs, Mentors, About, Common, Shared)
- **Services**: 2 (ProgramsService, MentorsService)
- **Type Definitions**: 3+ files
- **Constants Files**: 3+ files
- **Utility Functions**: 10+ helper functions
- **Documentation**: 6 comprehensive guides
- **Ready for**: Multi-developer teams, complex features, scaling

## 🎉 You're All Set!

This architecture is:
- ✅ Production-ready
- ✅ Scalable for teams
- ✅ Type-safe
- ✅ Well-documented
- ✅ Easy to maintain
- ✅ Ready for growth

**Ready to code?** Start with [QUICK_START.md](./QUICK_START.md)! 🚀

---

**Last Updated**: May 2026
**Architecture**: Feature-Based with Services Layer
**Version**: 1.0
