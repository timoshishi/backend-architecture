import http from 'k6/http';
import { sleep } from 'k6';
export let options = {
  vus: 600,
  duration: '60s',
  thresholds: {
    // 90% of requests must finish within 400ms.
    http_req_duration: ['p(99) < 2000'],
  },
};
export default function () {
  const before = new Date().getTime();
  const T = 6; // time needed to complete a VU iteration
  const id = Math.floor(Math.random() * 1000000);
  const loadBalancer = `54.201.22.199:5000/reviews/5168867/list?count=10&relevance`;
  const localhost = `http://localhost:5000/reviews/${id}/list?count=10&relevance`;
  http.get(localhost);
  const after = new Date().getTime();
  const diff = (after - before) / 1000;
  const remainder = T - diff;
  if (remainder > 0) {
    sleep(remainder);
  } else {
    console.warn(
      `Timer exhausted! The execution time of the test took longer than ${T} seconds`
    );
  }
}
