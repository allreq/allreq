import newAllReq from './newAllReq';

const allreq = newAllReq(
  (item) => item !== undefined,
  () => undefined
);

export default allreq;
