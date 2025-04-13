"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  BadgeIcon as Certificate,
  Compass,
  GraduationCap,
} from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function HomePage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 h-screen">
          <div className="absolute inset-0 z-0 opacity-30">
            <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-purple-700 blur-[150px]" />
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-700 blur-[150px]" />
          </div>

          <div className="container relative z-10 mx-auto  h-full px-4 ">
            <motion.div
              className="h-[50%] w-full flex justify-center items-center mt-[5vh]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5, ease: "easeInOut" }}
            >
              <motion.div
                className="rounded-3xl h-30 w-30 bg-purple-950"
                initial={{ scale: 3 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2, delay: 1.2, ease: "easeInOut" }}
              ></motion.div>
            </motion.div>

            <div>
              <motion.div
                className=""
                initial={{ height: "50vh" }}
                animate={{ height: 0 }}
                transition={{ duration: 1.8, delay: 1, ease: "easeInOut" }}
              />

              <motion.div
                className="mx-auto max-w-4xl text-center"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.7, delay: 1.6 }}
              >
                <motion.h1
                  className="mb-6 text-4xl font-bold leading-tight md:text-7xl"
                  initial={{ opacity: 0, y: 20, scale: 1.5 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 1.6, duration: 0.7, ease: "easeInOut" }}
                >
                  Revolutionize Learning with
                  <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                    {" "}
                    AI & Blockchain
                  </span>
                </motion.h1>

                <motion.p
                  className="mb-8 text-xl text-gray-300"
                  initial={{ opacity: 0, y: 20, scale: 1.5 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.7, ease: "easeInOut" }}
                >
                  Custom learning roadmaps powered by AI with
                  blockchain-verified certificates on Solana. The future of
                  trusted, accredited education is here.
                </motion.p>

                <motion.div
                  className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4"
                  initial={{ opacity: 0, y: 20, scale: 1.5 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.7, ease: "easeInOut" }}
                >
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 px-10 py-6 text-lg hover:from-purple-700 hover:to-blue-700 rounded-full font-bold">
                    Get Started
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="mb-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                How It Works
              </h2>
              <p className="mx-auto max-w-2xl text-gray-400">
                Our platform simplifies the learning process while maintaining
                the highest standards of verification.
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-purple-600 to-blue-600 md:block hidden"></div>

              <motion.div
                className="space-y-16"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div
                  className="relative flex flex-col md:flex-row"
                  variants={fadeIn}
                  transition={{ duration: 0.7 }}
                >
                  <div className="md:w-1/2 md:pr-12 md:text-right">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 text-white">
                      1
                    </div>
                    <h3 className="mb-3 text-2xl font-bold">Assessment</h3>
                    <p className="text-gray-400">
                      Complete a comprehensive assessment to help our AI
                      understand your current skills and learning objectives.
                    </p>
                  </div>
                  <div className="hidden md:block md:w-12">
                    <div className="relative left-1/2 h-12 w-12 -translate-x-1/2 rounded-full border-4 border-gray-950 bg-purple-600"></div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 mt-4 md:mt-0"></div>
                </motion.div>

                <motion.div
                  className="relative flex flex-col md:flex-row"
                  variants={fadeIn}
                  transition={{ duration: 0.7 }}
                >
                  <div className="md:w-1/2 md:pr-12 md:text-right"></div>
                  <div className="hidden md:block md:w-12">
                    <div className="relative left-1/2 h-12 w-12 -translate-x-1/2 rounded-full border-4 border-gray-950 bg-indigo-500"></div>
                  </div>
                  <div className="md:w-1/2 md:pl-12">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500 text-white">
                      2
                    </div>
                    <h3 className="mb-3 text-2xl font-bold">Custom Roadmap</h3>
                    <p className="text-gray-400">
                      Receive a personalized learning path with curated content
                      tailored to your specific needs and goals.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="relative flex flex-col md:flex-row"
                  variants={fadeIn}
                  transition={{ duration: 0.7 }}
                >
                  <div className="md:w-1/2 md:pr-12 md:text-right">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
                      3
                    </div>
                    <h3 className="mb-3 text-2xl font-bold">
                      Learn & Progress
                    </h3>
                    <p className="text-gray-400">
                      Follow your roadmap with interactive content, practical
                      exercises, and real-time feedback from our AI.
                    </p>
                  </div>
                  <div className="hidden md:block md:w-12">
                    <div className="relative left-1/2 h-12 w-12 -translate-x-1/2 rounded-full border-4 border-gray-950 bg-blue-600"></div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 mt-4 md:mt-0"></div>
                </motion.div>

                <motion.div
                  className="relative flex flex-col md:flex-row"
                  variants={fadeIn}
                  transition={{ duration: 0.7 }}
                >
                  <div className="md:w-1/2 md:pr-12 md:text-right"></div>
                  <div className="hidden md:block md:w-12">
                    <div className="relative left-1/2 h-12 w-12 -translate-x-1/2 rounded-full border-4 border-gray-950 bg-blue-400"></div>
                  </div>
                  <div className="md:w-1/2 md:pl-12">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-400 text-white">
                      4
                    </div>
                    <h3 className="mb-3 text-2xl font-bold">
                      Blockchain Certification
                    </h3>
                    <p className="text-gray-400">
                      Earn verifiable certificates stored on the Solana
                      blockchain, providing immutable proof of your
                      achievements.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black">
          <motion.div
            className="container mx-auto px-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mx-auto max-w-3xl rounded-2xl bg-gradient-to-r from-purple-900/40 to-blue-900/40 p-8 backdrop-blur md:p-12">
              <GraduationCap className="mx-auto mb-6 h-16 w-16 text-purple-400" />
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                Ready to Transform Your Learning Experience?
              </h2>
              <p className="mb-8 text-xl text-gray-300">
                Join thousands of learners who have already discovered the power
                of AI-driven education with blockchain verification.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-6 text-lg hover:from-purple-700 hover:to-blue-700 rounded-full"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
