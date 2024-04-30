import { cookies } from "next/headers";

export async function fetchData() {
  await fetch("https://fakeresponder.com/?sleep=5000", {
    next: {
      revalidate: 1,
    },
  });

  return new Date().toISOString();
}

export async function accessCookies() {
  cookies().get("name");
}
