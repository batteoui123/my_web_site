"use client"

import { useTranslation } from "@/hooks/use-translation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const { t } = useTranslation()
  const formInitialDetails = {
    name: "",
    email: "",
    message: "",
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState({})

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Form Validation
    if (!formDetails.name || !formDetails.email || !formDetails.message) {
      setStatus({ success: false, message: "All fields are required!" })
      setTimeout(() => {
        setStatus({ success: null, message: "" })
      }, 8000)
      return
    }

    // Email Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formDetails.email)) {
      setStatus({ success: false, message: "Please enter a valid email address." })
      setTimeout(() => {
        setStatus({ success: null, message: "" })
      }, 8000)
      return
    }

    setIsSubmitting(true)
    setStatus({}) // Clear previous status

    try {
      let response = await fetch("https://portfolio-api-batteoui.vercel.app/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      let result = await response.json()

      setFormDetails(formInitialDetails)
      setIsSubmitting(false)

      if (result.status === 'Message Sent') {
        setStatus({ success: true, message: "Message sent successfully" })
      } else {
        setStatus({ success: false, message: "Something went wrong, please try again later." })
      }
    } catch (error) {
      setIsSubmitting(false)
      setStatus({ success: false, message: "Something went wrong, please try again later." })
    }

    setTimeout(() => {
      setStatus({ success: null, message: "" })
    }, 4000)
  }

  return (
    <section id="contact" className="py-16 md:py-28">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        <span className="text-foreground">
          <span className="font-black text-[0.55em] align-middle mr-[0.15em] bg-clip-text text-transparent bg-gradient-to-b from-[#7160ED] to-[#6366F1]">{"<"}</span>
          {t("sections.contact")}
          <span className="font-black text-[0.55em] align-middle ml-[0.15em] bg-clip-text text-transparent bg-gradient-to-b from-[#7160ED] to-[#6366F1]">{"/>"}</span>
        </span>
      </h2>

      <div className="bg-white/50 dark:bg-black/20 border border-black/5 dark:border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-md shadow-xl dark:shadow-2xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="md:col-span-1 space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-[#7160ED] dark:text-[#7160ED] mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground">{t("contact.email")}</p>
                <a href="mailto:oussama.batteoui.dev@gmail.com" className="text-[#7160ED] dark:text-[#7160ED] hover:text-[#6366F1] dark:hover:text-[#9F90E9]">
                  oussama.batteoui.dev@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-[#7160ED] dark:text-[#7160ED] mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground">{t("contact.phone")}</p>
                <a href="tel:+212656465374" className="text-[#7160ED] dark:text-[#7160ED] hover:text-[#6366F1] dark:hover:text-[#9F90E9]">
                  +212 6 56 46 53 74
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-[#7160ED] dark:text-[#7160ED] mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm text-muted-foreground">{t("contact.location")}</p>
                <p className="text-[#7160ED] dark:text-[#7160ED]">Casablanca, Morocco</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="md:col-span-2 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                placeholder={t("contact.form.name")}
                value={formDetails.name}
                onChange={(e) => onFormUpdate("name", e.target.value)}
                className="bg-black/5 dark:bg-black/20 border-black/10 dark:border-white/10 focus:border-[#7160ED] dark:focus:border-[#7160ED] focus-visible:ring-[#7160ED]/50 focus:shadow-[0_0_20px_rgba(99,102,241,0.35)] transition-shadow duration-300 placeholder:text-muted-foreground/50"
              />
              <Input
                type="email"
                placeholder={t("contact.form.email")}
                value={formDetails.email}
                onChange={(e) => onFormUpdate("email", e.target.value)}
                className="bg-black/5 dark:bg-black/20 border-black/10 dark:border-white/10 focus:border-[#7160ED] dark:focus:border-[#7160ED] focus-visible:ring-[#7160ED]/50 focus:shadow-[0_0_20px_rgba(99,102,241,0.35)] transition-shadow duration-300 placeholder:text-muted-foreground/50"
              />
            </div>

            <Textarea
              placeholder={t("contact.form.message")}
              rows={5}
              value={formDetails.message}
              onChange={(e) => onFormUpdate("message", e.target.value)}
              className="bg-black/5 dark:bg-black/20 border-black/10 dark:border-white/10 focus:border-[#7160ED] dark:focus:border-[#7160ED] focus-visible:ring-[#7160ED]/50 focus:shadow-[0_0_20px_rgba(99,102,241,0.35)] transition-shadow duration-300 placeholder:text-muted-foreground/50"
            />

            <div className="flex items-center gap-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-[#6366F1] text-white hover:bg-[#7160ED] rounded-lg font-medium"
              >
                {isSubmitting ? t("contact.form.sending") : t("contact.form.send")}
              </Button>

              {status.message && (
                <p className={`text-sm ${status.success === false ? "text-red-500" : "text-green-500"}`}>
                  {status.message}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
