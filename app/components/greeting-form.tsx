"use client"

import { useState } from "react"
import { useFormState, useFormStatus } from "react-dom"
import { greet } from "../actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </Button>
  )
}

export default function GreetingForm() {
  const [state, formAction] = useFormState(greet, { message: "", success: false })
  const [name, setName] = useState("")

  return (
    <Card className="w-full max-w-md mx-auto mb-8">
      <CardHeader>
        <CardTitle>Enter Your Name</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="space-y-4">
          <Input
            type="text"
            name="name"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <SubmitButton />
        </form>
        {state.message && (
          <p className={`mt-4 text-center ${state.success ? "text-green-600" : "text-red-600"}`}>{state.message}</p>
        )}
      </CardContent>
    </Card>
  )
}

