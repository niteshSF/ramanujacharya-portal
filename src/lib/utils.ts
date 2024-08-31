import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import parse from "html-react-parser"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const applyTailwindClassesToHTML = (text: string) => {
  return text
    .replace(/<h1>/g, '<h1 class="text-2xl font-bold">')
    .replace(/<a/g, '<a class="underline text-blue-600 hover:text-blue-800 visited:text-purple-600"')
    .replace(/<p>/g, '<p class="py-2">')
}

export const parseHTML = (text: string) => {
  return parse(applyTailwindClassesToHTML(text))
}

const devanagariToRomanMap: { [key: string]: string } = {
  '०': '0',
  '१': '1',
  '२': '2',
  '३': '3',
  '४': '4',
  '५': '5',
  '६': '6',
  '७': '7',
  '८': '8',
  '९': '9'
}

const romanToDevanagariMap: { [key: string]: string } = {
  '0': '०',
  '1': '१',
  '2': '२',
  '3': '३',
  '4': '४',
  '5': '५',
  '6': '६',
  '7': '७',
  '8': '८',
  '9': '९'
}

export function devanagariToRoman(devanagari: string): string {
  return devanagari.split('').map(char => devanagariToRomanMap[char] || char).join('');
}

export function romanToDevanagari(roman: string): string {
  return roman.split('').map(char => romanToDevanagariMap[char] || char).join('');
}
