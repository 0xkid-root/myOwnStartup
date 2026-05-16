/**
 * Application Configuration
 * Centralized config for the entire application
 */

export const APP_CONFIG = {
  name: 'ZeroTwoCode',
  description: 'Empowering the next generation of developers with industry-ready skills',
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  
  // API Configuration
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
    timeout: 30000, // 30 seconds
  },
  
  // Pagination
  pagination: {
    defaultPageSize: 10,
    maxPageSize: 100,
  },
  
  // Feature Flags
  features: {
    mentorships: true,
    projects: true,
    certifications: true,
  },
} as const;

export const ROUTES = {
  home: '/',
  programs: '/programs',
  mentors: '/mentors',
  about: '/about',
  projects: '/projects',
  contact: '/contact',
  apply: '/apply',
} as const;

export const COLORS = {
  primary: '#0d0f1a',
  primaryLight: '#dce8ff',
  primaryLightest: '#f0f4ff',
  accent: '#3b6ef8',
  accentCyan: '#06c5d3',
  dark: '#0d0f1a',
  white: '#ffffff',
  muted: '#6b7280',
  border: '#e5e7eb',
} as const;
