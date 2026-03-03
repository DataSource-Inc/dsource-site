"use server";

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

  // TODO: Send email here (Resend, Nodemailer, etc.)
  // Example with Resend:
  //
  // import { Resend } from "resend";
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: "noreply@yourdomain.com",
  //   to: "team@yourdomain.com",
  //   subject: `Contact Form: ${requestTypes.join(", ")}`,
  //   text: `
  //     Request Types: ${requestTypes.join(", ")}
  //     Agency/Bureau: ${agency}
  //     Name & Title: ${name}
  //     Email: ${email}
  //     Comments: ${comments || "N/A"}
  //   `,
  // });

  console.log("Contact form submission:", {
    requestTypes,
    agency,
    name,
    email,
    comments,
  });

  return {
    success: true,
    message: "Thank you! Your request has been submitted.",
  };
}
