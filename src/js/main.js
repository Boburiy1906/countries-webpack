import '../css/main.css';

import request from './request';

request(API).then((data) => {
  console.log(data);
}).catch((err)=> {
console.log(err);
})