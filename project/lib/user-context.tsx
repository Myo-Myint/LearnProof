"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface UserProgress {
  level: number
  completedCourses: string[]
  xp: number
  nextLevelXp: number
}

interface UserContextType {
  userProgress: UserProgress
  completeModule: (moduleId: string) => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({ children }: { children: ReactNode }) {
  const [userProgress, setUserProgress] = useState<UserProgress>({
    level: 3,
    completedCourses: ["module1", "module2", "module3"],
    xp: 156,
    nextLevelXp: 500,
  })

  const completeModule = (moduleId: string) => {
    setUserProgress((prev) => {
      if (prev.completedCourses.includes(moduleId)) return prev

      const newXp = prev.xp + 50
      const newLevel = Math.floor(newXp / 200) + 1

      return {
        ...prev,
        completedCourses: [...prev.completedCourses, moduleId],
        xp: newXp,
        level: newLevel,
      }
    })
  }

  return <UserContext.Provider value={{ userProgress, completeModule }}>{children}</UserContext.Provider>
}

export function useUser() {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider")
  }
  return context
}
