import type { NextRequest } from 'next/server'
import { chatEqNative } from '@/services/eqnative'

export async function POST(req: NextRequest) {
  const { message } = await req.json()
  const response = await chatEqNative(message)
  return Response.json(response)
}
