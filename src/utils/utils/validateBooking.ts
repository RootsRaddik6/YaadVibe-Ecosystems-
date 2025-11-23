export function validateBooking(data: {
  parish?: string;
  town?: string;
  date?: string;
}) {
  if (!data.parish) return { valid: false, error: "Parish is required" };
  if (!data.town) return { valid: false, error: "Town is required" };
  if (!data.date) return { valid: false, error: "Date is required" };

  const dateObj = new Date(data.date);
  if (isNaN(dateObj.getTime())) {
    return { valid: false, error: "Invalid date format" };
  }

  return { valid: true };
}