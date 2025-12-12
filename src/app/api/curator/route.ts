import type { NextRequest } from 'next/server'
import { chatCurator } from '@/services/curator'

export async function POST(req: NextRequest) {
  const { message } = await req.json()
  const response = await chatCurator(message)
  return Response.json(response)
}
