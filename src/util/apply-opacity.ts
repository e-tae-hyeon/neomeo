/** @param hex 6자리 hex @param opacity [0,1] */
export function applyOpacity(hex: string, opacity: number): string {
  // Validate hex format
  if (!/^#([0-9A-F]{3}){1,2}$/i.test(hex)) {
    console.error("invalid hex color");
    return hex;
  }

  // Remove the hash at the start if it's there
  let sanitizedHex = hex.slice(1);

  // If the hex code is in shorthand (e.g., #03F), convert it to full form (e.g., #0033FF)
  if (sanitizedHex.length === 3) {
    sanitizedHex = sanitizedHex
      .split("")
      .map((c) => c + c)
      .join("");
  }

  // Convert the hex values to RGB
  const bigint = parseInt(sanitizedHex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  // Return the rgba color string
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}
