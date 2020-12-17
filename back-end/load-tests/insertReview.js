import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 500,
  duration: '5s',
};

export default function () {
  const id = Math.floor(Math.random() * 10000000);
  let postUrl = http.post(`http://34.209.198.50/reviews/${id}`);

  const body = JSON.stringify({
    rating: 3,
    summary: 'API not taking auth correctly',
    body: 'this a a pretty ccoooool review with at least 50 characters',
    recommend: 1,
    name: 'randall',
    email: 'tim@gmail.com',
    photos: [
      'https://loremflickr.com/320/240',
      'https://loremflickr.com/320/240',
    ],
    characteristics: { 10: 5, 11: 5, 12: 5, 13: 5 },
    date: '2020-12-09T22:16:21.336Z',
  });

  var params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  check(postUrl, body, params, { 'status was 201': (r) => r.status == 201 });
}
