"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const QUICK_VIDEO_SUGGESTIONS = [
  { title: "JavaScript Basics" },
  { title: "React in 10 Minutes" },
  { title: "Next.js Full Guide" },
];

function Hero() {
  return (
    <div className="flex items-center flex-col mt-20 background-white">
      <div>
        <h2 className="text-3xl font-bold text-center">
          Learn Smarter with{" "}
          <span className="text-blue-500">AI Video Courses!</span>
        </h2>

        <p className="text-center text-gray-500 mt-3 text-xl">
          Turn Any Topic into a Complete Course
        </p>
      </div>

      <div className="w-full max-w-md mt-6 space-y-4">
        {/* TEXTAREA */}
        <textarea
          className="w-full min-h-24 p-3 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type the theme of the course..."
        />

        {/* SELECT */}
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select theme" />
          </SelectTrigger>

          <SelectContent>
            <SelectGroup>
              <SelectItem value="Full-course">Full course</SelectItem>
              <SelectItem value="Quick-explain video">
                Quick explain video
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        {/* BUTTON */}
        <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
          Submit
        </button>
      </div>

      {/* SUGESTÕES */}
      <div className="flex gap-5 mt-5 max-w-3xl flex-wrap justify-center">
        {QUICK_VIDEO_SUGGESTIONS.map((suggestion, index) => (
          <h2 key={index} className="border rounded-r-2xl px-2 p-1 text-sm">
            {suggestion.title}
          </h2>
        ))}
      </div>
    </div>
  );
}

export default Hero;