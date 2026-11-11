FOLLOWLENS — ADVANCED SEO PACKAGE
=================================
Website: https://im-mohid.github.io/Followlens/
App: https://followlensig.onrender.com/

WHAT CHANGED
------------
1. Rewrote the main landing page and the topic pages with distinct search intent.
2. Added a real in-browser username-list comparison tool on who-doesnt-follow-back.html.
   The comparison runs in the visitor's browser; it does not send pasted lists to a server.
3. Added a working follower-based engagement-rate calculator.
4. Added stronger internal links, page-specific titles/descriptions/canonicals,
   social metadata, and relevant WebPage/Article/SoftwareApplication structured data.
5. Preserved the Google Search Console verification meta tag on index.html.
6. Rebuilt sitemap.xml with canonical, indexable pages only. 404 and legal pages
   are excluded; sitemap.txt is included as a simple alternative diagnostic.
7. Added noindex to privacy.html and terms.html until the operator verifies the
   real data-retention, processor, support-contact, payment and refund details.
8. Kept all files in this one root directory.

IMPORTANT BEFORE PUBLISHING
---------------------------
- Review privacy.html against the actual production database, logs, backups,
  analytics, hosting, payment providers and deletion process. Do not remove noindex
  until every statement is accurate and a working privacy contact is published.
- Review terms.html against real checkout, credit expiry, cancellation and refund rules.
- Verify the app's free limits and paid-credit wording still match the live app.
- Do not claim 100% accuracy, historical unfollow detection from a first scan,
  access to private accounts, or Instagram/Meta affiliation.
- This package does not guarantee Google indexing, traffic or first-page ranking.
  Search ranking depends on usefulness, originality, competition, reputation,
  links, page experience and other signals.

DEPLOY
------
1. Download and extract this ZIP.
2. Open the extracted folder. Select ALL files inside it (not the folder itself).
3. Upload/replace the existing repository root files in:
   https://github.com/im-mohid/Followlens
4. Commit the changes to the branch used by GitHub Pages (previously main).
5. Wait for GitHub Pages deployment to finish.
6. Test these URLs in a browser:
   https://im-mohid.github.io/Followlens/
   https://im-mohid.github.io/Followlens/sitemap.xml
   https://im-mohid.github.io/Followlens/sitemap.txt
   https://im-mohid.github.io/Followlens/robots.txt
7. In Search Console > Sitemaps, submit: sitemap.xml
   If the XML continues to show a fetch/parser error, submit sitemap.txt as a
   separate diagnostic. Do not remove a working sitemap just to test this.
8. Use URL Inspection on the important new pages after the deployment is live.
   Request indexing only after the live test says the URL is available to Google.

SITEMAP NOTES
-------------
- sitemap.xml lists only canonical, indexable pages.
- sitemap.txt lists the same URLs, one absolute URL per line.
- Google treats a sitemap as a discovery hint, not a ranking or indexing guarantee.
- Google ignores changefreq and priority; lastmod should reflect significant updates.
