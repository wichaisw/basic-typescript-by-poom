
// ANCHOR Generic Types
// return type เดียวกับ argument
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