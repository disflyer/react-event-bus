import path from 'path'

export default {
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'event-bus'
    },
  }
}