/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { parseISO, format } from "date-fns";

// Function to extract the first image URL from HTML content
function extractFirstImageUrl(content: string): string | null {
  const match = content.match(/<img.*?src="(.*?)"/);
  return match ? match[1] : null;
}

// Function to sanitize HTML content
function sanitizeHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "");
}

async function getMediumArticles(username: string) {
  const response = await fetch(
    `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`,
    { next: { revalidate: 3600 } }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch articles");
  }
  const data = await response.json();
  return data.items;
}

export default async function Page({
  username = "getwalletx",
}: {
  username?: string;
}) {
  let articles;
  try {
    articles = await getMediumArticles(username);
  } catch (error) {
    console.log(error);
    return (
      <div className="text-center text-red-500">
        Failed to load articles. Please try again later.
      </div>
    );
  }

  if (!articles || articles.length === 0) {
    return <div className="text-center">No articles found.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:mt-14">
        {articles.map((article: any) => {
          const imageUrl =
            article.thumbnail ||
            extractFirstImageUrl(article.content) ||
            "/placeholder.svg?height=200&width=400";
          const pubDate = parseISO(article.pubDate);

          return (
            <Card key={article.guid} className="flex flex-col">
              <CardHeader>
                <div className="relative w-full h-48">
                  <Image
                    src={imageUrl}
                    alt={article.title}
                    fill
                    className="object-cover rounded-t-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardTitle className="text-xl mb-2">
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {article.title}
                  </a>
                </CardTitle>
                <CardDescription>
                  {format(pubDate, "MMMM d, yyyy")}
                </CardDescription>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {sanitizeHtml(article.description).substring(0, 100)}...
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
