import { Search } from "lucide-react";
import SearchForm from "@/components/SearchForm";
import { create } from "domain";
import  StartupCard  from "@/components/StartupCard";

export default async function Home({ searchParams}: {
  searchParams: Promise<{ query?: string }>
}) {
  const query = (await searchParams).query

  const posts = [
    {
      _createdAt : new Date(),
      views: 55,
      author : {_id : 1, name: 'Adrian'},
      _id : 1,
      description: 'This is a description',
      image: "https://img.freepik.com/free-vector/graident-ai-robot-vectorart_78370-4114.jpg?uid=R173380475&ga=GA1.1.2061360919.1737485719&semt=ais_items_boosted&w=740",
      category: "Robots",
      title:"We Robots"
    }
  ]
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">Submit Ideas, Vote on Pitches, Get Noticed in Virtual Competition.</p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search Results for ${query}` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType, index: number) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No Startups Found</p>
          )}
        </ul>

      </section>
    </>
  );
}
