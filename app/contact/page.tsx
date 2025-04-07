import { redirect } from "next/navigation"

export default function ContactPage() {
  // Redirect to the contact section on the homepage
  redirect("/#contact")
}

