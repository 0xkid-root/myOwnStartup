/**
 * Mentors Service
 * Handles all mentor-related business logic and data fetching
 */

import { Mentor, MentorFilter, MentorDetailResponse } from '../types/mentor.types';
import { MENTORS_DATA } from '../constants/mentor.constants';

/**
 * Service for managing mentor data
 * In production, this would call actual API endpoints
 */
export class MentorsService {
  /**
   * Get all mentors with optional filtering
   */
  static async getMentors(filters?: MentorFilter): Promise<Mentor[]> {
    try {
      let mentors = [...MENTORS_DATA];

      // Apply category filter
      if (filters?.category) {
        mentors = mentors.filter(m => m.category === filters.category);
      }

      // Apply search filter
      if (filters?.search) {
        const search = filters.search.toLowerCase();
        mentors = mentors.filter(m => 
          m.name.toLowerCase().includes(search) || 
          m.expertise.some(e => e.toLowerCase().includes(search))
        );
      }

      return mentors;
    } catch (error) {
      console.error('[MentorsService] Error fetching mentors:', error);
      throw error;
    }
  }

  /**
   * Get single mentor by slug
   */
  static async getMentorBySlug(slug: string): Promise<MentorDetailResponse | null> {
    try {
      const mentor = MENTORS_DATA.find(m => m.slug === slug);
      
      if (!mentor) {
        return null;
      }

      // Get suggested mentors (different category)
      const suggestedMentors = MENTORS_DATA.filter(
        m => m.category !== mentor.category
      ).slice(0, 3);

      return {
        mentor,
        suggestedMentors,
      };
    } catch (error) {
      console.error('[MentorsService] Error fetching mentor:', error);
      throw error;
    }
  }

  /**
   * Get mentors by category
   */
  static async getMentorsByCategory(category: string): Promise<Mentor[]> {
    return this.getMentors({ category: category as any });
  }

  /**
   * Search mentors by expertise
   */
  static async searchMentors(query: string): Promise<Mentor[]> {
    return this.getMentors({ search: query });
  }

  /**
   * Get mentor statistics
   */
  static async getMentorStats() {
    return {
      totalMentors: MENTORS_DATA.length,
      categories: {
        frontend: MENTORS_DATA.filter(m => m.category === 'frontend').length,
        backend: MENTORS_DATA.filter(m => m.category === 'backend').length,
        'ai-ml': MENTORS_DATA.filter(m => m.category === 'ai-ml').length,
        founders: MENTORS_DATA.filter(m => m.category === 'founders').length,
        fullstack: MENTORS_DATA.filter(m => m.category === 'fullstack').length,
      },
    };
  }

  /**
   * Get all expertise tags
   */
  static getAllExpertise(): string[] {
    const expertise = new Set<string>();
    MENTORS_DATA.forEach(mentor => {
      mentor.expertise.forEach(skill => expertise.add(skill));
    });
    return Array.from(expertise);
  }
}
