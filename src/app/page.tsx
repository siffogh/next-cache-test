import Heart from "./heart";

export default async function Home() {
  return (
    <ul>
      {new Array(4500).fill(null).map((_, i) => (
        <li key={i}>
          <Heart />
        </li>
      ))}
    </ul>
  );
}
