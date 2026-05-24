"use client";

import CourseList from "./_components/CourseList";
import Header from "./_components/Header";
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden">

      {/* BACKGROUND BLOBS */}
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[560px] w-[580px] bg-purple-400/20 blur-[120px] rounded-full" />

      <div className="pointer-events-none absolute top-20 left-1/3 h-[560px] w-[560px] bg-pink-400/20 blur-[120px] rounded-full" />

      <div className="pointer-events-none absolute bottom-[-208px] left-1/3 h-[560px] w-[560px] bg-blue-400/20 blur-[120px] rounded-full" />

      <div className="pointer-events-none absolute top-[200px] left-1/2 h-[586px] w-[586px] bg-sky-400/20 blur-[120px] rounded-full" />

      {/* CONTENT */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <CourseList />
      </div>

    </main>
  );
}