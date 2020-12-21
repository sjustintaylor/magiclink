const service = require("restana")();
const router = service.newRouter();
const createError = require("http-errors");
const schemas = require("./schema");
const { Sessions } = require("./model");

/**
 * Email a magic link to the user. While this can be called multiple times, the link can only be used once.
 */
router.get("/",  async (req, res) => {
  res.send({}, 200);
})

/**
 * Create a session for the user by exchanging a magic link token for an authentication and refresh token pair. 
 * This will invalidate all previously issued links
 */
router.put("/",  async (req, res) => {
  res.send({}, 200);
})

/**
 * Destroy a session (log out)
 */
router.delete("/", async (req, res) => {
  res.send({}, 204);
});

/**
 * Refresh the session by using a refresh token.
 * This will invalidate the previous token pair (auth/refresh)
 */
router.patch("/", async (req, res) => {
  res.send({}, 200);
});

module.exports = router;
