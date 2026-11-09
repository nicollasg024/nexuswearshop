import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatBRL(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

export const INSTAGRAM_URL = 'https://www.instagram.com/_nexus.wear/';
export const GOOGLE_MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=R.+da+Independ%C3%AAncia%2C+205+-+Centro%2C+Jarinu+-+SP%2C+13240-000';
