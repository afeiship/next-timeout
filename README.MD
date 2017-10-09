# next-timeout
> Timeout for next.


## usage:
```js
import 'next-timeout';

// create timeout resource:
var res = nx.timeout(()=>{
  console.log('delay 1s')
},1000);

// destroy resource:
res.destroy();
```
