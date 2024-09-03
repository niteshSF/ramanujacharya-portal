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

const kannadaToRomanMap: { [key: string]: string } = {
  '೦': '0',
  '೧': '1',
  '೨': '2',
  '೩': '3',
  '೪': '4',
  '೫': '5',
  '೬': '6',
  '೭': '7',
  '೮': '8',
  '೯': '9'
};

const romanToKannadaMap: { [key: string]: string } = {
  '0': '೦',
  '1': '೧',
  '2': '೨',
  '3': '೩',
  '4': '೪',
  '5': '೫',
  '6': '೬',
  '7': '೭',
  '8': '೮',
  '9': '೯'
};

export function kannadaToRoman(kannada: string): string {
  return kannada.split('').map(char => kannadaToRomanMap[char] || char).join('');
}

export function romanToKannada(roman: string): string {
  return roman.split('').map(char => romanToKannadaMap[char] || char).join('');
}

const tamilToRomanMap: { [key: string]: string } = {
  '௦': '0',
  '௧': '1',
  '௨': '2',
  '௩': '3',
  '௪': '4',
  '௫': '5',
  '௬': '6',
  '௭': '7',
  '௮': '8',
  '௯': '9'
}

const romanToTamilMap: { [key: string]: string } = {
  '0': '௦',
  '1': '௧',
  '2': '௨',
  '3': '௩',
  '4': '௪',
  '5': '௫',
  '6': '௬',
  '7': '௭',
  '8': '௮',
  '9': '௯'
}

export function tamilToRoman(tamil: string): string {
  return tamil.split('').map(char => tamilToRomanMap[char] || char).join('')
}

export function romanToTamil(roman: string): string {
  return roman.split('').map(char => romanToTamilMap[char] || char).join('')
}

const teluguToRomanMap: { [key: string]: string } = {
  '౦': '0',
  '౧': '1',
  '౨': '2',
  '౩': '3',
  '౪': '4',
  '౫': '5',
  '౬': '6',
  '౭': '7',
  '౮': '8',
  '౯': '9'
}

const romanToTeluguMap: { [key: string]: string } = {
  '0': '౦',
  '1': '౧',
  '2': '౨',
  '3': '౩',
  '4': '౪',
  '5': '౫',
  '6': '౬',
  '7': '౭',
  '8': '౮',
  '9': '౯'
}

export function teluguToRoman(telugu: string): string {
  return telugu.split('').map(char => teluguToRomanMap[char] || char).join('')
}

export function romanToTelugu(roman: string): string {
  return roman.split('').map(char => romanToTeluguMap[char] || char).join('')
}
