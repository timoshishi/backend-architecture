import http from 'k6/http';
import { check, sleep } from 'k6';

// export let options = {
//   vus: 140,
//   duration: '10s',
// };
// export default function () {
//   const before = new Date().getTime();
//   const T = 6; // time needed to complete a VU iteration

//   http.get(
//     'http://localhost:3000/reviews/347817/list?count=100&sort=helpfulness&page=1'
//   );

//   const after = new Date().getTime();
//   const diff = (after - before) / 1000;
//   const remainder = T - diff;
//   if (remainder > 0) {
//     sleep(remainder);
//   } else {
//     console.warn(
//       `Timer exhausted! The execution time of the test took longer than ${T} seconds`
//     );
//   }
// }

export let options = {
  vus: 200,
  duration: '20s',
};
// increase and decrease number of virtual users
//   export let options {
//   stages: [
//     { duration: '30s', target: 20 },
//     { duration: '1m30s', target: 10 },
//     { duration: '20s', target: 0 },
//   ],
// }

export default function () {
  // const id = Math.floor(Math.random() * 10000000);
  // let url = http.get(`http://localhost:3000/reviews/${id}/list`);
  // let postUrl = http.post('http://localhost:3000/reviews/380377');

  // const body = JSON.stringify({
  //   rating: 3,
  //   summary: 'API not taking auth correctly',
  //   body: 'this a a pretty ccoooool review with at least 50 characters',
  //   recommend: 1,
  //   name: 'randall',
  //   email: 'tim@gmail.com',
  //   photos: [
  //     'https://loremflickr.com/320/240',
  //     'https://loremflickr.com/320/240',
  //   ],
  //   characteristics: { 10: 5, 11: 5, 12: 5, 13: 5 },
  //   date: '2020-12-09T22:16:21.336Z',
  // });

  // var params = {
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // };
  check(http.get('http://localhost:3333/'), {
    'status was 200': (r) => r.status == 200,
  });
  // check(url, { 'status was 200': (r) => r.status == 200 });
  // check(postUrl, body, params, { 'status was 201': (r) => r.status == 201 });
}
