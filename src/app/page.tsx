import { fetchData } from "./utils";

export default async function Home() {
  const data = await fetchData();

  return <code>{JSON.stringify(data, null, 2)}</code>;
}
