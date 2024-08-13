import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import lightGallery from "lightgallery";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

interface Photo {
  src: string;
  thumb: string;
  subHtml: string;
}

interface GalleryOptions {
  allowMediaOverlap?: boolean;
  // Add any other options you might need here
}

export function useDynamicGallery(
  gallery: Ref<HTMLElement | null>,
  images: string[],
  localUrl: string,
  translation: string,
) {
  const img = useImage();
  const lightbox = ref<ReturnType<typeof lightGallery> | null>(null);

  const photos = computed(() => {
    return images.map((image) => {
      return img(setMediaUrl(`${localUrl}/${image}`), { format: "webp", quality: 90 }, { provider: setProvider() });
    });
  });

  const thumbs = computed(() => {
    return images.map((image) => {
      return img(
        setMediaUrl(`${localUrl}/${image}`),
        { format: "webp", quality: 50, width: 100 },
        { provider: setProvider() },
      );
    });
  });

  const dynamicPhotos = computed<Photo[]>(() => {
    return photos.value.map((photo, index) => ({
      src: photo,
      thumb: thumbs.value[index],
      subHtml: `${translation} - ${photo.split("/").pop()}`,
    }));
  });

  const initGallery = ({ allowMediaOverlap = true }: GalleryOptions = {}) => {
    if (gallery.value) {
      lightbox.value = lightGallery(gallery.value, {
        dynamic: true,
        allowMediaOverlap: allowMediaOverlap,
        toggleThumb: true,
        dynamicEl: dynamicPhotos.value,
        plugins: [lgThumbnail, lgZoom],
      });
    }
  };

  const openGallery = (startSlide: number = 0) => {
    if (lightbox.value) {
      lightbox.value.openGallery(startSlide);
    }
  };

  return {
    initGallery,
    openGallery,
  };
}
