// ANCHOR union
const sayHello = (name: 'Bob' | 'Alice') => {
  console.log(`Says ${name}`);
}

sayHello('Bob');

// ANCHOR กำหนดค่าและ type ของ array ใน array
const grid: (boolean | 5)[][] = [[], [5, false]];


// ANCHOR tuple ชี้ type โดยกำหนด order ของ type
function useState(): [number, () => void] {
  return [1024, () => {}];
}

const [counter, setCounter] = useState();

// ANCHOR Tuple example
// ใส่ key (type alias) ให้ได้ แต่ใส่ตัวนึงจะต้องให้ทั้งหมด
const person:[name: string, age: number, isSLeeping: boolean] = ['Noom', 26, true];


// ANCHOR unknown vs any
// any: disable compiler checks for that variable
// unknown: not yet sure ไป assert ในฟังก์ชันเอา
function add(a: unknown, b: any) {
  if(typeof a === 'number') {

  }
}

add(10, 20);

function add2(): void {
  // return 1024;
}

// ANCHOR never: to communicate that this function will not return
// function which will not return to its end point or always throws an exception.
function add3(): never {
  while(true) {};
}

function throwError(errorMsg: string): never { 
  throw new Error(errorMsg); 
} 

// Type Guard
// 1. typeof
// ANCHOR 2. predicate: function returning boolean
const isPerson = (person: unknown): person is {name: string} => true;

function getName(person: unknown) {
  if(isPerson(person)) {
    person.name;
  }
}


function earlyReturn(): string | undefined {
  return;

  return "string";
}

// ANCHOR กำหนด type ของ object
// ใส่ ตรงๆ
const person2: {
  name: string,
  age: number,
} = {
  name: 'Sam',
  age: 22,
}

// กำหนด key 
const person3: {
  [key:string]: number
} = {
  name: 222,
}

// ANCHOR interface & type
interface BaseProps {
  role: string;
}

interface Person extends BaseProps {
  name: string;
} 

const person4: Person = {
  name: 'Hello',
  role: 'hello'
}

type Actions = { type: 'setUser' } | { type: 'getUser'};

// Union, type alias (key) ใช้ type ทำได้ แต่ interface ทำไม่ได้
// ส่วนใหญ่ใช้ interface ก่อน ถ้าไม่ได้ค่อยใช้ type


type Angle = 0 | 90 | 180 | 270 | 360;

function setAngle(angle: Angle) {

}

type A = Record<string, any>;