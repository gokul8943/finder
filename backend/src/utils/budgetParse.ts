// utils/parseBudget.ts
export function parseBudget(budget?: string): { min: number; max: number } {
  if (!budget) return { min: 0, max: 999999 };

  const parts = budget.split(/[-–—]/); // handle hyphen, en-dash, em-dash

  if (parts.length === 2) {
    const min = parseInt(parts[0].trim(), 10);
    const max = parseInt(parts[1].trim(), 10);
    if (!isNaN(min) && !isNaN(max)) return { min, max };
  }

  // "under 40000" / "below 40000"
  const underMatch = budget.match(/(?:under|below|max|upto)\s*(\d+)/i);
  if (underMatch) return { min: 0, max: parseInt(underMatch[1], 10) };

  // "above 20000" / "min 20000"
  const aboveMatch = budget.match(/(?:above|over|min|from)\s*(\d+)/i);
  if (aboveMatch) return { min: parseInt(aboveMatch[1], 10), max: 999999 };

  // plain number — treat as max
  const plain = parseInt(budget.trim(), 10);
  if (!isNaN(plain)) return { min: 0, max: plain };

  return { min: 0, max: 999999 };
}