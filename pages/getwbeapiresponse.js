import {react} from "react";
var axios = require('axios');

var config = {
  method: 'get',
  url: 'http://wbeproxytest.vacayou.com/Home/api/hotel/destinations?filter=Tampa',
  headers: { 
    'WBE-Api-Key': '613f426b-9713-4945-b951-be05eabb9ef2', 
    'Authorization': 'Basic d2JlLXByb3h5dGVzdDoxZWM3YThhNThkNjMzZTA5MmM3NzExMGM3MDU5MzBjYw=='
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

export default function Test(){
    return (
        <div>test</div>
    )
}