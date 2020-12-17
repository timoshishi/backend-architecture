import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 1000,
  duration: '20s',
  thresholds: {
    // 99% of requests must finish within 2000ms.
    http_req_duration: ['p(99) < 2000'],
  },
};

export default function () {
  const id = Math.floor(Math.random() * 1000000);
  const loadBalancer = `http://ec2-34-209-198-50.us-west-2.compute.amazonaws.com/reviews/${id}/list?count=10&relevance`;
  // const localhost = `http://localhost:5000/reviews/${id}/list?count=10&relevance`;
  const url = http.get(loadBalancer);
  check(url, { 'status was 200': (r) => r.status == 200 });
}
