"use client";

import { useState } from "react";
import { useReveal } from "./use-reveal";

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

export function ContactSection() {
  const { ref, isVisible } = useReveal({ threshold: 0.2 });
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    service: "buy",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // TODO: Replace with actual API endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "buy",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 md:py-32 bg-curtain-dark text-white"
    >
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
            Get In Touch
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to find your dream property? Contact us today
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-white"
                  placeholder="Ahmed Khan"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-white"
                  placeholder="ahmed@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-white"
                  placeholder="+92 300 1234567"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-semibold mb-2"
                >
                  Service Interest *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-white"
                >
                  <option value="buy">Buying</option>
                  <option value="sell">Selling</option>
                  <option value="rent">Renting</option>
                  <option value="valuation">Valuation/Consultation</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-white resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              {submitStatus === "success" && (
                <div
                  className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-200"
                  role="alert"
                >
                  Thank you! We'll get back to you soon.
                </div>
              )}

              {submitStatus === "error" && (
                <div
                  className="p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-200"
                  role="alert"
                >
                  Something went wrong. Please try again.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div
            className={`space-y-8 transition-all duration-700 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div>
              <h3 className="font-display text-2xl mb-6">Quick Contact</h3>

              <div className="space-y-4">
                <a
                  href="tel:+923001234567"
                  className="flex items-center p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors group"
                >
                  <span className="text-3xl mr-4" aria-hidden="true">
                    📞
                  </span>
                  <div>
                    <p className="text-sm text-gray-400">Call Us</p>
                    <p className="text-lg font-semibold group-hover:text-accent transition-colors">
                      +92 300 1234567
                    </p>
                  </div>
                </a>

                <a
                  href="https://wa.me/923001234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors group"
                >
                  <span className="text-3xl mr-4" aria-hidden="true">
                    💬
                  </span>
                  <div>
                    <p className="text-sm text-gray-400">WhatsApp</p>
                    <p className="text-lg font-semibold group-hover:text-accent transition-colors">
                      Message on WhatsApp
                    </p>
                  </div>
                </a>

                <div className="flex items-center p-4 bg-slate-800 rounded-lg">
                  <span className="text-3xl mr-4" aria-hidden="true">
                    📍
                  </span>
                  <div>
                    <p className="text-sm text-gray-400">Office</p>
                    <p className="text-lg font-semibold">
                      Blue Area, Islamabad, Pakistan
                    </p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-slate-800 rounded-lg">
                  <span className="text-3xl mr-4" aria-hidden="true">
                    ✉️
                  </span>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-lg font-semibold">
                      info@zameenvista.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 rounded-lg p-6">
              <h4 className="font-semibold mb-3">Business Hours</h4>
              <div className="space-y-2 text-gray-300">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
