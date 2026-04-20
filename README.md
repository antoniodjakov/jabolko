# Jabolko.mk

A simple static GitHub Pages site for apple cider, apple vinegar, and vine production.

## Files

- `index.html` - the page content and tab panels.
- `styles.css` - responsive layout and visual styling.
- `script.js` - accessible tab switching.
- `assets/` - local image assets and favicon.
- `CNAME` - custom domain configuration for `jabolko.mk`.

## Publish on GitHub Pages

1. Create a GitHub repository.
2. Push this folder to the repository.
3. In GitHub, open `Settings` -> `Pages`.
4. Set the source to deploy from the branch root, usually `main` and `/`.
5. Confirm the custom domain is `jabolko.mk`.
6. Enable HTTPS after GitHub finishes issuing the certificate.

## DNS notes

For the apex domain `jabolko.mk`, GitHub Pages currently documents these `A` records:

```text
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

If you also want `www.jabolko.mk`, create a `CNAME` DNS record for `www` that points to your GitHub Pages default domain, such as `YOUR-USERNAME.github.io`.

Reference: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
