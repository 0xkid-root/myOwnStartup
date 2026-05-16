import { ApplicationFormData, ApplicationResponse } from '../types/application.types';

/**
 * Application Service
 * Handles all application-related API calls and business logic
 */

export class ApplicationService {
  /**
   * Submit application form
   * Currently returns mock response - will be replaced with real API call
   */
  static async submitApplication(
    data: ApplicationFormData
  ): Promise<ApplicationResponse> {
    try {
      // Validate data
      this.validateFormData(data);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock success response
      return {
        success: true,
        message: 'Application submitted successfully',
        applicationId: `APP-${Date.now()}`,
      };

      // TODO: Replace with real API call
      // const response = await fetch('/api/applications/submit', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // });
      // return response.json();
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Failed to submit application';
      return {
        success: false,
        message,
      };
    }
  }

  /**
   * Validate form data before submission
   */
  static validateFormData(data: ApplicationFormData): void {
    const errors: string[] = [];

    if (!data.fullName || data.fullName.trim().length < 2) {
      errors.push('Full name is required and must be at least 2 characters');
    }

    if (!data.email || !this.isValidEmail(data.email)) {
      errors.push('Valid email is required');
    }

    if (!data.program) {
      errors.push('Program selection is required');
    }

    if (!data.githubProfile || data.githubProfile.trim().length === 0) {
      errors.push('GitHub profile is required');
    }

    if (!data.codingExperience) {
      errors.push('Coding experience level is required');
    }

    if (!data.motivation || data.motivation.trim().length < 10) {
      errors.push('Please tell us why you want to join (minimum 10 characters)');
    }

    if (errors.length > 0) {
      throw new Error(errors.join('\n'));
    }
  }

  /**
   * Check if email is valid
   */
  static isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * Get application by ID (for future use)
   */
  static async getApplicationById(applicationId: string): Promise<ApplicationFormData | null> {
    try {
      // TODO: Implement API call
      console.log('Fetching application:', applicationId);
      return null;
    } catch (error) {
      console.error('Failed to fetch application:', error);
      return null;
    }
  }

  /**
   * Track form interactions (for analytics)
   */
  static trackFormInteraction(fieldName: string, action: string): void {
    // TODO: Implement analytics tracking
    console.log(`Form interaction: ${fieldName} - ${action}`);
  }
}
