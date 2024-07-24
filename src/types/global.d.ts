import { ApiProblems } from './api';

declare global {
  type CustomObject<Type> = {
    [key: string]: Type;
  };
  type WithApiResult<T> = { kind: 'ok'; data: T } | ApiProblems;
}

export {};
