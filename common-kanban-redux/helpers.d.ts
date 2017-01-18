export = Helpers;


declare namespace Helpers {
  export const arrayfyObject: (obj: Object) : Object[];
  export const removeKeyFromObject: (obj: Object, key: any) : Object;
  export const dateToString: (date: Date) : string;
}