import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, ArrowRight, ExternalLink, BookOpen, CheckCircle } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

import { getCourseById } from "@/lib/api"

export default async function CoursePage({ params }: { params: { id: string } }) {
  const course = await getCourseById(params.id)

  if (!course) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-950">
      <Header />

      <main className="pt-24 pb-16">
        {/* Course Header */}
        <section className="relative py-16 bg-gradient-to-r from-purple-900/40 to-blue-900/40">
          <div className="absolute inset-0 z-0 opacity-30">
            <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-purple-700 blur-[150px]" />
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-700 blur-[150px]" />
          </div>

          <div className="container relative z-10 mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-2/3">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge
                    variant="outline"
                    className={`
                      ${
                        course.level === "Beginner"
                          ? "bg-green-950/30 text-green-400 border-green-700"
                          : course.level === "Intermediate"
                            ? "bg-blue-950/30 text-blue-400 border-blue-700"
                            : "bg-purple-950/30 text-purple-400 border-purple-700"
                      }
                    `}
                  >
                    {course.level}
                  </Badge>
                  {course.roles?.map((role, i) => (
                    <Badge key={i} variant="outline" className="bg-gray-800/50 text-gray-300 border-gray-700">
                      {role}
                    </Badge>
                  ))}
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">{course.title}</h1>
                <p className="text-xl text-gray-300 mb-6">{course.summary}</p>

                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center text-gray-300">
                    <Clock className="h-5 w-5 mr-2" />
                    {course.duration} minutes
                  </div>
                  {course.products && course.products.length > 0 && (
                    <div className="flex items-center text-gray-300">
                      <BookOpen className="h-5 w-5 mr-2" />
                      {course.products.join(", ")}
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                    Start Learning
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  {course.url && (
                    <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                      View on Microsoft Learn
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>

              <div className="md:w-1/3">
                <Card className="bg-gray-900/70 border-gray-800 overflow-hidden">
                  <div className="h-48 relative">
                    {course.imageUrl ? (
                      <Image
                        src={course.imageUrl || "/placeholder.svg"}
                        alt={course.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-purple-900 to-blue-900">
                        <BookOpen className="h-16 w-16 text-white/20" />
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Course Details</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">
                          <strong className="text-white">Level:</strong> {course.level}
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">
                          <strong className="text-white">Duration:</strong> {course.duration} minutes
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">
                          <strong className="text-white">Units:</strong> {course.units.length} learning units
                        </span>
                      </li>
                      {course.roles && course.roles.length > 0 && (
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">
                            <strong className="text-white">Roles:</strong> {course.roles.join(", ")}
                          </span>
                        </li>
                      )}
                      {course.products && course.products.length > 0 && (
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">
                            <strong className="text-white">Products:</strong> {course.products.join(", ")}
                          </span>
                        </li>
                      )}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Course Units */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-8">Course Units</h2>

            <div className="space-y-4">
              {course.units.map((unit, index) => (
                <Link href={`/courses/${course.id}/units/${unit.id}`} key={unit.id}>
                  <Card className="bg-gray-900/40 border-gray-800 hover:border-purple-500/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-purple-900/30 flex items-center justify-center text-purple-400 mr-4">
                            {unit.order}
                          </div>
                          <h3 className="text-lg font-medium text-white">{unit.title}</h3>
                        </div>
                        <ArrowRight className="h-5 w-5 text-purple-400" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-900/30">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-r from-purple-900/40 to-blue-900/40 p-8 text-center backdrop-blur md:p-12">
              <BookOpen className="mx-auto mb-6 h-16 w-16 text-purple-400" />
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Ready to Start Learning?</h2>
              <p className="mb-8 mx-auto max-w-2xl text-xl text-gray-300">
                Begin your journey with this Microsoft Learn module and earn a blockchain-verified certificate.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-6 text-lg hover:from-purple-700 hover:to-blue-700"
              >
                Start Learning Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
