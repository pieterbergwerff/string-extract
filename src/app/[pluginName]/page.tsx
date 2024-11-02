import { resolve } from "path";
import getPlugins from "../../utils/getPlugins.util";

export default async function Page({ params }) {
  const plugins = await getPlugins(
    resolve(process.cwd(), "src", "string-extract", "plugins")
  );

  const { pluginName } = await params;

  const { description, ...plugin } = Object.keys(plugins).reduce(
    (acc, curr) => {
      const categoryPlugins = plugins[curr];
      if (categoryPlugins.length) {
        const found = categoryPlugins.find(({ name }) => pluginName === name);
        if (found) {
          return found;
        }
      }
      return acc;
    },
    undefined
  );

  return (
    <>
      <h1>{pluginName}</h1>
      <h3>{description}</h3>
      <br />
      <br />
      <pre>{JSON.stringify(plugin, null, 4)}</pre>
    </>
  );
}

export async function generateStaticParams() {
  const plugins = await getPlugins(
    resolve(process.cwd(), "src", "string-extract", "plugins")
  );

  const pluginCategories = Object.keys(plugins);

  const pluginNames = pluginCategories.reduce(
    (acc, curr) => [
      ...acc,
      ...plugins[curr].map(({ name }) => ({
        pluginName: name,
      })),
    ],
    []
  );

  return pluginNames;
}
