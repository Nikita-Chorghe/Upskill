export const courses = [
  // { _id: "1", name: "All Courses" },
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Taxes" },

  { _id: "5b21ca3eeb7f6fbccd471814", name: "Coding" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Cooking" }
];

export function getCourses() {
  return courses.filter(g => g);
}
