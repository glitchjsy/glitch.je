// Taken directly from https://github.com/lukeed/clsx/blob/master/src/index.js
// as next is throwing render errors if i include the library
type ClassValue = string | number | ClassDictionary | ClassArray | undefined | null | false;
interface ClassDictionary {
  [key: string]: any;
}
interface ClassArray extends Array<ClassValue> { }

function toVal(mix: ClassValue): string {
  let str = '';

  if (typeof mix === 'string' || typeof mix === 'number') {
    str += mix;
  } else if (Array.isArray(mix)) {
    for (let i = 0; i < mix.length; i++) {
      const val = mix[i];
      if (val) {
        const x = toVal(val);
        if (x) {
          if (str) str += ' ';
          str += x;
        }
      }
    }
  } else if (typeof mix === 'object' && mix !== null) {
    for (const key in mix) {
      if (Object.prototype.hasOwnProperty.call(mix, key) && (mix as ClassDictionary)[key]) {
        if (str) str += ' ';
        str += key;
      }
    }
  }

  return str;
}

export function clsx(...args: ClassValue[]): string {
  let str = '';
  for (let i = 0; i < args.length; i++) {
    const tmp = args[i];
    if (tmp) {
      const x = toVal(tmp);
      if (x) {
        if (str) str += ' ';
        str += x;
      }
    }
  }
  return str;
}

export default clsx;
