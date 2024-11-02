import { readdir } from "fs/promises";
import { resolve } from "path";
import getPlugins from "../utils/getPlugins.util";

const getDirectories = async (source) =>
  (await readdir(source, { withFileTypes: true }))
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

export default async function Page() {
  const plugins = await getPlugins(
    resolve(process.cwd(), "src", "string-extract", "plugins")
  );
  return (
    <>
      <h1>String extract</h1>
      <pre>{JSON.stringify(plugins, null, 4)}</pre>
    </>
  );
}
