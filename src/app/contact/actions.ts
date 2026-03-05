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

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: process.env.RESEND_FROM_ADDRESS!,
    to: process.env.RESEND_TO_ADDRESS!,
    subject: `Contact Form: ${requestTypes.join(", ")}`,
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
}
