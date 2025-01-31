import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ExplanationSection() {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>How It Works</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="server-actions">
            <AccordionTrigger>Server Actions</AccordionTrigger>
            <AccordionContent>
              Server Actions process the input on the server-side. When the form is submitted, the 'greet' action is
              called, which takes the form data, extracts the name, and returns a greeting message. This happens without
              a full page reload, thanks to Next.js 15.1's enhanced Server Actions support.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="shadcn-ui">
            <AccordionTrigger>Shadcn UI Components</AccordionTrigger>
            <AccordionContent>
              This app uses several Shadcn UI components: Button, Input, Card, and Accordion. These components provide a
              consistent and attractive design while being fully customizable and accessible.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="nextjs-features">
            <AccordionTrigger>Key Next.js 15.1 Features</AccordionTrigger>
            <AccordionContent>
              This app leverages Next.js 15.1's improved Server Actions, which allow for more efficient server-side
              processing and seamless integration with client-side React components. It also uses the App Router for
              simplified routing and improved performance.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  )
}

