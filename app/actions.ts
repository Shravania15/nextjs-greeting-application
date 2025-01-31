"use server"

export async function greet(prevState: any, formData: FormData) {
  if (!formData) {
    return { message: "No form data received.", success: false }
  }

  const name = formData.get("name")
  if (typeof name !== "string" || name.trim().length === 0) {
    return { message: "Please enter a valid name.", success: false }
  }

  return { message: `Hello ${name.trim()}!`, success: true }
}

