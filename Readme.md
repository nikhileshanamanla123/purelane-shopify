\### 01: Dev Store URL and Password

\- Store URL: https://purelane-homecare-nikhilesh.myshopify.com/

\- Storefront Password: purelane123

\- Theme: Stock Shopify Dawn (v15+)



\### 02: GitHub Repository Link

\- Repository URL: https://github.com/nikhileshanamanla123/purelane-shopify

\- Commit History: 8 clean, sequential commits tracking initial assets, section implementations, seed data, and documentation.



\### 03: Metafield and Metaobject Definitions

For these 5 sections, native Shopify section settings and block schemas were deliberately used rather than metaobjects to maximize merchant autonomy inside the Theme Editor and preserve SSR performance. 



For catalog scaling, the following optional definitions are documented:

1\. `custom.rating` (Decimal / Single line text) — Star rating score (default: 4.8).

2\. `custom.review\_count` (Integer) — Total verified buyer reviews count.

3\. `custom.bundle\_products` (List of products) — Component products for pre-packaged combo SKUs.



\### 04: Short Notes on the Build

\- Prototype Critique: 

&#x20; The raw prototype embedded artwork as inline base64 strings and hardcoded prices as static text. It duplicated DOM markup between desktop side-rails and mobile strips, lacked inventory awareness (sold out / missing images), and broke vertically whenever real-world long product titles were rendered.

\- Code Changes \& Architecture:

&#x20; Built 5 native, modular Liquid sections on stock Dawn. Used CSS line-clamp (-webkit-line-clamp: 2) on product cards to prevent long titles from breaking grid alignments, implemented dynamic inventory detection to render "Sold out" badges and disable CTAs, provided branded SVG fallbacks for missing product imagery, and added full ARIA tablists and hover/focus pause controls for accessibility.

\- With More Time:

&#x20; I would connect the #bundles section directly to the Shopify AJAX Cart API (/cart/add.js) for an interactive 3-step bundle builder with dynamic cart drawer integration, and set up automated visual regression tests via Playwright.



\### 05: Short Notes on AI Workflow

\- What was Delegated:

&#x20; Extracting color tokens, typography scales, and glassmorphic CSS filters from 1,700 lines of prototype HTML; scaffolding Shopify JSON schemas with presets and block limits; and generating the compliant 8-product CSV seed catalog with all edge cases.

\- Where AI Failed \& Required Correction:

&#x20; AI initially hallucinated deprecated/non-standard Liquid tags (like `product.images\[0].src` instead of modern `image\_url` / `image\_tag`), defaulted to static text rather than merchant-configurable settings, and omitted card height constraints causing long titles to break grid rows.

\- Systematising for 20+ Stores:

&#x20; I would build a standardized library of accessible Liquid section archetypes, a CLI tool to seed test catalogs and edge cases via the Shopify Admin API, and automated GitHub Actions with Playwright to verify cross-browser visual fidelity across mobile and desktop.

