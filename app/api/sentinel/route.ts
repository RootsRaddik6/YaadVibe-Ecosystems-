import type { NextRequest } from 'next/server'
import { analyzeSentinel } from '@/services/sentinel'

export async function POST(req: NextRequest) {
  const { message } = await req.json()
  const response = await analyzeSentinel(message)
  return Response.json(response)
}
