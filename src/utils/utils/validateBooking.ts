export function validateBookingPayload(payload: any) {
  if (!payload || !payload.userId) {
    return { ok: false, error: "Missing userId" };
  }
  // add more validations as required
  return { ok: true };
}