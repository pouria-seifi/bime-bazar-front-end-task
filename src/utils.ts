export function isValidNationalId(nationalId: string) {
  if (!/^\d{10}$/.test(nationalId)) return false;

  const check = +nationalId[9];
  const sum = nationalId
    .split("")
    .slice(0, 9)
    .reduce((total, digit, index) => total + +digit * (10 - index), 0);

  const remainder = sum % 11;

  return (
    (remainder < 2 && check === remainder) ||
    (remainder >= 2 && check === 11 - remainder)
  );
}

export function isValidIranianMobile(phoneNumber: string) {
  // Remove any spaces or dashes just in case
  const cleaned = phoneNumber.replace(/\D/g, "");

  // Must be 10 or 11 digits, and either start with "09" or be without "0" (like "912...")
  if (/^09\d{9}$/.test(cleaned)) return true; // 11 digits, starts with 09
  if (/^9\d{9}$/.test(cleaned)) return true; // 10 digits, starts with 9 (no 0)

  return false;
}
