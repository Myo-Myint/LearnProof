// API service to fetch courses from Microsoft Learn
export interface Course {
  id: string;
  title: string;
  summary: string;
  duration: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  tags: string[];
  roles?: string[];
  products?: string[];
  url?: string;
  imageUrl?: string;
}

export async function getCourses(): Promise<Course[]> {
  try {
    const response = await fetch(
      "https://learn.microsoft.com/api/catalog/?locale=en-us&type=modules",
    );
    const data = await response.json();

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
    }));
  } catch (error) {
    console.error("Error fetching courses:", error);
    return [];
  }
}

export async function getCourseById(id: string): Promise<Course | null> {
  try {
    const courses = await getCourses();
    return courses.find((course) => course.id === id) || null;
  } catch (error) {
    console.error("Error fetching course:", error);
    return null;
  }
}

export async function getCourseUnitById(
  courseId: string,
  unitId: string,
): Promise<{ course: Course; unit: CourseUnit } | null> {
  try {
    const course = await getCourseById(courseId)
    if (!course) return null

    const unit = course.units.find((u) => u.id === unitId)
    if (!unit) return null

    // In a real implementation, we would fetch the unit content from the API
    // For now, we'll generate placeholder content
    unit.content = `
      <h2>${unit.title}</h2>
      <p>This is the content for ${unit.title}. In a real implementation, this would be fetched from the Microsoft Learn API.</p>
      <p>The content would include all the HTML for the unit, including headings, paragraphs, lists, code blocks, etc.</p>
      <h3>Learning Objectives</h3>
      <ul>
        <li>Understand the key concepts of ${unit.title.split(". ")[1]}</li>
        <li>Learn how to implement solutions related to this topic</li>
        <li>Apply the knowledge in real-world scenarios</li>
      </ul>
    `

    return { course, unit }
  } catch (error) {
    console.error("Error fetching course unit:", error)
    return null
  }
}
