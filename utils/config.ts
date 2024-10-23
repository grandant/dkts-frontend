const currentEnv = process.env.NODE_ENV || "production";

// Set the correct URL for the API
export function setApiUrl(localUrl: string): string {
  const environments = {
    development: "http://localhost:8000",
    // development: "https://test.grand-ant.com",
    // development: "https://api.dktshumen.com",
    // production: "http://localhost:8000/api",
    // production: "https://test.grand-ant.com",
    production: "https://api.dktshumen.com",
  };

  const apiUrl = environments[currentEnv];

  return `${apiUrl}${localUrl}`;
}

// Set the correct URL for media files
export function setMediaUrl(localUrl: string, type?: string): string {
  const environments = {
    development: "/file/dkts-main",
    production: "/file/dkts-main",
  };

  const directEnvironments = {
    // TODO: There might be additional config needed to integrate B2 and Cloudflare
    development: "",
    production: "https://cdn.grand-ant.com/file/dkts-main",
  };

  // Download some files (e.g. video, pdf) directly from B2
  // Direct types
  const downloadableTypes = ["video", "photo", "pdf"];

  if (downloadableTypes.includes(type)) {
    const directUrl = directEnvironments[currentEnv];

    return `${directUrl}${localUrl}`;
  }

  const imgUrl = environments[currentEnv];
  return `${imgUrl}${localUrl}`;
}

// Set the correct provider for images
export function setProvider(): string {
  const environments = {
    development: "cloudflare",
    production: "cloudflare",
  };

  const provider = environments[currentEnv];

  return provider;
}
