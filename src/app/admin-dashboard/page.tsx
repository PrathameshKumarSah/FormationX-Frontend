import type { Metadata } from "next";

/**
 * SEO Metadata for this page
 */
export const metadata: Metadata = {
  title: "Formation X – Learn, Build & Grow",
  description:
    "Formation X is a modern learning platform for developers, founders, and creators.",
  keywords: ["Formation X", "Next.js", "Learning Platform", "Developers"],
  openGraph: {
    title: "Formation X",
    description: "Learn, Build & Grow with Formation X",
};

/**
 * Home Page
 */
export default function Page() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="px-6 py-20 text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <h1 className="text-4xl md:text-6xl font-bold">
          Build Your Future with Formation X
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          Learn industry-ready skills, launch real products, and grow your career.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="px-6 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-100">
            Get Started
          </button>
          <button className="px-6 py-3 border border-white rounded-lg hover:bg-white/10">
            Learn More
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-16 max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="p-6 border rounded-xl">
          <h3 className="text-xl font-semibold">Real Projects</h3>
          <p className="mt-2 text-gray-600">
            Work on real-world projects instead of boring tutorials.
          </p>
        </div>

        <div className="p-6 border rounded-xl">
          <h3 className="text-xl font-semibold">Mentor Support</h3>
          <p className="mt-2 text-gray-600">
            Get guidance from industry experts.
          </p>
        </div>

        <div className="p-6 border rounded-xl">
          <h3 className="text-xl font-semibold">Career Ready</h3>
          <p className="mt-2 text-gray-600">
            Build a portfolio that companies actually want.
          </p>
        </div>
      </section>
    </main>
  );
}
