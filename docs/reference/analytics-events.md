# Analytics events

Telemetry follows the Wolfe telemetry standard v1: the loader tag in `client/public/index.html`
(`data-site="the-myspace"`), cookie-free, no third-party trackers. Pageviews, scroll depth, clicks,
web vitals and errors are automatic. Custom events go through `track()` in `client/src/telemetry.ts`,
which calls `window.wolfeTelemetry.capture` and never throws. Props are enumerated values only.

| Event | Trigger | Props |
| --- | --- | --- |
| `signup_clicked` | Header "Sign Up" link | none |
| `login_opened` | Header "Log In" button | none |
| `login_closed` | Close (X) on the log-in box | none |
| `header_profile_clicked` | Header profile picture link | none |
| `subscribe_opened` | "Subscribe" button on the profile content panel | none |
| `subscribe_closed` | Close on the subscribe window | none |
| `subscribe_submitted` | Subscribe form submitted (email is never captured) | none |
| `top_friend_clicked` | Top-friends icon clicked | none |
| `comment_author_clicked` | Comment author link clicked | none |
| `contact_link_clicked` | Contact link on a profile clicked | none |
| `post_opened` | Content post opened | `source`: `profile` or `content_list` |
