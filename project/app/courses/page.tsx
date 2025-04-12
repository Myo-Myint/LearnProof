import { getCourses } from "@/lib/api"
import  Header from "@/components/header"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, BookOpen, ArrowRight } from "lucide-react"

export default async function CoursesPage() {
  const courses = await getCourses()

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-purple-950">

      <main className="container py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Discover Courses</h1>
          <p className="text-purple-300">Learn, prove your knowledge, and level up your skills</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.slice(0, 9).map((course) => (
            <Link href={`/courses/${course.id}`} key={course.id}>
              <Card className="h-full overflow-hidden transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/20 bg-black/40 border-purple-900/50 hover:border-purple-500/50">
                <div className="h-40 bg-gradient-to-r from-purple-900 to-cyan-900 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BookOpen className="h-16 w-16 text-white/20" />
                  </div>
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-white line-clamp-2">{course.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-purple-300 text-sm line-clamp-3 mb-4">{course.summary}</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-purple-950/50 text-purple-300 border-purple-700">
                      {course.level}
                    </Badge>
                    {course.tags.slice(0, 2).map((tag, i) => (
                      <Badge key={i} variant="outline" className="bg-cyan-950/50 text-cyan-300 border-cyan-700">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-4 border-t border-purple-900/30 flex justify-between">
                  <div className="flex items-center text-purple-300 text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    {course.duration} min
                  </div>
                  <div className="text-cyan-400 text-sm flex items-center">
                    View Course <ArrowRight className="h-4 w-4 ml-1" />
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
