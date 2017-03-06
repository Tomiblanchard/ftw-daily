const env = process.env.NODE_ENV;
const dev = env !== 'production';

// To pass environment variables to the client app in the build
// script, react-scripts (and the sharetribe-scripts fork of
// react-scripts) require using the REACT_APP_ prefix to avoid
// exposing server secrets to the client side.
const sdkClientId = process.env.REACT_APP_SHARETRIBE_SDK_CLIENT_ID ||
  '08ec69f6-d37e-414d-83eb-324e94afddf0';
const sdkBaseUrl = process.env.REACT_APP_SHARETRIBE_SDK_BASE_URL || 'http://localhost:8088';

// NOTE: only expose configuration that should be visible in the
// client side, don't add any server secrets in this file.
const config = { env, dev, sdk: { clientId: sdkClientId, baseUrl: sdkBaseUrl } };

export default config;