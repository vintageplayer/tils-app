import Image from "next/image";
import { Inter } from "next/font/google";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [data, setData] = useState(null);
  const [recommendation, setRecommendation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const username = "hello";
  const messageId = 1;
  const date = "Published on May 5, 2024";
  const exampleData = `Neuralink's first human patient able to control mouse through thinking, Musk says
Feb 20 (Reuters) - The first human patient implanted with a brain-chip from Neuralink appears to have fully recovered and is able to control a computer mouse using their thoughts, the startup's founder Elon Musk said late on Monday.

"Progress is good, and the patient seems to have made a full recovery, with no ill effects that we are aware of. Patient is able to move a mouse around the screen by just thinking," Musk said in a Spaces event on social media platform X.

https://www.reuters.com/business/healthcare-pharmaceuticals/neuralinks-first-human-patient-able-control-mouse-through-thinking-musk-says-2024-02-20/`;

  const exampleRecommendations = [
    {
      title: "Cultural Homogenization: A Global Perspective",
      description: `Cultural homogenization is an aspect of cultural globalization and refers to the reduction in cultural diversity through the popularization and diffusion of a wide array of cultural symbols—not only physical objects but customs, ideas and values. David E. O'Connor defines it as "the process by which local cultures are transformed or absorbed by a dominant outside culture". Cultural homogenization has been called "perhaps the most widely discussed hallmark of global culture". In theory, homogenization could work in the breakdown of cultural barriers and the global adoption of a single culture.

    thanks wikipedia. i imagine this can happen in multiple levels, including one starting from our little social friend groups`,
    },
    {
      title: "Another Recommendation Example",
      description: "This is another recommendation example.",
    },
    {
      title: "Yet Another Recommendation Example",
      description: "This is yet another recommendation example.",
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://lichess.org/api/${username}/${messageId}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        console.log("get data", jsonData);
        setData(jsonData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="grid md:grid-cols-[2fr_1fr] gap-8 px-4 md:px-6 py-8 md:py-12 max-w-6xl mx-auto">
        <article className="prose prose-gray dark:prose-invert">
          <div className="space-y-4">
            <img
              alt="Featured Image"
              className="aspect-[2/1] rounded-lg object-cover"
              height="400"
              src="/neurolink.jpeg"
              width="800"
            />
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                Neurolink Note
              </h1>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <img
                    alt="Author Avatar"
                    className="rounded-full"
                    height={32}
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "32/32",
                      objectFit: "cover",
                    }}
                    width={32}
                  />
                  <span className="text-sm font-medium">Adytia India</span>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {date}
                </span>
              </div>
            </div>
            <p>{exampleData}</p>
          </div>
        </article>
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Recommended Notes</h2>
          <div className="grid gap-4">
            {exampleRecommendations.map((recommendation, index) => (
              <Link key={index} href="#" passHref>
                <div className="bg-white rounded-lg shadow-lg p-4 cursor-pointer">
                  <div className="grid grid-cols-[100px_1fr] gap-4 items-center">
                    <img
                      alt="Thumbnail"
                      className="rounded-lg object-cover"
                      height="100"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "100/100",
                        objectFit: "cover",
                      }}
                      width="100"
                    />
                    <div className="space-y-1">
                      <h3 className="text-lg font-medium">
                        {recommendation.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {recommendation.description}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
