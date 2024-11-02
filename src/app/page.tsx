import { readdir } from "fs/promises";
import { resolve } from "path";

const getDirectories = async (source) =>
  (await readdir(source, { withFileTypes: true }))
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

export default async function Page() {
  const dirname = await getDirectories(
    resolve(process.cwd(), "src", "string-extract", "plugins")
  );
  return <h1>String extract: {JSON.stringify(dirname, null, 4)}</h1>;
}
