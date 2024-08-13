export const useImageDimensions = async (src: string) => {
  if (!process.client) {
    return { width: 0, height: 0 };
  }

  return new Promise<{ width: number; height: number }>((resolve) => {
    const img = new Image();
    img.onload = () => {
      resolve({ width: img.naturalWidth, height: img.naturalHeight });
    };
    img.src = src;
  });
};
