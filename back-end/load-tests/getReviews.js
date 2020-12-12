import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 1000,
  duration: '20s',
  thresholds: {
    // 90% of requests must finish within 400ms.
    http_req_duration: ['p(99) < 2000'],
  },
};

export default function () {
  const id = Math.floor(Math.random() * 1000000);
  let url = http.get(
    `http://localhost:5000/reviews/${id}/list?sort=helpfulness&count=10`
  );
  sleep(1);
  check(url, { 'status was 200': (r) => r.status == 200 });
}
