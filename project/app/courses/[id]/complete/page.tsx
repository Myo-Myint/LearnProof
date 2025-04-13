import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, CheckCircle, Download, Share2 } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

import { getCourseById } from "@/lib/api"

export default async function CourseCompletePage({ params }: { params: { id: string } }) {
  const course = await getCourseById(params.id)

  if (!course) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-950">
      <Header />

      <main className="pt-24 pb-16">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex h-24 w-24 items-center justify-center rounded-full bg-green-900/30 mb-8">
                <CheckCircle className="h-12 w-12 text-green-500" />
              </div>

              <h1 className="text-4xl font-bold text-white mb-4">Course Completed!</h1>
              <p className="text-xl text-gray-300 mb-8">
                Congratulations on completing {course.title}. Your blockchain certificate is being generated.
              </p>

              <Card className="bg-transparent mb-8">
                <CardContent className="p-8">
                  <div className="border-4 border-dashed border-gray-700 p-8 rounded-lg">
                    <h2 className="text-2xl font-bold text-white mb-2">Certificate of Completion</h2>
                    <p className="text-gray-300 mb-4">This certifies that you have successfully completed</p>
                    <h3 className="text-xl font-bold text-purple-400 mb-4">{course.title}</h3>
                    <p className="text-gray-300 mb-6">A Microsoft Learn module verified on the Solana blockchain</p>
                    <div className="flex justify-center mb-4">
                      <div className="h-32 w-32 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
                        <span className="text-white font-mono text-xs">BLOCKCHAIN VERIFIED</span>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm">Certificate ID: SOL-MS-{course.id.substring(0, 8)}</p>
                  </div>
                </CardContent>
              </Card>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  <Download className="mr-2 h-4 w-4" />
                  Download Certificate
                </Button>
                <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share Achievement
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <Link href={`/courses/${course.id}`}>
                  <Button variant="ghost" className="text-gray-300 hover:text-white">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Course
                  </Button>
                </Link>
                <Link href="/courses">
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                    Explore More Courses
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
