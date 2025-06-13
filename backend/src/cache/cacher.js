import axios from "axios";
import NodeCache from "node-cache";

export class HttpCacher {
  constructor(name, sourceUrl, ttl, checkPeriod) {
    this.name = name;
    this.sourceUrl = sourceUrl;

    this.cache = new NodeCache({
      stdTTL: ttl,
      checkperiod: checkPeriod,
      deleteOnExpire: false,
    });

    this.cache.on("expired", this.refreshCache.bind(this));
  }

  async initializeCache() {
    try {
      const response = await axios.get(this.sourceUrl);
      this.cache.set(this.name, response.data);
      console.log(`Preloaded cache for ${this.name}`);
    } catch (error) {
      console.error(`ERROR: Failed to preload ${this.name}`);
    }
  }

  async refreshCache(key, oldValue) {
    try {
      const response = await axios.get(this.sourceUrl);
      this.cache.set(key, response.data);
      console.log(`Refreshed cache for ${this.name}`);
    } catch (err) {
      console.error(`Refresh failed. Re-using old cache for ${this.name}`, key);
      this.cache.set(key, oldValue); // Re-cache old data
    }
  }

  get() {
    return this.cache.get(this.name);
  }
}
