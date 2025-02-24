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
      let response = await res.json()
      console.log("Yeai!",response)
    }else{
      console.log("Oops! Something is wrong.")
      return NextResponse.json({ message: 'Post Error' }, { status: 400 })
    }
  } catch (error) {
      console.log(error)
  }
  return NextResponse.json({ status: 202 })
}
