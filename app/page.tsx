import GreetingForm from "./components/greeting-form"
import ExplanationSection from "./components/explanation-section"

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Next.js Greeting App</h1>
      <GreetingForm />
      <ExplanationSection />
    </main>
  )
}

