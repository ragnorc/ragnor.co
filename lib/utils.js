const crypto = require("crypto");

export const capitalize = s => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};
export const decapitalize = s => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toLowerCase() + s.slice(1);
};
export const getKeyByValue = (object, value) => {
  return Object.keys(object).find(key => object[key] === value);
};

export const utcDateString = ms => {
  return new Date(ms)
    .toISOString()
    .replace(/-/g, "/")
    .replace(/T/, " ")
    .replace(/\.\d+\Z$/, "+00:00");
};

export const transloaditSignature = (params, secret) =>
  crypto
    .createHmac("sha1", secret)
    .update(Buffer.from(params, "utf-8"))
    .digest("hex");

export function debounce(a, b, c) {
  var d, e;
  return function() {
    function h() {
      (d = null), c || (e = a.apply(f, g));
    }
    var f = this,
      g = arguments;
    return (
      clearTimeout(d), (d = setTimeout(h, b)), c && !d && (e = a.apply(f, g)), e
    );
  };
}

export function getColor(str) {
  const colors = [
    "yellow",
    "yellow",
    "red",
    "red",
    "green",
    "green",
    "blue",
    "blue"
  ];
  let hash = 0;
  for (let x of str) {
    hash += x.charCodeAt(0);
  }
  return colors[hash % colors.length];
}

export function getHeading(obj) {
  return obj.question || obj.fullName || obj.title || obj.name || "";
}
