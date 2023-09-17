const { required } = require('joi');
const app = require('../app/app');
const router = require('express').Router();
const httpProxy = require('http-proxy');
const { logError } = require('../utils/logger');
const proxyServer = httpProxy.createProxyServer();

const { proxy } = require('rtsp-relay')(app);

/**
 * Handles WebSocket streaming of RTSP camera feeds.
 * @param {WebSocket} ws - The WebSocket connection.
 * @param {Express.Request} req - The Express request object.
 */
const streamHandler = (ws, req) => {
  // Proxy the WebSocket connection to the RTSP camera feed URL
  proxy({
    url: `${decodeURIComponent(req.params.cameraUrl)}`,
    verbose: false,
  })(ws);
}

// WebSocket route for streaming RTSP camera feeds
router.ws("/:cameraUrl", streamHandler);

/**
 * Takes an external HTTP URL and converts it to a local URL
 * by creating an HTTP proxy server.
 * @param {Express.Request} req - The Express request object.
 * @param {Express.Response} res - The Express response object.
 */
router.get("/http-stream/:cameraUrl", (req, res) => {
  try {
    const httpUrl = `${decodeURIComponent(req.params.cameraUrl)}`;
    // Create an HTTP proxy server to forward requests to the external URL
    proxyServer.web(req, res, { 
      target: httpUrl,
      changeOrigin: true 
    });
  } catch (err) {
    logError(err);
  }
})

module.exports = router;
