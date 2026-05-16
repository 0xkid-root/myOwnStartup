/**
 * Programs Service
 * Handles all program-related business logic and data fetching
 */

import { Program, ProgramFilter, ProgramDetailResponse } from '../types/program.types';
import { PROGRAMS_DATA } from '../constants/program.constants';

/**
 * Service for managing program data
 * In production, this would call actual API endpoints
 */
export class ProgramsService {
  /**
   * Get all programs with optional filtering
   */
  static async getPrograms(filters?: ProgramFilter): Promise<Program[]> {
    try {
      let programs = [...PROGRAMS_DATA];

      // Apply category filter
      if (filters?.category) {
        programs = programs.filter(p => p.category === filters.category);
      }

      // Apply search filter
      if (filters?.search) {
        const search = filters.search.toLowerCase();
        programs = programs.filter(p => 
          p.title.toLowerCase().includes(search) || 
          p.description.toLowerCase().includes(search)
        );
      }

      // Apply sorting
      if (filters?.sortBy) {
        programs.sort((a, b) => {
          const aVal = a[filters.sortBy as keyof Program];
          const bVal = b[filters.sortBy as keyof Program];
          
          if (typeof aVal === 'string') {
            return aVal.localeCompare(String(bVal));
          }
          return 0;
        });
      }

      return programs;
    } catch (error) {
      console.error('[ProgramsService] Error fetching programs:', error);
      throw error;
    }
  }

  /**
   * Get single program by slug
   */
  static async getProgramBySlug(slug: string): Promise<ProgramDetailResponse | null> {
    try {
      const program = PROGRAMS_DATA.find(p => p.slug === slug);
      
      if (!program) {
        return null;
      }

      // Get related programs (same category, different program)
      const relatedPrograms = PROGRAMS_DATA.filter(
        p => p.category === program.category && p.id !== program.id
      ).slice(0, 3);

      return {
        program,
        relatedPrograms,
      };
    } catch (error) {
      console.error('[ProgramsService] Error fetching program:', error);
      throw error;
    }
  }

  /**
   * Get programs by category
   */
  static async getProgramsByCategory(category: string): Promise<Program[]> {
    return this.getPrograms({ category: category as any });
  }

  /**
   * Search programs
   */
  static async searchPrograms(query: string): Promise<Program[]> {
    return this.getPrograms({ search: query });
  }

  /**
   * Get program statistics
   */
  static async getProgramStats() {
    return {
      totalPrograms: PROGRAMS_DATA.length,
      categories: {
        internship: PROGRAMS_DATA.filter(p => p.category === 'internship').length,
        bootcamp: PROGRAMS_DATA.filter(p => p.category === 'bootcamp').length,
        apprenticeship: PROGRAMS_DATA.filter(p => p.category === 'apprenticeship').length,
      },
    };
  }
}
