# localeja

A Chrome extension that forces the browser locale to Japanese (ja).

## How it works

localeja modifies the browser locale in two ways:

- **Accept-Language HTTP header**: Rewrites the `Accept-Language` header to `ja,en-US;q=0.9,en;q=0.8` for all requests using the `declarativeNetRequest` API (server-side locale detection).
- **navigator.language / navigator.languages**: Overrides `navigator.language` to `"ja"` and `navigator.languages` to `["ja", "en-US", "en"]` via a MAIN world content script (client-side locale detection).

## Installation

1. Clone this repository
2. Install dependencies: `pnpm install`
3. Build the extension: `pnpm build`
4. Open `chrome://extensions/` in Chrome
5. Enable "Developer mode"
6. Click "Load unpacked" and select the `dist/` directory

## Development

```bash
pnpm dev          # Build with watch mode
pnpm build        # Production build
pnpm typecheck    # Run TypeScript type checking
pnpm lint         # Run linter (oxlint)
pnpm format       # Format code (prettier)
pnpm package      # Build and create package.zip
```

## License

MIT
