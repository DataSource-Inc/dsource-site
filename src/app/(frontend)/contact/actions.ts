"use server";

import { Resend } from "resend";

export type ContactFormState = {
  success: boolean;
  message: string;
} | null;

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const agency = formData.get("agency") as string;
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const comments = formData.get("comments") as string;
  const requestTypes = formData.getAll("requestTypes") as string[];

  if (!agency || !name || !email || requestTypes.length === 0) {
    return {
      success: false,
      message: "Please fill out all required fields and select at least one request type.",
    };
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const date = new Date().toLocaleString("en-US", {
      timeZone: "America/New_York",
      month: "2-digit",
      day: "2-digit",
      year: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });

    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_ADDRESS!,
      to: process.env.RESEND_TO_ADDRESS!,
      subject: `Contact Form -- ${date} -- from ${name} at ${agency}`,
      replyTo: email,
      text: [
        `Request Types: ${requestTypes.join(", ")}`,
        `Agency/Bureau: ${agency}`,
        `Name & Title: ${name}`,
        `Email: ${email}`,
        `Comments: ${comments || "N/A"}`,
      ].join("\n"),
    });

    if (error) {
      console.error("Failed to send email:", error);
      return {
        success: false,
        message: "Something went wrong. Please try again later.",
      };
    }

    return {
      success: true,
      message: "Thank you! Your request has been submitted.",
    };
  } catch (err) {
    console.error("Contact form error:", err);
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
}
