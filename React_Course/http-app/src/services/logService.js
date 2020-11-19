import * as Sentry from "@sentry/react";

function init() {
  Sentry.init({
    dsn:
      "https://598062cf7ed94db08acba54d19ba282d@o435385.ingest.sentry.io/5394603",
  });
}

function log(error) {
  Sentry.captureException(error);
}

export default {
  init,
  log,
};
