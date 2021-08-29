type User  = {username: string};

type Action = 
  | {type: 'setUser', payload: User}
  | {type: 'getUser', payload: undefined, error: Error}


function reducer (state: User, action: Action) {
  if(action.type === 'setUser') {
    action.payload
  }
}

type Hello = {name: string} & {name: number}
// string กับ number intersect กันไมไ่ด้เลยเป็น never
// const hello2: Hello = {name: 10};

type Hello2 = {name: string} | {name: number}
const hello2: Hello2 = {name: 10};

type Hello3 = {name: string} | {userId: number}
const hello3: Hello3 = {name: 'Sam'};


type stringAndNumber = string & number;
type StringHello = string & 'Hello';

interface Person5 {
  username: string,
  age?: string,
  isSitting?: boolean,
}

const person5: Person5 = {
  username: 'hello"',
  age: 'hello',
}

function fetchUser(username:string, context?: unknown) {

}

// ANCHOR Type Casting: As and As Unknown
function loadTwitterFeed(hello: string) {
  //  ถ้าผิด compiler จะไม่ช่วย เพราะเราการันตีและบังคับ type system ให้ทำตามเรา
  // แต่จะ cast ต้องมี intersect ไม่อย่างนั้นบังตับ cast เป็น unknown ก่อน ค่อยเปลี่ยน type
  // แต่ไม่แนะนำ
  const hello2 = (hello as unknown) as number;
}

// ANCHOR enum vs enum with string value
// เป็น runtime feature
enum Version {
  v1 = 'v1', // ถ้าไม่กำหนดค่าจะ log ได้ index
  v2 = 'v2',
}

function setBackend(version: Version) {
  if(version === Version.v1) {
    console.log(version)
  }
}

setBackend(Version.v1)


// ANCHOR as const
const a = [1024,2048] as const;

type K2 = [1024, 2048][number];

// ANCHOR Type Narrowing and Widening

// type predicate
const isHello = (name: string): name is 'Hello' => true;

function sayHello2(name: string) {
  if(name == 'string') {
    console.log(name);
  }

  if(isHello(name)) {

  }
}