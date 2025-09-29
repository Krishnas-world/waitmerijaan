function waitmerijaan(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = waitmerijaan;