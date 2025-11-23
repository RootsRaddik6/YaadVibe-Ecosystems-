export function validateBookingPayload(payload: any) {
  if (!payload || !payload.userId) return { ok:false, error: "Missing userId" };
  return { ok:true };
}
