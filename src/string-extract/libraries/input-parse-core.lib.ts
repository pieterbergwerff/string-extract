// import libraries
import InputParsePlugins from "./input-parse-plugins.lib.js";
import GetStringsLibrary from "./get-strings.lib.js";

// import types
import type { PluginType } from "../types/plugin.types.js";

export class InputParseCore {
  #pluginsLib: InputParsePlugins = new InputParsePlugins();

  public async parse(input: unknown) {
    const str = new GetStringsLibrary(input).output;
    const pluginNames = Object.keys(this.#pluginsLib.plugins);
    if (pluginNames.length) {
      const output: Record<string, unknown> = {};
      for (let i = 0; i < pluginNames.length; i++) {
        const plugin = this.#pluginsLib.plugins[pluginNames[i]];
        output[pluginNames[i]] = await plugin(str);
      }
    }
  }

  public async plugin(pluginName: string, plugin: PluginType<unknown>) {
    this.#pluginsLib.create(pluginName, plugin);
  }
}

export default InputParseCore;
