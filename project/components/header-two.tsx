"use client"

import Link from "next/link"
import { useUser } from "@/lib/user-context"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button-two"
import { User } from "lucide-react"
import { IconBrain } from "@tabler/icons-react";

export function Header() {
  const { userProgress } = useUser()
  const progressPercentage = (userProgress.xp / userProgress.nextLevelXp) * 100

  return (
    <header className="flex items-center justify-center sticky top-0 z-50 w-full border-b border-purple-900/20 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
          <IconBrain className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block text-white">LearnProof</span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-white/70 transition-colors hover:text-white">
              Home
            </Link>
            <Link href="/courses" className="text-sm font-medium text-white transition-colors hover:text-white">
              Courses
            </Link>
            <Link href="/dashboard" className="text-sm font-medium text-white/70 transition-colors hover:text-white">
              Dashboard
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex flex-col items-end">
            <div className="flex items-center gap-2">
              <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center">
                <span className="text-xs font-bold text-white">{userProgress.level}</span>
              </div>
              <div>
                <div className="text-xs text-white/70">Level {userProgress.level}</div>
                <div className="flex items-center gap-1">
                  <Progress
                    value={progressPercentage}
                    className="h-2 w-24 bg-purple-950"
                    indicatorClassName="bg-gradient-to-r from-purple-500 to-cyan-500"
                  />
                  <span className="text-xs text-white/70">
                    {userProgress.xp}/{userProgress.nextLevelXp}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <Button variant="outline" size="icon" className="bg-dark border-purple-900 text-white">
            <User className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  )
}
