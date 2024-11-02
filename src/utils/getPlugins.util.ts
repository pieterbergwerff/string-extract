// import utils
import { readdir } from "fs/promises";
import { resolve } from "node:path";

const getPluginDirectories = async (pluginsDirectory: string) =>
  (await readdir(pluginsDirectory, { withFileTypes: true }))
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

const getPluginDirectory = async (pluginDirectory: string) =>
  (await readdir(pluginDirectory, { withFileTypes: true }))
    .filter((dirent) => dirent.isFile())
    .map((dirent) => dirent.name);

const getPlugin = async (pluginsDirectory, pluginDirectoryName, pluginFile) => {
  const path = resolve(pluginsDirectory, pluginDirectoryName, pluginFile);
  const { description, example } = await import(
    `../../src/string-extract/plugins/${pluginDirectoryName}/${pluginFile.replace(
      ".ts",
      ""
    )}`
  );

  return {
    category: pluginDirectoryName,
    path,
    description,
    example,
    name: pluginFile.replace(".plugin.ts", ""),
  };
};

export const getPluginsUtil = async (
  pluginsDirectory: string
): Promise<Record<string, any>> => {
  const pluginDirectories: string[] = await getPluginDirectories(
    pluginsDirectory
  );

  if (pluginDirectories.length) {
    const result = (
      await Promise.all(
        pluginDirectories.map(
          (pluginDirectoryName) =>
            new Promise(async (next) => {
              const pluginFiles: string[] = await getPluginDirectory(
                resolve(pluginsDirectory, pluginDirectoryName)
              );
              next({
                [pluginDirectoryName]: await Promise.all(
                  pluginFiles.map((pluginFile) =>
                    getPlugin(pluginsDirectory, pluginDirectoryName, pluginFile)
                  )
                ),
              });
            })
        )
      )
    ).reduce((acc: Record<string, any>, item) => {
      const category = Object.keys(item)[0];
      return { ...acc, [category]: item[category] };
    }, {});

    return result;
  }

  return {};
};

export default getPluginsUtil;
