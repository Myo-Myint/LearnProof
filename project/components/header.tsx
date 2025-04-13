"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name)
  }

  const navItems = [
    {
      name: "Platform",
      href: "#",
      hasDropdown: true,
      dropdownItems: [
        { name: "AI Roadmaps", href: "#" },
        { name: "Blockchain Certificates", href: "#" },
        { name: "Progress Tracking", href: "#" },
      ],
    },
    {
      name: "Courses",
      href: "#",
      hasDropdown: true,
      dropdownItems: [
        { name: "Technology", href: "#" },
        { name: "Business", href: "#" },
        { name: "Creative", href: "#" },
        { name: "Personal Development", href: "#" },
      ],
    },
    { name: "Pricing", href: "#", hasDropdown: false },
    { name: "About", href: "#", hasDropdown: false },
  ]

  return (
    <header className="fixed top-0 z-50 w-full bg-gray-950/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold"
            >
              <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                LearnChain
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex md:items-center md:space-x-8"
          >
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                <button
                  onClick={() => item.hasDropdown && toggleDropdown(item.name)}
                  className="flex items-center space-x-1 text-gray-300 transition-colors hover:text-white"
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
                </button>

                {item.hasDropdown && activeDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-48 rounded-md bg-gray-900 py-2 shadow-lg ring-1 ring-gray-800"
                  >
                    {item.dropdownItems?.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="block px-4 py-2 text-sm text-gray-300 transition-colors hover:bg-gray-800 hover:text-white"
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </motion.nav>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden items-center space-x-4 md:flex"
          >
            <Link href="/get-started">
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
            Get started
          </Button>
        </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-300 hover:text-white">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
          >
            <div className="container mx-auto space-y-1 px-4 pb-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => item.hasDropdown && toggleDropdown(item.name)}
                    className="flex w-full items-center justify-between py-2 text-gray-300 transition-colors hover:text-white"
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
                  </button>

                  {item.hasDropdown && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                      className="ml-4 space-y-1 border-l border-gray-800 pl-4"
                    >
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block py-2 text-sm text-gray-400 transition-colors hover:text-white"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" className="w-full justify-center">
                  Log in
                </Button>
                <Button className="w-full justify-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  Sign up
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
