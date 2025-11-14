// app/api/contact/route.js
import { NextResponse } from "next/server";

const RECAPTCHA_SECRET =
  process.env.RECAPTCHA_SECRET_KEY ||
  "6Lc8UQosAAAAAMJc72Ulcf558KqlqT73zOr-TmGt";

export async function POST(req) {
  try {
    const body = await req.json();

    // Accept multiple possible token field names from client
    const token =
      body?.token ||
      body?.recaptchaToken ||
      body?.["g-recaptcha-response"] ||
      body?.recaptcha ||
      "";

    if (!token) {
      console.error("No token provided. Body keys:", Object.keys(body));
      return NextResponse.json(
        { success: false, message: "No token provided" },
        { status: 400 }
      );
    }

    // Verify the token with Google
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify`;

    const params = new URLSearchParams();
    params.append("secret", RECAPTCHA_SECRET);
    params.append("response", token);

    const response = await fetch(verifyUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    });

    const data = await response.json();

    if (data.success) {
      return NextResponse.json({
        success: true,
        message: "reCAPTCHA verified successfully",
      });
    } else {
      return NextResponse.json(
        {
          success: false,
          message: "reCAPTCHA verification failed",
          errors: data["error-codes"] || data,
        },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
