import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 100,
  duration: '5s',
};
/*
  increase and decrease number of virtual users
  export let options {
  stages: [
    { duration: '30s', target: 20 },
    { duration: '1m30s', target: 10 },
    { duration: '20s', target: 0 },
  ],
}
  */

export default function () {
  let url = http.get('http://localhost:3000/reviews/7/list');
  check(url, { 'status was 200': (r) => r.status == 200 });
}
