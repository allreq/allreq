# **_`allreq`_**

_Declarative conditional template literal string type._

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![License][license-image]][license-url]
[[changelog]](CHANGELOG.md)

---

```js
npm install allreq
```

```js
yarn add allreq
```

---

## **_`Examples`_**

```typescript
import { allreq } from 'allreq';

let v = allreq`this could be undefined.
               if ${undefined} is undefined.`;

v === undefined; // true
```

#### _This is how to make a new allreq._

```typescript
import { newAllReq } from 'allreq';

const allreq = newAllReq(
  (anyArg: number) => anyArg <= 5,
  (invalidArg) => `${invalidArg} is <= 5`
);

let v = allreq`${0}, ${1}, ${2}, ${999} these are all <= 5`;

v === '999 is <= 5'; // true
```

## **License**<br>

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/allreq.svg
[npm-url]: https://npmjs.org/package/allreq
[downloads-image]: https://img.shields.io/npm/dm/allreq.svg
[downloads-url]: https://npmcharts.com/compare/allreq?minimal=true
[license-url]: https://opensource.org/licenses/MIT
[license-image]: https://img.shields.io/npm/l/allreq
