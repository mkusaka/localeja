import { defineManifest } from "@crxjs/vite-plugin";
import packageJson from "../package.json";

export default defineManifest({
  name: "localeja",
  version: packageJson.version,
  description: "Force browser locale to Japanese (ja)",
  manifest_version: 3,
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
