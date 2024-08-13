const currentEnv = process.env.NODE_ENV || "production";

// Set the correct URL for the API
export function setApiUrl(localUrl: string): string {
  const environments = {
    development: "http://localhost:8000",
    // development: "https://backend.dktshumen.com/api",
    // development: "https://test.grand-ant.com/api",
    // production: "http://localhost:8000/api",
    // production: "https://backend.dktshumen.com/api",
    production: "https://api.dktshumen.com",
  };

  const apiUrl = environments[currentEnv];

  return `${apiUrl}${localUrl}`;
}

// Set the correct URL for images
export function setMediaUrl(localUrl: string, type?: string): string {
  const environments = {
    development: "/file/dkts-main",
    production: "/file/dkts-main",
  };

  const directEnvironments = {
    // TODO: There might be additiona config needed to integrate B2 and Cloudflare
    development: "",
    production: "https://cdn.grand-ant.com/file/dkts-main",
  };

  if (type == "video" || type == "photo") {
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
