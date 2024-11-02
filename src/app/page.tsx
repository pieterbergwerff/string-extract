import { resolve } from "path";
import getPlugins from "../utils/getPlugins.util";

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
