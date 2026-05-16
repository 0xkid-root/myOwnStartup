/**
 * API Utility Functions
 * Helper functions for API calls and data management
 */

import { ApiResponse } from '@/types/global.types';
import { APP_CONFIG } from '../constants/config';

/**
 * Centralized API call handler
 * Handles all HTTP requests with consistent error handling
 */
export async function apiCall<T = any>(
  endpoint: string,
  options: RequestInit = {},
): Promise<ApiResponse<T>> {
  try {
    const url = `${APP_CONFIG.api.baseUrl}${endpoint}`;
    
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      timeout: APP_CONFIG.api.timeout,
      ...options,
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: data.error || 'An error occurred',
        status: response.status,
      };
    }

    return {
      success: true,
      data: data,
      status: response.status,
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error(`[API Error] ${endpoint}:`, message);
    
    return {
      success: false,
      error: message,
      status: 500,
    };
  }
}

/**
 * Generate query string from object
 */
export function buildQueryString(params: Record<string, any>): string {
  const query = new URLSearchParams();
  
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      query.append(key, String(value));
    }
  });
  
  return query.toString();
}

/**
 * Format API error message
 */
export function formatErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }
  return 'An unexpected error occurred';
}
