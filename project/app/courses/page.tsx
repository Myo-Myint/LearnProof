import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Clock, BookOpen, ArrowRight, Search, Users, Filter, ChevronDown, Sparkles, Layers, Tag } from 'lucide-react'
import Header from "@/components/header"
import Footer from "@/components/footer"

// Import the getCourses function and Course interface
import { getCourses, type Course } from "@/lib/api"

export default async function CoursesPage() {
  // Fetch courses from the Microsoft Learn API
  const courses = await getCourses()

  // Extract unique roles and products for filtering
  const allRoles = Array.from(new Set(courses.flatMap(course => course.roles || [])))
  const allProducts = Array.from(new Set(courses.flatMap(course => course.products || [])))
  
  // Get all levels
  const allLevels = ["Beginner", "Intermediate", "Advanced"]

  return (
    <div className="min-h-screen bg-gray-950">
      <Header />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 md:py-24">
          <div className="absolute inset-0 z-0 opacity-30">
            <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-purple-700 blur-[150px]" />
            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-700 blur-[150px]" />
          </div>

          <div className="container relative z-10 mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">

              <div className="mx-auto max-w-2xl">
                <form action="/courses/search" className="relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-500" />
                  <Input
                    type="text"
                    name="q"
                    placeholder="Search for Microsoft Learn modules..."
                    className="border-gray-700 bg-gray-900/70 pl-10 py-6 text-white placeholder:text-gray-500 backdrop-blur"
                  />
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 border-y border-gray-800/50 bg-gray-900/30 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-purple-400" />
                <h2 className="text-lg font-medium text-white">Filters</h2>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="relative">
                  <select
                    className="appearance-none rounded-md border border-gray-700 bg-gray-800 px-4 py-2 pr-8 text-white"
                    name="role"
                    id="role-filter"
                    defaultValue=""
                  >
                    <option value="">All Roles</option>
                    {allRoles.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-gray-500 pointer-events-none" />
                </div>

                <div className="relative">
                  <select
                    className="appearance-none rounded-md border border-gray-700 bg-gray-800 px-4 py-2 pr-8 text-white"
                    name="product"
                    id="product-filter"
                    defaultValue=""
                  >
                    <option value="">All Products</option>
                    {allProducts.map((product) => (
                      <option key={product} value={product}>
                        {product}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-gray-500 pointer-events-none" />
                </div>

                <div className="relative">
                  <select
                    className="appearance-none rounded-md border border-gray-700 bg-gray-800 px-4 py-2 pr-8 text-white"
                    name="level"
                    id="level-filter"
                    defaultValue=""
                  >
                    <option value="">All Levels</option>
                    {allLevels.map((level) => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-gray-500 pointer-events-none" />
                </div>

                <Button
                  type="submit"
                  form="filter-form"
                  variant="outline"
                  className="border-purple-700 bg-purple-900/20 text-purple-400 hover:bg-purple-900/30"
                >
                  Apply Filters
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {courses.length === 0 ? (
              <div className="text-center py-20">
                <BookOpen className="mx-auto h-16 w-16 text-gray-700 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">No courses found</h3>
                <p className="text-gray-400">Try adjusting your filters or search query</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.slice(0, 12).map((course) => (
                  <Link href={`/courses/${course.id}`} key={course.id} className="block h-full">
                    <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 bg-gray-900/40 border-gray-800 hover:border-purple-500/50 backdrop-blur-sm">
                      <div className="h-48 bg-gradient-to-r from-purple-900 to-blue-900 relative overflow-hidden">
                        {course.imageUrl ? (
                          <Image
                            src={course.imageUrl || "/placeholder.svg"}
                            alt={course.title}
                            fill
                            className="object-cover opacity-80"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <BookOpen className="h-16 w-16 text-white/20" />
                          </div>
                        )}
                        {course.products && course.products.length > 0 && (
                          <div className="absolute top-4 right-4">
                            <Badge className="bg-black/50 text-white backdrop-blur-sm">
                              {course.products[0]}
                            </Badge>
                          </div>
                        )}
                      </div>
                      <CardHeader className="p-6">
                        <CardTitle className="text-white line-clamp-2 text-xl">{course.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-6 pt-0">
                        <p className="text-gray-300 text-sm line-clamp-3 mb-6">{course.summary}</p>
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
                          {course.roles && course.roles.slice(0, 1).map((role, i) => (
                            <Badge key={i} variant="outline" className="bg-gray-800/50 text-gray-300 border-gray-700">
                              {role}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center text-gray-400">
                            <Tag className="h-4 w-4 mr-1" />
                            {course.tags.length} tags
                          </div>
                          <div className="flex items-center text-gray-400">
                            <Layers className="h-4 w-4 mr-1" />
                            {course.units.length} units
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="p-6 border-t border-gray-800 flex justify-between">
                        <div className="flex items-center text-gray-300 text-sm">
                          <Clock className="h-4 w-4 mr-1" />
                          {course.duration} min
                        </div>
                        <div className="text-purple-400 text-sm flex items-center group">
                          View Course{" "}
                          <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                        </div>
                      </CardFooter>
                    </Card>
                  </Link>
                ))}
              </div>
            )}

            {courses.length > 12 && (
              <div className="mt-12 text-center">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  Load More Courses
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Microsoft Products Section */}
        <section className="py-16 bg-gray-900/30">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-white">Microsoft Technologies</h2>
              <p className="mx-auto max-w-2xl text-gray-300">
                Explore Microsoft's powerful products and services with our blockchain-verified learning paths
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {allProducts.slice(0, 8).map((product) => (
                <Button
                  key={product}
                  variant="outline"
                  className="h-full min-h-24 flex flex-col items-center justify-center space-y-2 border-gray-800 bg-gray-900/50 hover:bg-gray-800 hover:border-purple-500/50 backdrop-blur-sm p-6"
                >
                  <div className="h-10 w-10 rounded-full bg-purple-900/30 flex items-center justify-center text-purple-400">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <span className="text-white text-center">{product}</span>
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-r from-purple-900/40 to-blue-900/40 p-8 text-center backdrop-blur md:p-12">
              <BookOpen className="mx-auto mb-6 h-16 w-16 text-purple-400" />
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Earn Blockchain-Verified Certificates</h2>
              <p className="mb-8 mx-auto max-w-2xl text-xl text-gray-300">
                Complete Microsoft Learn modules and earn certificates stored securely on the Solana blockchain.
              </p>
              <Link href="/get-started">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-6 text-lg hover:from-purple-700 hover:to-blue-700"
                >
                  Get Started Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}

