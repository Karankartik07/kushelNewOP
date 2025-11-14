// app/api/verify-recaptcha/route.ts
import { NextResponse } from 'next/server';

const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET_KEY || '6Lc8UQosAAAAAMJc72Ulcf558KqlqT73zOr-TmGt';

export async function POST(req) {
  try {
    const { token } = await req.json();
    
    if (!token) {
      return NextResponse.json(
        { success: false, message: 'No token provided' },
        { status: 400 }
      );
    }

    // Verify the token with Google
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify`;
    
    const response = await fetch(verifyUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${RECAPTCHA_SECRET}&response=${token}`,
    });

    const data = await response.json();

    if (data.success) {
      return NextResponse.json({
        success: true,
        message: 'reCAPTCHA verified successfully',
      });
    } else {
      return NextResponse.json(
        {
          success: false,
          message: 'reCAPTCHA verification failed',
          errors: data['error-codes'],
        },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}