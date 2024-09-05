// easier but not that nice solution:

// import Card from "../../components/Card";
// import Layout from "../../components/Layout";
// import useSWR from "swr";
// import { useRouter } from "next/router";

// async function fetcher(url) {
//   const response = await fetch(url);
//   const data = await response.json();
//   return data;
// }

// export default function Character() {
//   const router = useRouter();
//   const { id } = router.query;

//   const { data, isLoading, error } = useSWR(
//     `https://swapi.dev/api/people/${id}`,
//     fetcher
//   );

//   if (isLoading) {
//     return <h1>Loading...</h1>;
//   }

//   if (error || !data) {
//     return <h1>Error: {error}</h1>;
//   }

//   return (
//     <Layout>
//       <Card
//         id={data.id}
//         name={data.name}
//         height={data.height}
//         eyeColor={data.eye_color}
//         birthYear={data.birth_year}
//       />
//     </Layout>
//   );
// }

// better solution
import { useRouter } from "next/router";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";

async function fetcher(url) {
  const response = await fetch(url);

  if (!response.ok) {
    const error = new Error("An error occurred while fetching the data.");
    // Attach extra info to the error object.
    // error.info = await response.json();
    // error.status = response.status;
    // console.log("errorinfo:", error.info, "errorstatus:", error.status);
    throw error;
  }

  return response.json();
}

export default function Character() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(
    `https://swapi.dev/api/people/${id}`,
    fetcher
  );

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Layout>
      <Card
        id={id}
        name={data.name}
        height={data.height}
        eyeColor={data.eye_color}
        birthYear={data.birth_year}
      />
    </Layout>
  );
}
