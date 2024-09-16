export const prerender = false;

import type { APIRoute } from "astro";
import { sendEmail } from "../lib/email";

export const POST: APIRoute = async ({ request, redirect }) => {
  // Get the form data submitted by the user on the home page
  const formData = await request.formData();
  const to = "ymusidi@seungit.com" as string;

  const name = formData.get("name") as string | null;
  const email = formData.get("email") as string | null;
  const phone = formData.get("phone") as string | null;
  const subject = formData.get("option") as string;
  const message = formData.get("message") as string | null;

  // Throw an error if we're missing any of the needed fields.
  if (!name || !email || !message) {
    throw new Error("Missing required fields");
  }

  // Try to send the email using a `sendEmail` function we'll create next. Throw
  // an error if it fails.
  try {
    const html = `<div><p>Form Submission from: ${name} <br> email: ${email} <br> phone: ${phone} <br> opsi: ${subject}</p> <p>${message}</p></div>`;
    await sendEmail({ to, subject, html });
  } catch (error) {
    throw new Error("Failed to send email: " + error);
  }

  // Redirect the user to a success page after the email is sent.
  return new Response(null, {
    status: 302,
    headers: {
      "Location": "/kontak",
      "Content-Type": "text/html"
    }
  });
};
