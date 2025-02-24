// send project likes to discord

import { NextResponse } from "next/server";

export async function POST(req: Request){
  const webhook:string = process.env.DISCORD_WEBHOOK!
  const {project} = await req.json();

  try {
    const res = await fetch(webhook, {
      method: 'POST',
      body: JSON.stringify({
        'content': `:heart: ${project}`
      }),
      headers: {
        'content-type': 'application/json'
      }
    })
    
    if(res.ok){
      return NextResponse.json({ message: 'Success' }, { status: 202 })
    }else{
      return NextResponse.json({ message: 'Error Occurred' }, { status: 400 })
    }
  } catch {
    return NextResponse.json({ message: 'Error Occurred' }, { status: 400 })
  }
}
