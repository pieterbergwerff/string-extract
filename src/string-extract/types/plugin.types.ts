export type PluginType<ReturnType> =
  | ((str: string) => ReturnType)
  | ((str: string) => Promise<ReturnType>);
