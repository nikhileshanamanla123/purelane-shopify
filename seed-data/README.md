# Purelane seed data

This folder is supporting material for the Shopify development store. It is not part of the theme upload ZIP.

## Import order

1. Push the complete repository to the public GitHub repository.
2. Import `products_import.csv` in Shopify Admin under **Products → Import**.
3. Shopify will fetch the public raw GitHub image URLs in the CSV.
4. Confirm the imported product images and titles.
5. Confirm **Toilet Cleaner** has inventory `0`, does not continue selling when out of stock, and intentionally has no image.
6. Create or update a collection containing the products.

## Files

- `products_import.csv` — import-ready CSV with the eight assignment products and public image URLs.
- `products_import_source.csv` — original source CSV for reference.
- `product_images/1.jpeg` through `7.jpeg` — product images used by the import CSV.
- `product_images/all.jpeg` — optional group image for a hero or reference asset; it is not assigned to a product by the CSV.

The CSV intentionally leaves the sold-out Toilet Cleaner image blank. The long-title product has an image so the title-wrapping edge case can be reviewed independently. If the product order is changed, update the `Image Src`, `Image Position`, and `Image Alt Text` columns before importing.