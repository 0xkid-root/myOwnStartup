/**
 * Mentor Feature Types
 * All mentor-related interfaces and types
 */

export type MentorCategory = 'frontend' | 'backend' | 'ai-ml' | 'founders' | 'fullstack';

export interface Mentor {
  id: string;
  slug: string;
  name: string;
  role: string;
  company: string;
  category: MentorCategory;
  bio?: string;
  avatar?: string;
  expertise: string[];
  experience: number; // years
  linkedin?: string;
  twitter?: string;
  bio_long?: string;
  mentees?: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface MentorFilter {
  category?: MentorCategory;
  search?: string;
}

export interface MentorDetailResponse {
  mentor: Mentor;
  suggestedMentors: Mentor[];
}
