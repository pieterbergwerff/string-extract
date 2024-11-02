// import class
import InputParse from "./libraries/input-parse-core.lib.js";

// import plugins
import imagesPlugin from "./plugins/images/images.plugin.js";

const fetchData = async () =>
  Promise.all([
    fetch("https://jsonplaceholder.typicode.com/posts").then((response) =>
      response.json()
    ),
    fetch("https://dummyjson.com/users").then((res) => res.json()),
    fetch("https://fakestoreapi.com/products").then((res) => res.json()),
    fetch(
      "https://fakerapi.it/api/v2/images?_quantity=1&_type=any&_height=300"
    ).then((res) => res.json()),
  ]);

const coreLib = new InputParse();
coreLib.plugin("images", imagesPlugin);

coreLib.plugin("ips", (str) => {
  const ipPattern =
    /\b(?:\d{1,3}\.){3}\d{1,3}\b|(?:[a-fA-F0-9]{1,4}:){7}[a-fA-F0-9]{1,4}\b/g;
  return str.match(ipPattern) || [];
});

coreLib.plugin("dates", (str) => {
  const datePattern = /\b\d{4}-\d{2}-\d{2}\b/g;
  return str.match(datePattern) || [];
});

coreLib.plugin("emails", (str) => {
  const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
  return str.match(emailPattern) || [];
});

coreLib.plugin("phones", (str) => {
  const phonePattern = /\b\d{3}[-.\s]?\d{3}[-.\s]?\d{4}\b/g;
  return str.match(phonePattern) || [];
});

coreLib.plugin("urls", (str) => {
  const urlPattern = /\bhttps?:\/\/[^\s/$.?#].[^\s]*\b/g;
  return str.match(urlPattern) || [];
});

coreLib.plugin("postals", (str) => {
  const postalCodePattern = /\b\d{5}(?:-\d{4})?\b/g;
  return str.match(postalCodePattern) || [];
});

coreLib.plugin("creditcards", (str) => {
  const ccPattern = /\b\d{4}[-.\s]?\d{4}[-.\s]?\d{4}[-.\s]?\d{4}\b/g;
  return str.match(ccPattern) || [];
});

coreLib.plugin("macaddresses", (str) => {
  const macPattern = /\b([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})\b/g;
  return str.match(macPattern) || [];
});

coreLib.plugin("ssns", (str) => {
  const ssnPattern = /\b\d{3}-\d{2}-\d{4}\b/g;
  return str.match(ssnPattern) || [];
});

coreLib.plugin("bitcoinaddresses", (str) => {
  const btcPattern = /\b[13][a-km-zA-HJ-NP-Z1-9]{25,34}\b/g;
  return str.match(btcPattern) || [];
});

await coreLib.parse(await fetchData());

export default InputParse;
