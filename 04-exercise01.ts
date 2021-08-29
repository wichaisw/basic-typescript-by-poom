type Input = {
  title: {
    type: 'string'
  },
  age: {
    type: 'number'
  },
  members: {
    type: 'array',
    value: {type: number}
  }
}

// ต้องการ type
type Output = {
  [K in keyof Input]: Input[K]['type']
}
