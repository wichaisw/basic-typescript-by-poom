
// ANCHOR Generic Types
// return type เดียวกับ argument

import { isClassStaticBlockDeclaration } from "typescript";

// function toggle<T extends string | number>(a: string | number): string | number {
  function toggle<T extends string | number>(a: T): T {
    return a;
  }
  
  const result = toggle('hello');

  interface Book {
    id: string
    isbn: number
  }


  // ถ้า อ่าน extends ไม่ออกลองเขียนออกมาดู
  type keyOfBook = keyof Book;
  type valueOfBookKey = Book['isbn'];

  function setBookField<K extends keyof Book, V extends Book[K]>(key: K, value: V) {

  }

  // ANCHOR Utility Types
  // ANCHOR 1. Record
  const angles: Record<string, number> = {
    hello: 2,
    age: 24
  }

  type Record2<K extends keyof any, T> = {
    [P in K]: T;
  }

  type Record3 = {
    [P in string]: boolean;
  }

  const record3 : Record3 = {hello: true}


  //ANCHOR 2. Partial

  interface LanguageCode {
    en_US: string
    de_DE: string
  }

  type OptionalLanguageCode = Partial<LanguageCode>

  const langCodeMap: Partial<LanguageCode> = {
    en_US: ''
  }

  type Partial2<T> = {
    [P in keyof T]?: T[P]
  };

  type ACC = Partial2<Book>


  // ANCHOR 3. Readonly
  type ACC2 = Readonly<Book>

  type Readonly2<T> = {
    readonly [P in keyof T]: T[P];
  }

  // ANCHOR 4. Pick
type PartialBook = Pick<Book, 'id'>


// ANCHOR 5. Exclude
// remove from  Union
type LuckyNumbers = 44 | 112 | 50
type LuckyNumbersButWithout112 = Exclude<LuckyNumbers, 112>


// ANCHOR 6. Extract
// include these from Union
type BC = Extract<LuckyNumbers, 44 | 50>


// ANCHOR optional type
type CheckType<T> = T extends string
  ? 'is string'
  : T extends Number
    ? 'is number'
    // : T extends Array<infer Element>
    // : T extends [infer Head, infer Last]
    : T extends [infer Head, ...infer Tail]
      ? 'is array'
      : 'nope'

type ResultA = CheckType<'hello'>
type ResultB = CheckType<50>
type ResultC = CheckType<[50, 30]>