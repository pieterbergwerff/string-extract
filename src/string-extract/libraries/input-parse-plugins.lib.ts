// import types
import type { PluginType } from "../types/plugin.types.js";

export class InputParsePlugins {
  #plugins: Record<string, PluginType<unknown>> = {};

  public get plugins() {
    return this.#plugins;
  }

  public async create<ReturnType>(
    pluginName: string,
    plugin: PluginType<ReturnType>
  ) {
    this.#plugins[pluginName] = plugin;
  }
}

export default InputParsePlugins;
