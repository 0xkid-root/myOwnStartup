export interface ApplicationFormData {
  fullName: string;
  email: string;
  phone: string;
  program: string;
  githubProfile: string;
  linkedinProfile?: string;
  codingExperience: string;
  motivation: string;
}

export interface ApplicationResponse {
  success: boolean;
  message: string;
  applicationId?: string;
}

export interface CodingExperienceLevel {
  value: string;
  label: string;
  description: string;
}

export type ApplicationStatus = 'idle' | 'loading' | 'success' | 'error';
