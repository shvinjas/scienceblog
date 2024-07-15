// "use client"
// import { useEffect,useState } from "react";

// export default function Post({params}){
// const id=params.id;

// const [post,setPost]=useState([]);

// useEffect(()=>{
// fetch(process.env.NEXT_PUBLIC_API_URL+"/post/"+id)
// .then((response)=>response.json())
// .then((response)=>setPost(response))
// },[])
//     return(
//         <>
//         {post && <main className="container mx-auto px-4 py-6">
//         <p className="text-2xl font-bold mb-4">{post.title}</p>
//         <p className="text-gray-500">{post.created_at_formatted}</p>
//         <img src={post.image} alt="Post Image" className="my-4 w-96 h-64"/>
//         <p>{post.description}</p>
//     </main>
//         }
//         </>
//     )
// }

// "use client"
// import { useEffect, useState } from "react";

// export default function Post({ params }) {
//   const id = params.id;

//   const [post, setPost] = useState({});

//   useEffect(() => {
//     fetch(process.env.NEXT_PUBLIC_API_URL + "/post/" + id)
//       .then((response) => response.json())
//       .then((response) => setPost(response));
//   }, [id]);

//   // Function to split description into 3 parts
//   const splitDescription = (description) => {
//     if (!description) return [];
//     const words = description.split(' ');
//     const splitIndex1 = Math.ceil(words.length / 2);
//     const splitIndex2 = Math.ceil((2 * words.length) / 2);
//     return [
//       words.slice(0, splitIndex1).join(' '),
//       words.slice(splitIndex1, splitIndex2).join(' '),
//       words.slice(splitIndex2).join(' ')
//     ];
//   };

//   const descriptionParts = splitDescription(post.description);

//   return (
//     <>
//       {post && (
//         <main className="container mx-auto px-4 py-6">
//           <p className="text-2xl font-bold mb-4">{post.title}</p>
//           <p className="text-gray-500">{post.created_at_formatted}</p>
//           <img src={post.image} alt="Post Image" className="my-4 w-96 h-64" />
//           {descriptionParts.map((part, index) => (
//             <p key={index} className="mb-4">{part}</p>
//           ))}
//         </main>
//       )}
//     </>
//   );
// }

"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Post({ params }) {
  const id = params.id;

  const [post, setPost] = useState({});

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL + "/post/" + id)
      .then((response) => response.json())
      .then((response) => setPost(response));
  }, [id]);

  // Function to split description into 3 parts after full stops
  const splitDescription = (description) => {
    if (!description) return [];

    const sentences = description.match(/[^\.!\?]+[\.!\?]+/g); // Match sentences ending with . ! or ?
    if (!sentences) return [description];

    const third = Math.ceil(sentences.length / 3);
    return [
      sentences.slice(0, third).join(" "),
      sentences.slice(third, 2 * third).join(" "),
      sentences.slice(2 * third).join(" "),
    ];
  };

  const descriptionParts = splitDescription(post.description);

  return (
    <>
      {post && (
        <main className="container mx-auto px-4 py-6 mb-10 ">
          <p className="text-2xl font-bold mb-4">{post.title}</p>
          <p className="text-gray-500">{post.created_at_formatted}</p>
          <Image
            src={post.image}
            width={1260} // Set the width property
            height={750} // Set the height property
            alt="Post Image"
            className="my-4 w-96 h-64 mt-8"
          />
          {descriptionParts.map((part, index) => (
            <p key={index} className="mb-4">
              {part}
            </p>
          ))}
        </main>
      )}
    </>
  );
}
