import { defineManifest } from "@crxjs/vite-plugin";
import packageJson from "../package.json";

export default defineManifest({
  name: "localeja",
  version: packageJson.version,
  description: "Force browser locale to Japanese (ja)",
  manifest_version: 3,
  icons: {
    "16": "icons/icon16.png",
    "32": "icons/icon32.png",
    "48": "icons/icon48.png",
    "128": "icons/icon128.png",
  },
  permissions: ["declarativeNetRequest"],
  host_permissions: ["<all_urls>"],
  background: {
    service_worker: "src/background.ts",
    type: "module",
  },
  content_scripts: [
    {
      matches: ["<all_urls>"],
      js: ["src/override-language.ts"],
      run_at: "document_start",
      world: "MAIN",
    },
  ],
});
