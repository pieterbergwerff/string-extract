export default async function Page() {
  const dirname = process.cwd();
  return <h1>String extract: {dirname}</h1>;
}
