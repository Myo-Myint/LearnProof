import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, ExternalLink, BookOpen } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

import { getCourseUnitById } from "@/lib/api"

export default async function CourseUnitPage({ params }: { params: { id: string; unitId: string } }) {
  const result = await getCourseUnitById(params.id, params.unitId)

  if (!result) {
    notFound()
  }

  const { course, unit } = result

  // Find the previous and next units
  const currentIndex = course.units.findIndex((u) => u.id === unit.id)
  const prevUnit = currentIndex > 0 ? course.units[currentIndex - 1] : null
  const nextUnit = currentIndex < course.units.length - 1 ? course.units[currentIndex + 1] : null

  return (
    <div className="min-h-screen bg-gray-950">
      <Header />

      <main className="pt-24 pb-16">
        {/* Unit Navigation */}
        <section className="py-4 border-b border-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <Link href={`/courses/${course.id}`}>
                <Button variant="ghost" className="text-gray-300 hover:text-white">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Course
                </Button>
              </Link>
              <div className="text-gray-400 text-sm">
                Unit {unit.order} of {course.units.length}
              </div>
              {unit.url && (
                <Link href={unit.url} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                    View on Microsoft Learn
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </section>

        {/* Unit Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h1 className="text-3xl font-bold text-white mb-8">{unit.title}</h1>

              <Card className="bg-gray-900/40 border-gray-800 mb-8">
                <CardContent className="p-8">
                  <div
                    className="prose prose-invert max-w-none prose-headings:text-white prose-a:text-purple-400"
                    dangerouslySetInnerHTML={{ __html: unit.content }}
                  />
                </CardContent>
              </Card>

              {/* Unit Navigation */}
              <div className="flex justify-between mt-8">
                {prevUnit ? (
                  <Link href={`/courses/${course.id}/units/${prevUnit.id}`}>
                    <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Previous: {prevUnit.title}
                    </Button>
                  </Link>
                ) : (
                  <div></div>
                )}

                {nextUnit ? (
                  <Link href={`/courses/${course.id}/units/${nextUnit.id}`}>
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                      Next: {nextUnit.title}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                ) : (
                  <Link href={`/courses/${course.id}/complete`}>
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                      Complete Course
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Related Courses */}
        <section className="py-16 bg-gray-900/30">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-r from-purple-900/40 to-blue-900/40 p-8 text-center backdrop-blur md:p-12">
              <BookOpen className="mx-auto mb-6 h-16 w-16 text-purple-400" />
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Explore More Courses</h2>
              <p className="mb-8 mx-auto max-w-2xl text-xl text-gray-300">
                Continue your learning journey with more Microsoft Learn modules and earn blockchain-verified
                certificates.
              </p>
              <Link href="/courses">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-6 text-lg hover:from-purple-700 hover:to-blue-700"
                >
                  Browse All Courses
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
