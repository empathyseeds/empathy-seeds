# Shared likes setup

Like totals are stored in Upstash Redis so visitors see the same count. Before enabling the feature, create a Redis database and configure these environment variables both for local development and in the website hosting provider:

- `UPSTASH_REDIS_REST_URL`
- `UPSTASH_REDIS_REST_TOKEN`

Use the REST URL and token shown by the Upstash console. Keep the token private and do not commit it. Restart or redeploy the site after setting the values. Until then, the interface reports that likes are temporarily unavailable.

Each browser gets a private, one-year visitor cookie to avoid counting repeated likes from that browser more than once per article/story. A visitor can toggle their own like on and off.
