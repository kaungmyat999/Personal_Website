import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, subject, message, toEmail } = body

    if (!firstName || !lastName || !email || !subject || !message || !toEmail) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured')
      return NextResponse.json(
        { 
          error: 'Email service not configured. Please set up RESEND_API_KEY in .env.local',
          requiresSetup: true
        },
        { status: 500 }
      )
    }

    const emailContent = `
New message from ${firstName} ${lastName}

Email: ${email}
Subject: ${subject}

Message:
${message}
    `.trim()

    const emailData = {
      to: toEmail,
      from: 'onboarding@resend.dev', // Use Resend's default sender for testing
      subject: `Portfolio Contact: ${subject}`,
      text: emailContent,
      reply_to: email
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('Resend API error:', errorData)
      return NextResponse.json(
        { 
          error: `Failed to send email: ${errorData.message || 'Unknown error'}`,
          details: errorData
        },
        { status: 500 }
      )
    }

    const result = await response.json()
    console.log('Email sent successfully:', result)
    
    return NextResponse.json(
      { message: 'Email sent successfully', id: result.id },
      { status: 200 }
    )
  } catch (error) {
    console.error('Email sending error:', error)
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}