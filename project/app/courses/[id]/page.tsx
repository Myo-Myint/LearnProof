import { getCourseById } from "@/lib/api"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, ExternalLink, BookOpen, Award } from "lucide-react"
import Link from "next/link"
import QuizSection from "./quiz-section"

export default async function CourseDetailPage({ params }: { params: { id: string } }) {
  const course = await getCourseById(params.id)

  if (!course) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-purple-950">

      <main className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-white mb-4">{course.title}</h1>

              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="bg-purple-950/50 text-purple-300 border-purple-700">
                  {course.level}
                </Badge>
                <Badge variant="outline" className="bg-cyan-950/50 text-cyan-300 border-cyan-700 flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  {course.duration} min
                </Badge>
                {course.tags.slice(0, 3).map((tag, i) => (
                  <Badge key={i} variant="outline" className="bg-purple-950/50 text-purple-300 border-purple-700">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="bg-black/40 border border-purple-900/50 rounded-lg p-6 mb-6">
                <h2 className="text-xl font-semibold text-white mb-3">Course Overview</h2>
                <p className="text-purple-300 mb-4">{course.summary}</p>

                {course.url && (
                  <Link href={course.url} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-purple-700 text-white hover:bg-purple-900/30">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Open on Microsoft Learn
                    </Button>
                  </Link>
                )}
              </div>

              <div className="bg-black/40 border border-purple-900/50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-white mb-4">Course Content</h2>

                <div className="space-y-3">
                  {course.units.map((unit) => (
                    <Link
                      key={unit.id}
                      href={`/courses/${course.id}/units/${unit.id}`}
                      className="flex items-center p-3 rounded-md bg-purple-950/30 border border-purple-900/30 hover:bg-purple-900/30 transition-colors"
                    >
                      <div className="h-8 w-8 rounded-full bg-purple-900/50 flex items-center justify-center mr-3">
                        <span className="text-white text-sm">{unit.order}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-white font-medium">{unit.title}</h3>
                        <p className="text-purple-300 text-sm">
                          {unit.title.toLowerCase().includes("introduction")
                            ? "Introduction to key concepts"
                            : unit.title.toLowerCase().includes("knowledge check")
                              ? "Test your knowledge"
                              : unit.title.toLowerCase().includes("summary")
                                ? "Review what you've learned"
                                : "Learn about key concepts and principles"}
                        </p>
                      </div>
                      <Badge variant="outline" className="bg-cyan-950/50 text-cyan-300 border-cyan-700">
                        {Math.floor(course.duration / course.units.length)} min
                      </Badge>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <Card className="bg-black/40 border-purple-900/50 sticky top-20">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="h-24 w-24 mx-auto bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full flex items-center justify-center mb-3">
                    <BookOpen className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Complete This Course</h3>
                  <p className="text-purple-300 text-sm">Take the quiz to earn your proof of learning</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 rounded-md bg-purple-950/30 border border-purple-900/30">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-purple-300 mr-2" />
                      <span className="text-purple-300">Duration</span>
                    </div>
                    <span className="text-white">{course.duration} minutes</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-md bg-purple-950/30 border border-purple-900/30">
                    <div className="flex items-center">
                      <Award className="h-4 w-4 text-purple-300 mr-2" />
                      <span className="text-purple-300">XP Reward</span>
                    </div>
                    <span className="text-white">+50 XP</span>
                  </div>
                </div>

                <QuizSection courseId={course.id} />
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
