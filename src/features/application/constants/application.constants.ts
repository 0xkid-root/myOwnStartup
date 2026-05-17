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
    title: "Work on Real Startup Products",
    description:
      "Build production-ready applications and contribute to real-world startup projects instead of tutorial-based learning.",
  },
  {
    title: "Learn from Industry Mentors",
    description:
      "Get direct mentorship from experienced developers, startup engineers, and technical leaders working in the industry.",
  },
  {
    title: "Build Strong Portfolio Projects",
    description:
      "Create practical projects that strengthen your resume, portfolio, and job opportunities in modern tech roles.",
  },
  {
    title: "Experience Team Collaboration",
    description:
      "Learn Git workflows, agile development, code reviews, and collaborative engineering practices used in startups.",
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
