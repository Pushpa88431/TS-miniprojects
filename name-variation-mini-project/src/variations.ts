export function getNumberOfChars(name: string): number {
  // number of characters in: name
  return name.length;
}

export function getFirstChar(name: string): string {
  // first character of: name
  return name.slice(0, 1);
}

export function getLastChar(name: string): string {
  // last character of: name
  const length = name.length - 1;
  return name.charAt(length);
}

export function getLower(name: string): string {
  // name all in lower case (example: "ABC" becomes "abc")
  return name.toLowerCase();
}

export function getUpper(name: string): string {
  // name all in upper case (example: "abc" becomes "ABC")
  return name.toUpperCase();
}
