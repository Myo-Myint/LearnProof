// API service to fetch courses from Microsoft Learn
export interface Course {
  id: string
  title: string
  summary: string
  duration: number
  level: "Beginner" | "Intermediate" | "Advanced"
  tags: string[]
  roles?: string[]
  products?: string[]
  url?: string
  imageUrl?: string
}

export async function getCourses(): Promise<Course[]> {
  try {
    const response = await fetch("https://learn.microsoft.com/api/catalog/?locale=en-us&type=modules")
    const data = await response.json()

    // Transform the data to match our Course interface
    return data.modules.map((module: any) => ({
      id: module.uid,
      title: module.title,
      summary: module.summary || "No summary available",
      duration: module.duration_in_minutes || 0,
      level: module.level || "Beginner",
      tags: [...(module.roles || []), ...(module.products || [])],
      roles: module.roles || [],
      products: module.products || [],
      url: module.url,
      imageUrl: `/placeholder.svg?height=200&width=300&text=${encodeURIComponent(module.title)}`,
    }))
  } catch (error) {
    console.error("Error fetching courses:", error)
    return []
  }
}

export async function getCourseById(id: string): Promise<Course | null> {
  try {
    const courses = await getCourses()
    return courses.find((course) => course.id === id) || null
  } catch (error) {
    console.error("Error fetching course:", error)
    return null
  }
}
