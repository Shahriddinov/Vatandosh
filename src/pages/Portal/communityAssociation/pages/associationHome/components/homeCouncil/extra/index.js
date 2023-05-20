export const extraFun = (html) => {
  var doc = new DOMParser().parseFromString(html, "text/xml");
  const imgSrc = doc.querySelector("img").getAttribute("src");
  const imgAlt = doc.querySelector("img").getAttribute("alt");
  const text = html.replace(/<[^>]+>/g, "$");
  const filteredText = text.split("$").filter((str) => str.length > 2);

  return { imgSrc, imgAlt, filteredText };
};
