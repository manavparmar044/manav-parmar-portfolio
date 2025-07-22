"use client"

import { useState } from "react"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        alert("Message sent successfully!")
        setFormData({ name: "", email: "", projectType: "", message: "" })
      } else {
        alert("Failed to send message.")
      }
    } catch (err) {
      console.error(err)
      alert("Something went wrong.")
    }
  }

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section id="contact" className="py-20 px-4 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">Contact</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Got an idea, freelance project, or collaboration? Let’s connect and build something great.
          </p>
        </div>

        {/* Form container */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 sm:p-12 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-white/80">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/40"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-white/80">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/40"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="projectType" className="block text-sm font-medium mb-2 text-white/80">
                Project Type
              </label>
              <Select onValueChange={(value) => handleChange("projectType", value)}>
                <SelectTrigger className="h-12 bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="Select project type" />
                </SelectTrigger>
                <SelectContent className="bg-zinc-900 border-white/20 text-white">
                  <SelectItem value="web-dev">Web Development</SelectItem>
                  <SelectItem value="frontend">Frontend UI</SelectItem>
                  <SelectItem value="backend">Backend API</SelectItem>
                  <SelectItem value="portfolio">Portfolio Website</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 text-white/80">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Tell me about your project, goals, or timeline..."
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                className="min-h-[120px] resize-none bg-white/10 border-white/20 text-white placeholder:text-white/40"
                required
              />
            </div>

            <div className="text-center pt-4">
              <Button
                type="submit"
                size="lg"
                className="bg-white text-black hover:bg-gray-200 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-10 border-t border-white/10 text-white/40">
          <p>© 2025 Manav Manish Parmar. Let’s build something meaningful.</p>
        </div>
      </div>
    </section>
  )
}
