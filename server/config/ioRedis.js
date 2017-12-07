/**
 * Created by xinye on 2017/4/11.
 */
const Ioredis = require("ioredis");
const config = require("./index");
const LRUCache = require('lru-cache');
const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 3 // 3分钟的缓存
});

class Redis {
  constructor() {
    this.redis = new Ioredis({
      port: config.redisPort,
      host: config.redisHost,
      family: 4,      // 4 (IPv4) or 6 (IPv6)
      password: config.redisPassword,
      db: 0
    });
  }

  // 只是存的string
  async get(key) {
    // return await this.redis.get(key);
    return await ssrCache.get(key);
  }

  // 只是存的string,过期时间设置单位为秒
  async set(key, value, expires) {
    // if (expires) {
    //   await this.redis.set(key, value, "EX", expires);
    // } else {
    //   await this.redis.set(key, value);
    // }
    await ssrCache.set(key, value);
  }

  async remove(key) {
    await this.redis.del(key);
  }
}

module.exports = new Redis();