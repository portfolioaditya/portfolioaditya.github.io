# GitHub deployment

Target organization: `portfolioaditya` (owned by `adityanikhel`).
Initial website: `https://portfolioaditya.github.io`.
Future domain requested: `portfolioaditya.com` (not purchased yet).

## Initial deployment

1. Create a repository named exactly `portfolioaditya.github.io` under the `portfolioaditya` organization. On GitHub Free, Pages requires a public repository. A public source repository exposes the committed source, published images, and downloadable résumé. Do not add passwords or local configuration files.
2. Upload the source files at the repository root, including `.github/workflows/deploy-pages.yml`, `package.json` and `pnpm-lock.yaml`.
3. Open Settings → Pages. Under Build and deployment, set Source to GitHub Actions.
4. Open Actions → Deploy portfolio to GitHub Pages → Run workflow, selecting main. Future pushes to main deploy automatically.
5. Wait for the workflow to succeed, then open `https://portfolioaditya.github.io`.

The exact repository name avoids a repository subpath, so the existing root-relative asset and document links work unchanged. The workflow uses Node.js 24, pnpm 10, the frozen lockfile and the existing Next.js static export. No secret token is required in the source; Actions uses GitHub’s built-in deployment identity.

## Connect portfolioaditya.com after purchase

1. Purchase the domain from a registrar of your choice. No domain has been purchased or configured by Codex.
2. Verify ownership in GitHub account Settings → Pages using the TXT record GitHub provides.
3. In the portfolio repository, open Settings → Pages → Custom domain, enter portfolioaditya.com and Save before changing DNS.
4. At your registrar, configure these records (remove only conflicting website records; preserve email and verification records):

| Type | Name | Target |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | portfolioaditya.github.io |

5. Wait for the domain check and certificate provisioning; then enable Enforce HTTPS in GitHub Pages. DNS changes may take up to 24 hours.

Do not add a CNAME for a domain you do not yet own. GitHub Actions publishing stores the custom domain in Pages settings; a committed CNAME file is not required.

References:
- https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
