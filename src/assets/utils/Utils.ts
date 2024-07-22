export function getAbsoluteImagePath(imgPath: {
  startWith: (arg0: string) => any;
  replace: (arg0: string, arg1: string) => any;
}) {
  if (imgPath.startWith("http")) {
    return imgPath;
  }
  return `${process.env.PUBLIC_URL}/${imgPath.replace("../", "")}`;
}
