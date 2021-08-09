
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['sqrpr4um7JNzxJ9oaaxgLg'] // An array of project ids.
});
module.exports = withPlasmic({
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  // Your NextJS config.
});
  