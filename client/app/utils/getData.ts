async function getSSRData<T>(url: string) {
  "use server";
  const res = await fetch(url, { cache: "no-store" });
  const data: T = await res.json();
  return data;
}

export { getSSRData };
