/**
 * Shared utility functions and constants
 */

// Site configuration
export const SITE_URL = 'https://www.abhinavnarne.com';
export const AUTHOR_NAME = 'Tulasi Priya Vattikuti';
export const TWITTER_HANDLE = '';

// Image dimension constants
export const AVATAR_SIZE = {
  hero: 120,
  footer: 80,
  sidebar: 200,
} as const;

export const PROJECT_IMAGE = {
  width: 600,
  height: 400,
} as const;

// Skill competency
export const MAX_COMPETENCY = 5;

/**
 * Formats a date string to a human-readable format.
 * Parses as UTC to avoid timezone shifts.
 */
export function formatDate(dateStr: string): string {
  if (!dateStr) return '';
  // Parse as UTC to avoid timezone shifts
  const date = new Date(`${dateStr}T12:00:00`);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Calculates age based on birth date (YYYY-MM-DD format)
 */
export function calculateAge(birthDateStr: string): number {
  const today = new Date();
  const [year, month, day] = birthDateStr.split('-').map(Number);

  let age = today.getFullYear() - year;

  // Adjust if birthday hasn't occurred yet this year
  if (
    today.getMonth() < month - 1 ||
    (today.getMonth() === month - 1 && today.getDate() < day)
  ) {
    age--;
  }

  return age;
}
