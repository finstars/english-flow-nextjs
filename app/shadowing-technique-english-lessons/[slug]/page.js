import { redirect } from "next/navigation";

export default function Home({ params }) {
  const { slug } = params

  redirect(`/shadowing-technique-english-lessons/${slug}/1#lesson`)

  return null
}
