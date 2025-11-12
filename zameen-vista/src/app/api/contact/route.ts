import { NextRequest, NextResponse } from "next/server";

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // Basic validation
    if (!data.name || !data.email || !data.message || !data.service) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // TODO: Implement actual email sending or database storage
    // For now, just log to console
    console.log("Contact form submission:", data);

    // TODO: Send email via SendGrid, Resend, or other service
    // TODO: Store in database if needed
    // TODO: Track analytics event

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json(
      { message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
