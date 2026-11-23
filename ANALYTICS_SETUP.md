# Private analytics deployment

Configure these Vercel Production environment variables (never commit values):
- GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET: Google OAuth web application credentials.
- ADMIN_GOOGLE_EMAIL: exact Google email allowed to log in.
- ANALYTICS_SECRET: random secret (at least 32 bytes, e.g. generated with openssl rand -hex 32).
- UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN: Upstash Redis REST credentials.

In Google Cloud Console, configure the authorized redirect URI exactly:
https://nforcolin.eu/api/auth/callback

Set the OAuth consent screen/test user or publish the app as appropriate.
Deploy again after adding environment variables.
Open https://nforcolin.eu/admin.html and sign in on each browser/device you own to exclude its visits while the signed session is active. The exclusion is not retroactive and lasts seven days; renew login as needed.

Analytics are daily aggregates using HMAC-derived daily visitor identifiers (IP + user-agent) and Redis HyperLogLog. No raw IP or user agent is persisted by the analytics code. Visitors with blockers or JavaScript disabled may not be counted. Totals of daily unique visitors are not cross-day unique people.

Review privacy notices and legal requirements before enabling production tracking. The private page HTML is publicly downloadable, but its data API requires an authenticated session. Do not place sensitive information in the HTML.

## Contact form

The contact page (contatti.html) posts to /api/contact/send and uses the same Upstash Redis variables (UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN) and ANALYTICS_SECRET: no new variable is needed. Messages are kept in the list `nf:contact:messages` (at most 500) and removed after 12 months when the private page loads them. They are listed at the bottom of admin.html after login, where each one can be deleted. A Telegram message announces each new request, without any data about the sender ("Nuova richiesta dal modulo contatti (PMI). Leggila su https://nforcolin.eu/admin"). It needs TELEGRAM_BOT_TOKEN (sensitive) and TELEGRAM_CHAT_ID in the Vercel Production environment; without them no message is sent, and if Telegram does not answer within 4 seconds the request is still saved. To change bot, create a new token with @BotFather and update the variable, then redeploy.
