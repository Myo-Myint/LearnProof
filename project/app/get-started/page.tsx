"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Check, Wallet, Mail, Lock, User, ExternalLink } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import '@solana/wallet-adapter-react-ui/styles.css'
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"

export default function GetStartedPage() {
  const [isWalletConnecting, setIsWalletConnecting] = useState(false)
  const [isWalletConnected, setIsWalletConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState("")

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const simulateWalletConnection = () => {
    setIsWalletConnecting(true)
    // Simulate connection delay
    setTimeout(() => {
      setIsWalletConnected(true)
      setWalletAddress("8xH5f...3kPq")
      setIsWalletConnecting(false)
    }, 1500)
  }

  const disconnectWallet = () => {
    setIsWalletConnected(false)
    setWalletAddress("")
  }

  return (
    <div className="min-h-screen bg-gray-950">
      <Header />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="mx-auto max-w-4xl text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.7 }}
          >
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              Get Started with{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                LearnChain
              </span>
            </h1>
            <p className="mb-12 text-xl text-gray-300">
              Begin your journey into AI-powered learning with blockchain verification
            </p>
          </motion.div>

          <motion.div
            className="mx-auto max-w-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Tabs defaultValue="credentials" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-gray-900">
                <TabsTrigger value="credentials">Credentials</TabsTrigger>
                <TabsTrigger value="wallet">Blockchain Wallet</TabsTrigger>
              </TabsList>

              <TabsContent value="credentials">
                <Card className="border-gray-800 bg-gray-900/70 backdrop-blur">
                  <CardHeader>
                    <CardTitle className=" text-white">Sign In or Create Account</CardTitle>
                    <CardDescription className="text-gray-400">
                      Access your personalized AI learning roadmap
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                        <Input
                          type="text"
                          placeholder="Full Name"
                          className="border-gray-700 bg-gray-800 pl-10 text-white placeholder:text-gray-500"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                        <Input
                          type="email"
                          placeholder="Email"
                          className="border-gray-700 bg-gray-800 pl-10 text-white placeholder:text-gray-500"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-500" />
                        <Input
                          type="password"
                          placeholder="Password"
                          className="border-gray-700 bg-gray-800 pl-10 text-white placeholder:text-gray-500"
                        />
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="terms"
                        className="h-4 w-4 rounded border-gray-700 bg-gray-800 text-purple-600 focus:ring-purple-600"
                      />
                      <label htmlFor="terms" className="text-sm text-gray-300">
                        I agree to the{" "}
                        <Link href="#" className="text-purple-400 hover:text-purple-300">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="#" className="text-purple-400 hover:text-purple-300">
                          Privacy Policy
                        </Link>
                      </label>
                    </div>
                  </CardContent>
                  <CardFooter className="flex flex-col space-y-4">
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                      Create Account
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <div className="text-center text-sm text-gray-400">
                      Already have an account?{" "}
                      <Link href="#" className="text-purple-400 hover:text-purple-300">
                        Sign in
                      </Link>
                    </div>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="wallet">
                <Card className="border-gray-800 bg-gray-900/70 backdrop-blur">
                  <CardHeader>
                    <CardTitle className=" text-white">Connect Your Solana Wallet</CardTitle>
                    <CardDescription className="text-gray-400">
                      Secure your certificates on the blockchain
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="rounded-lg border border-gray-800 bg-gray-800/50 p-4">
                      <h3 className="mb-2 text-lg font-medium text-white">Why connect a wallet?</h3>
                      <ul className="space-y-2 text-gray-300">
                        <li className="flex items-start">
                          <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Store your certificates securely on Solana blockchain</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Track your learning progress with immutable records</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Share verifiable credentials with employers</span>
                        </li>
                      </ul>
                    </div>

                    <div className=" w-full flex gap-5 justify-center items-center">
                    <WalletMultiButton  />
                    
                    </div>
                  </CardContent>
                  <CardFooter>
                    <p className="text-xs text-gray-400">
                      Don't have a Solana wallet?{" "}
                      <Link
                        href="https://phantom.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-400 hover:text-purple-300"
                      >
                        Get Phantom Wallet
                      </Link>
                    </p>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="mt-8 text-center">
              <p className="text-gray-400">
                
                <Link href="/courses" className="text-purple-400 hover:text-purple-300">
                  Next
                </Link>

              </p>
            </div>
          </motion.div>
        </div>
      </main>

    </div>
  )
}
