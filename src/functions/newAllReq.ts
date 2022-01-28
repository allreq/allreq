export type Resolver<IN> = (anyArg: IN) => boolean;
export type Rejector<IN, OUT> = (invalidArg: IN) => OUT;

export type AllReqFunction<IN, OUT> = (
  strArr: TemplateStringsArray,
  ...args: IN[]
) => string | OUT;

const newAllReq = function <IN = any, OUT = undefined>(
  resolver: Resolver<IN>,
  rejector: Rejector<IN, OUT>
): AllReqFunction<IN, OUT> {
  if (
    (typeof resolver === 'function' && //
      typeof rejector === 'function') === false
  ) {
    throw new Error('Invalid Type');
  }

  return function (strArr: TemplateStringsArray, ...args: IN[]) {
    const len = strArr.length;
    let str = '',
      arg;
    for (let i = 0; i < len; i++) {
      arg = args[i];
      if (!resolver(arg) && i < len - 1) return rejector(arg);
      str += strArr[i] + (arg || '');
    }
    return str;
  };
};

export default newAllReq;
