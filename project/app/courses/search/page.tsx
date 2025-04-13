import { redirect } from "next/navigation"
import { getCourses } from "@/lib/api"

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string; role?: string; product?: string; level?: string }
}) {
  const { q, role, product, level } = searchParams

  // If no search parameters, redirect to the main courses page
  if (!q && !role && !product && !level) {
    redirect("/courses")
  }

  // Fetch all courses
  const allCourses = await getCourses()

  // Filter courses based on search parameters
  const filteredCourses = allCourses.filter((course) => {
    // Filter by search query
    if (
      q &&
      !course.title.toLowerCase().includes(q.toLowerCase()) &&
      !course.summary.toLowerCase().includes(q.toLowerCase()) &&
      !course.tags.some((tag) => tag.toLowerCase().includes(q.toLowerCase()))
    ) {
      return false
    }

    // Filter by role
    if (role && !course.roles?.includes(role)) {
      return false
    }

    // Filter by product
    if (product && !course.products?.includes(product)) {
      return false
    }

    // Filter by level
    if (level && course.level !== level) {
      return false
    }

    return true
  })

  // Redirect to the courses page with the filtered results
  // In a real implementation, you would render the filtered results here
  // For now, we'll just redirect back to the courses page
  redirect("/courses")
}
