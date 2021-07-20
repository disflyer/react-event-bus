type IdKey = string | string[]
class EventBus {
  events = new Map()
  emit(id: IdKey, params?: any) {
    const cache: Function[] = this.events.get(id)
    if (!cache) {
      return console.warn(`[${id}]`, 'no event listening')
    }
    cache.forEach((cb) => cb(params))
  }

  on(id: IdKey, callback: () => void) {
    const cache: Function[] = this.events.get(id)
    if (cache?.some(callback)) {
      return console.warn(`[${id}]`, 'same callback has been add more than one time')
    }
    if (cache) {
      this.events.set(id, [...cache, callback])
    } else {
      this.events.set(id, [callback])
    }
  }

  once(id: IdKey, callback: () => void | Promise<void>) {
    this.on(id, async () => {
      await callback()
      this.off(id, callback)
    })
  }

  off(id: IdKey, callback?: () => void) {
    const cache: Function[] = this.events.get(id)
    if (cache) {
      if (callback) {
        this.events.set(
          id,
          cache.filter((cb) => callback !== cb)
        )
      } else {
        this.events.delete(id)
      }
    }
  }
}
const eventBus = new EventBus()

export default eventBus
