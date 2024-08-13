export function parseImageSizes(sizesStr: string): Record<string, number> {
  const sizeKeys = ["xs", "sm", "md", "lg", "xl", "xxl"];
  const sizeArray = sizesStr.split(" ");

  const fallbackSize = parseInt(sizeArray[0], 10);
  if (isNaN(fallbackSize)) {
    throw new Error("Invalid fallback size provided.");
  }

  const sizeObject: Record<string, number> = {};

  let currentSize = fallbackSize;
  sizeKeys.forEach((key) => {
    const sizeEntry = sizeArray.find((size) => size.startsWith(key));
    if (sizeEntry) {
      const parsedSize = parseInt(sizeEntry.split(":")[1], 10);
      if (!isNaN(parsedSize)) {
        currentSize = parsedSize;
      } else {
        console.warn(`Invalid size value for key ${key} in ${sizeEntry}, using previous size ${currentSize}`);
      }
    }
    sizeObject[key] = currentSize;
  });

  return sizeObject;
}
