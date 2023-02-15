/**
 * config.js
 *
 * Configuration from environment variables
 */


// ------------------------------------------------------------------------------------------------
// Globals
// ------------------------------------------------------------------------------------------------
const CONFIG = {
  debug: true,
  key: "", //unique node key. use 'node key -c bitcoin' to generate
  "node_info": { //public info of the node
    nbdomain: "", //nbdomain of the node
    payment: { bsv: "1Bti24c8ZQLYMTaifVkiRwJ1cwT4K6ucJu", ar: "gOyqCZBB-JmX1eDcYrIPPV71msTBBzPKwnEF3oEB-ZQ" }, //address to receive payment
    contact: "", //contact email of the owner,required for ssl certificate
  },
  chainid: 'main',
  adminKey: null, //enable remote admin features, check /api/admin endpoint
  server: {
    publicUrl: "", //public domain name or IP of the node, must set for public node and not set for private node
    port: 9000,  //local port for http service
    hideFromList: false //(optional) if add this node to /api/nodes endpoint
  },
  tld: {
    "pv": {
      "chain": "not",
      "address": {
        "payment": "15Cww7izEdyr8QskJmqwC5ETqWREZCjwz4",
        "protocol": "notp1",
      },
    }
  },
  allowIPs: [], //allowed IP to access this node
  pnodes: [],//other nodes
}
// ------------------------------------------------------------------------------------------------

module.exports = {
  CONFIG
}
