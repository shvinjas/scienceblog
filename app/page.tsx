// // // "use client";
// // // import Image from "next/image";
// // // import { useState, useEffect } from "react";
// // // import { useRef } from "react";
// // // import Link from "next/link";

// // // interface Post {
// // //   id: string;
// // //   _id: string;
// // //   title: string;
// // //   description: string;
// // //   image: string;
// // //   short_description: string;
// // // }

// // // export default function Home() {
// // //   const [posts, setPosts] = useState<Post[]>([]);

// // //   const [search, setSearch] = useState(false);

// // //   const inputRef = useRef("");

// // //   useEffect(() => {
// // //     fetch(process.env.NEXT_PUBLIC_API_URL + "/posts")
// // //       .then((response) => response.json())
// // //       .then((response) => setPosts(response));
// // //   }, []);

// // //   const searchPost = (event) => {
// // //     if (event.type == "keydown" && event.key !== "Enter") {
// // //       return;
// // //     }
// // //     setSearch(true);

// // //     fetch(
// // //       process.env.NEXT_PUBLIC_API_URL + "/posts?q=" + inputRef.current.value
// // //     )
// // //       .then((response) => response.json())
// // //       .then((response) => setPosts(response))
// // //       .finally(() => setSearch(false));
// // //   };

// // //   return (
// // //     <div className="mb-16">
// // //       <main className="container mx-auto px-4 py-6">
// // //         <h2 className="text-4xl font-bold mb-4">Welcome to Our Blog</h2>
// // //         <p>
// // //           Welcome to Science Unveiled, your gateway to the wonders of the
// // //           universe! Here, we delve into the latest scientific discoveries,
// // //           explore groundbreaking research, and uncover the mysteries of the
// // //           natural world. Whether you're a seasoned scientist or just curious
// // //           about the cosmos, our blog offers something for everyone. From the
// // //           depths of the ocean to the far reaches of space, we cover a diverse
// // //           range of topics, bringing you insightful articles, expert interviews,
// // //           and thought-provoking discussions. Join us on this exciting journey as
// // //           we expand our understanding of the world and beyond. Stay curious,
// // //           stay informed, and let's explore the frontiers of science together!
// // //         </p>
// // //       </main>
// // //       <div className="flex justify-end px-4">
// // //         <input
// // //           type="text"
// // //           onKeyDown={searchPost}
// // //           disabled={search}
// // //           ref={inputRef}
// // //           className="px-4 py-2 border border-gray-300 rounded-md"
// // //           placeholder="Search..."
// // //         />
// // //         <button
// // //           onClick={searchPost}
// // //           disabled={search}
// // //           className="px-4 py-2 bg-blue-500 text-white rounded-md ml-4"
// // //         >
// // //           {search ? "..." : "Search"}
// // //         </button>
// // //       </div>

// // //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
// // //         {posts.map((post) => (
// // //           <Link href={"/post/" + post._id}>
// // //             <div key={post.id} className="border border-gray-200 p-4">
// // //               <img
// // //                 className="w-full h-54 object-cover mb-4"
// // //                 src={post.image}
// // //                 alt="Post Image"
// // //               />
// // //               <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
// // //               <p className="text-gray-600">{post.short_description}</p>
// // //             </div>
// // //           </Link>
// // //         ))}
// // //         {!posts.length > 0 && inputRef.current.value && (
// // //           <p className="mx-auto pl-10 mt-24">
// // //             No post available for this query:<b>{inputRef.current.value}</b>
// // //           </p>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // "use client";
// // import Image from "next/image";
// // import { useState, useEffect, useRef } from "react";
// // import Link from "next/link";

// // interface Post {
// //   id: string;
// //   _id: string;
// //   title: string;
// //   description: string;
// //   image: string;
// //   short_description: string;
// // }

// // export default function Home() {
// //   const [posts, setPosts] = useState<Post[]>([]);
// //   const [search, setSearch] = useState(false);
// //   const inputRef = useRef<HTMLInputElement>(null);

// //   useEffect(() => {
// //     fetch(process.env.NEXT_PUBLIC_API_URL + "/posts")
// //       .then((response) => response.json())
// //       .then((response) => setPosts(response));
// //   }, []);

// //   const searchPost = (
// //     event:
// //       | React.KeyboardEvent<HTMLInputElement>
// //       | React.MouseEvent<HTMLButtonElement, MouseEvent>
// //   ) => {
// //     if ("key" in event && event.type === "keydown" && event.key !== "Enter") {
// //       return;
// //     }

// //     setSearch(true);

// //     fetch(
// //       process.env.NEXT_PUBLIC_API_URL + "/posts?q=" + inputRef.current?.value
// //     )
// //       .then((response) => response.json())
// //       .then((response) => setPosts(response))
// //       .finally(() => setSearch(false));
// //   };

// //   return (
// //     <div className="mb-16">
// //       <main className="container mx-auto px-4 py-6">
// //         <h2 className="text-4xl font-bold mb-4">Welcome to Our Blog</h2>
// //         <p>
// //           Welcome to Science Unveiled, your gateway to the wonders of the
// //           universe! Here, we delve into the latest scientific discoveries,
// //           explore groundbreaking research, and uncover the mysteries of the
// //           natural world. Whether you&apos;re a seasoned scientist or just
// //           curious about the cosmos, our blog offers something for everyone. From
// //           the depths of the ocean to the far reaches of space, we cover a
// //           diverse range of topics, bringing you insightful articles, expert
// //           interviews, and thought-provoking discussions. Join us on this
// //           exciting journey as we expand our understanding of the world and
// //           beyond. Stay curious, stay informed, and let&apos;s explore the
// //           frontiers of science together!
// //         </p>
// //       </main>
// //       <div className="flex justify-end px-4">
// //         <input
// //           type="text"
// //           onKeyDown={searchPost}
// //           disabled={search}
// //           ref={inputRef}
// //           className="px-4 py-2 border border-gray-300 rounded-md"
// //           placeholder="Search..."
// //         />
// //         <button
// //           onClick={searchPost}
// //           disabled={search}
// //           className="px-4 py-2 bg-blue-500 text-white rounded-md ml-4"
// //         >
// //           {search ? "..." : "Search"}
// //         </button>
// //       </div>

// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
// //         {posts.map((post) => (
// //           <Link key={post.id} href={"/post/" + post._id}>
// //             <div className="border border-gray-200 p-4">
// //               <Image
// //                 className="w-full h-54 object-cover mb-4"
// //                 src={post.image}
// //                 width={1260} // Set the width property
// //                 height={750} // Set the height property
// //                 alt="Post Image"
// //               />
// //               <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
// //               <p className="text-gray-600">{post.short_description}</p>
// //             </div>
// //           </Link>
// //         ))}
// //         {posts.length === 0 && inputRef.current?.value && (
// //           <p className="mx-auto pl-10 mt-24">
// //             No post available for this query: <b>{inputRef.current.value}</b>
// //           </p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }

"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

interface Post {
  id: string;
  _id: string;
  title: string;
  description: string;
  image: string;
  short_description: string;
}

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [search, setSearch] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetch("http://localhost:3000/api" + "/posts")
      .then((response) => response.json())
      .then((response) => setPosts(response));
  }, []);

  const searchPost = (
    event:
      | React.KeyboardEvent<HTMLInputElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if ("key" in event && event.type === "keydown" && event.key !== "Enter") {
      return;
    }

    setSearch(true);

    fetch(
      process.env.NEXT_PUBLIC_API_URL + "/posts?q=" + inputRef.current?.value
    )
      .then((response) => response.json())
      .then((response) => setPosts(response))
      .finally(() => setSearch(false));
  };

  return (
    <div className="mb-16">
      <main className="container mx-auto px-4 py-6">
        <h2 className="text-4xl font-bold mb-4">Welcome to Our Blog</h2>
        <p>
          Welcome to Science Unveiled, your gateway to the wonders of the
          universe! Here, we delve into the latest scientific discoveries,
          explore groundbreaking research, and uncover the mysteries of the
          natural world. Whether you&apos;re a seasoned scientist or just
          curious about the cosmos, our blog offers something for everyone. From
          the depths of the ocean to the far reaches of space, we cover a
          diverse range of topics, bringing you insightful articles, expert
          interviews, and thought-provoking discussions. Join us on this
          exciting journey as we expand our understanding of the world and
          beyond. Stay curious, stay informed, and let&apos;s explore the
          frontiers of science together!
        </p>
      </main>
      <div className="flex justify-end px-4">
        <input
          type="text"
          onKeyDown={searchPost}
          disabled={search}
          ref={inputRef}
          className="px-4 py-2 border border-gray-300 rounded-md"
          placeholder="Search..."
        />
        <button
          onClick={searchPost}
          disabled={search}
          className="px-4 py-2 bg-blue-500 text-white rounded-md ml-4"
        >
          {search ? "..." : "Search"}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        {posts.map((post) => (
          <Link key={post.id} href={"/post/" + post._id}>
            <div className="border border-gray-200 p-4">
              <Image
                className="w-full h-54 object-cover mb-4"
                src={post.image}
                // src="/water.jpg"
                width={1260} // Set the width property
                height={750} // Set the height property
                alt="Post Image"
              />
              {/* <img
                className="w-full h-54 object-cover mb-4"
                src={post.image}
                alt="Post Image"
              /> */}
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600">{post.short_description}</p>
            </div>
          </Link>
        ))}
        {posts.length === 0 && inputRef.current?.value && (
          <p className="mx-auto pl-10 mt-24">
            No post available for this query: <b>{inputRef.current.value}</b>
          </p>
        )}
      </div>
    </div>
  );
}
