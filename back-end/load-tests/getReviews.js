import http from 'k6/http';
import { check, sleep } from 'k6';
import loadBalancer from './nginxIp.js';

export let options = {
  vus: 600,
  duration: '60s',
  thresholds: {
    // 99% of requests must finish within 2000ms.
    http_req_duration: ['p(99) < 2000'],
  },
};

export default function () {
  const id = Math.floor(Math.random() * 1000000);
  const load = `http://44.235.171.62/reviews/${id}/list?count=10&relevance`;
  const localhost = `http://localhost:5000/reviews/5168867/list?count=10&relevance`;
  const url = http.get(load);
  check(url, { 'status was 200': (r) => r.status == 200 });
}
