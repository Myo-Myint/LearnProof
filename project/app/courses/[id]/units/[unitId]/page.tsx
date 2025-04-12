import { getCourseUnitById } from "@/lib/api"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, BookOpen, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

export default async function UnitPage({ params }: { params: { id: string; unitId: string } }) {
  const data = await getCourseUnitById(params.id, params.unitId)

  if (!data) {
    notFound()
  }

  const { course, unit } = data
  const unitIndex = course.units.findIndex((u) => u.id === unit.id)
  const prevUnit = unitIndex > 0 ? course.units[unitIndex - 1] : null
  const nextUnit = unitIndex < course.units.length - 1 ? course.units[unitIndex + 1] : null

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-purple-950">

      <main className="container py-8">
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <Link href="/courses" className="text-purple-400 hover:text-purple-300">
              Courses
            </Link>
            <span className="text-purple-700">/</span>
            <Link href={`/courses/${course.id}`} className="text-purple-400 hover:text-purple-300">
              {course.title}
            </Link>
            <span className="text-purple-700">/</span>
            <span className="text-white">Unit {unit.order}</span>
          </div>
          <h1 className="text-3xl font-bold text-white">{unit.title}</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="bg-black/40 border border-purple-900/50 rounded-lg p-6 mb-6">
              <div className="prose mx-auto" dangerouslySetInnerHTML={{ __html: unit.content }} />
            </div>

            <div className="flex items-center justify-between mt-8 pt-4 border-t border-purple-900/30">
              <div>
                {prevUnit ? (
                  <Link
                    href={`/courses/${course.id}/units/${prevUnit.id}`}
                    className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    <span>Previous: {prevUnit.title}</span>
                  </Link>
                ) : (
                  <Link
                    href={`/courses/${course.id}`}
                    className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    <span>Back to Course Overview</span>
                  </Link>
                )}
              </div>

              <div>
                {nextUnit ? (
                  <Link
                    href={`/courses/${course.id}/units/${nextUnit.id}`}
                    className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <span>Next: {nextUnit.title}</span>
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                ) : (
                  <Link
                    href={`/courses/${course.id}`}
                    className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <span>Back to Course Overview</span>
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <Card className="bg-black/40 border-purple-900/50 sticky top-20">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="h-16 w-16 mx-auto bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center mb-3">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Unit {unit.order}</h3>
                  <p className="text-purple-300 text-sm">{unit.title.split(". ")[1] || unit.title}</p>
                </div>

                <div className="flex items-center justify-between p-3 rounded-md bg-purple-950/30 border border-purple-900/30 mb-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-purple-300 mr-2" />
                    <span className="text-purple-300">Duration</span>
                  </div>
                  <span className="text-white">{Math.floor(course.duration / course.units.length)} minutes</span>
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 mb-3">
                  Mark as Completed
                </Button>

                <Link href={`/courses/${course.id}`}>
                  <button className="w-full p-2 border border-purple-700 rounded-md text-purple-300 hover:bg-purple-900/30 hover:text-white transition-colors">
                    Back to Course
                  </button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
