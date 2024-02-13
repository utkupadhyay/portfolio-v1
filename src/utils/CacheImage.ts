export const cacheImage = async (url: string, cacheStrategy: string) => {
  const cache = await caches.open('image-cache');
  const response = await fetch(url);
  const imageBlob = await response.blob();
  const cacheResponse = new Response(imageBlob);

  if (cacheStrategy === 'only-cache') {
    await cache.put(url, cacheResponse);
  } else if (cacheStrategy === 'cache-first') {
    const cachedResponse = await cache.match(url);
    if (cachedResponse) {
      return cachedResponse;
    }
    await cache.put(url, cacheResponse);
  }
};
