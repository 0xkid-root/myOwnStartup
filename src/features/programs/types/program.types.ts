/**
 * Program Feature Types
 * All program-related interfaces and types
 */

export type ProgramCategory = 'internship' | 'bootcamp' | 'apprenticeship';

export interface Program {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: ProgramCategory;
  duration: string;
  commitment: string;
  location: string;
  techStack: string[];
  circleColor: string;
  image?: string;
  shortDescription: string;
  syllabus?: string;
  mentors?: string[];
  outcomes?: LearningOutcome[];
  createdAt: Date;
  updatedAt: Date;
}

export interface LearningOutcome {
  id: string;
  title: string;
  description: string;
  number: number;
  category?: 'frontend' | 'backend' | 'fullstack' | 'other';
}

export interface ProgramFilter {
  category?: ProgramCategory;
  search?: string;
  sortBy?: 'title' | 'duration' | 'createdAt';
}

export interface ProgramDetailResponse {
  program: Program;
  relatedPrograms: Program[];
}
