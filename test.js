import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    { duration: '30m', target: 200000 }, // ramp-up to 20 users over 30 seconds
    // { duration: '1m', target: 20 },  // stay at 20 users for 1 minute
    // { duration: '10s', target: 0 },  // ramp-down to 0 users over 10 seconds
  ],
};

export default function () {
  let res = http.get('testUrl');
  console.log(`Response time: ${res.timings.duration} ms`);
  sleep(1); // sleep for 1 second between requests
}
