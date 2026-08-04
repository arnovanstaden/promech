import { NextResponse } from 'next/server'

export async function POST() {
  const hookUrl = process.env.SANITY_DEPLOY_HOOK_URL

  if (!hookUrl) {
    return NextResponse.json(
      { error: 'SANITY_DEPLOY_HOOK_URL is not configured' },
      { status: 500 }
    )
  }

  const res = await fetch(hookUrl, { method: 'POST' })

  if (!res.ok) {
    return NextResponse.json(
      { error: 'Vercel deploy hook request failed' },
      { status: 502 }
    )
  }

  return NextResponse.json({ ok: true })
}
