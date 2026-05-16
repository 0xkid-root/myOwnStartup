import { CodingExperienceLevel } from '../types/application.types';

export const CODING_EXPERIENCE_LEVELS: CodingExperienceLevel[] = [
  {
    value: 'beginner',
    label: 'Beginner',
    description: 'Just starting my coding journey',
  },
  {
    value: 'intermediate',
    label: 'Intermediate',
    description: 'Built a few projects, comfortable with basics',
  },
  {
    value: 'advanced',
    label: 'Advanced',
    description: 'Professional experience or extensive projects',
  },
  {
    value: 'expert',
    label: 'Expert',
    description: 'Multiple years of professional experience',
  },
];

export const BENEFITS = [
  {
    title: 'No Application Fee',
    description:
      'Applying to our programs is completely free. We review applications on a rolling basis.',
  },
  {
    title: 'Quick Process',
    description:
      'You will hear back from our admissions team within 48 hours of submitting your application.',
  },
  {
    title: 'Technical Assessment',
    description:
      'Selected candidates will be invited to a short 30-minute technical interview with a mentor.',
  },
];

export const APPLICATION_VALIDATION_RULES = {
  fullName: {
    required: true,
    minLength: 2,
    maxLength: 100,
    pattern: /^[a-zA-Z\s'-]+$/,
    errorMessage: 'Please enter a valid name',
  },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    errorMessage: 'Please enter a valid email address',
  },
  phone: {
    required: false,
    pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
    errorMessage: 'Please enter a valid phone number',
  },
  program: {
    required: true,
    errorMessage: 'Please select a program',
  },
  githubProfile: {
    required: true,
    pattern: /^(https:\/\/(www\.)?github\.com\/)?[a-zA-Z0-9_-]+\/?$/,
    errorMessage: 'Please enter a valid GitHub profile URL',
  },
  codingExperience: {
    required: true,
    errorMessage: 'Please select your coding experience level',
  },
  motivation: {
    required: true,
    minLength: 10,
    maxLength: 1000,
    errorMessage: 'Please tell us why you want to join (10-1000 characters)',
  },
};

export const DEFAULT_FORM_VALUES = {
  fullName: '',
  email: '',
  phone: '',
  program: '',
  githubProfile: '',
  linkedinProfile: '',
  codingExperience: '',
  motivation: '',
};
