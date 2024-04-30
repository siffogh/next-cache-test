import Heart from "./heart";
import { fetchData } from "./utils";

export default async function Home() {
  const data = await fetchData();

  return (
    <ul>
      {new Array(200).fill(null).map((_, i) => (
        <li key={i}>
          <Heart />
        </li>
      ))}
    </ul>
  );
}
