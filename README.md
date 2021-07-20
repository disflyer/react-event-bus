# @disflyer/event-bus
a micro event bus (not only) for react
``` shell
npm install @disflyer/event-bus
yarn add @disflyer/event-bus
```
``` javascript
eventBus.on('your-event-name', () => {
  // some callback code
})
// or
eventBus.once('your-event-name', () => {
  // some callback code
})

eventBus.emit('your-event-name')

eventBus.off('your-event-name')

```