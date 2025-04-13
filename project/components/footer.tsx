"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react"

export default function Footer() {
  const footerLinks = [
    {
      title: "Platform",
      links: [
        { name: "AI Roadmaps", href: "#" },
        { name: "Blockchain Certificates", href: "#" },
        { name: "Progress Tracking", href: "#" },
        { name: "For Educators", href: "#" },
        { name: "For Businesses", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Community", href: "#" },
        { name: "Tutorials", href: "#" },
        { name: "API", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Press", href: "#" },
        { name: "Contact", href: "#" },
        { name: "Partners", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Cookie Policy", href: "#" },
        { name: "GDPR", href: "#" },
      ],
    },
  ]

  const socialLinks = [
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
    { icon: <Github className="h-5 w-5" />, href: "#", label: "GitHub" },
  ]

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <footer className="bg-gray-950 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          <motion.div className="lg:col-span-1" variants={fadeInUp} transition={{ duration: 0.5 }}>
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                LearnProf
              </span>
            </Link>
            <p className="mt-4 text-gray-400">
              Revolutionizing education with AI-powered roadmaps and blockchain-verified certificates.
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-gray-400 transition-colors hover:bg-gray-800 hover:text-white"
                  aria-label={link.label}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </motion.div>

          {footerLinks.map((section, index) => (
            <motion.div key={index} variants={fadeInUp} transition={{ duration: 0.5 }}>
              <h3 className="mb-4 text-lg font-semibold text-white">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href} className="text-gray-400 transition-colors hover:text-white">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 border-t border-gray-800 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-gray-500">&copy; {new Date().getFullYear()} LearnChain. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}
