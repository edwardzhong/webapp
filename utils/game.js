class Pack {
  constructor(x, y, r, s) {
    this.x = x
    this.y = y
    this.rotate = r
    this.speed = s
    this.time = new Date()
    this.elem = document.createElement('div')
    this.elem.className = 'red-pack'
    this.elem.style.cssText = `left:${this.x}px;transform:rotate(${this.rotate}deg);`
  }

  draw() {
    this.elem.style.top = `${this.y}px`
  }
}

export default class Stage {
  constructor(elem) {
    this.container = elem
    this.H = window.innerHeight
    this.W = window.innerWidth
    this.list = []
    this.isStop = false
    this.time = new Date()
    this.last = new Date()
  }

  create() {
    const t = new Date()
    if (this.time === this.last || t - this.last > 100) {
      this.last = t
      const x = Math.random() * (this.W - 60)
      const r = (Math.floor(Math.random() * 2) * 2 - 1) * Math.random() * 45
      const s = this.H / 100 + Math.round(Math.random() * 5)
      const pack = new Pack(x, 0, r, s)
      this.container.appendChild(pack.elem)
      this.list.push(pack)
    }
  }

  update() {
    const duration = 2000
    for (let i = 0, p; i < this.list.length; i++) {
      p = this.list[i]
      // p.y += p.speed
      const t = new Date() - p.time
      p.y = easeOut(t, 0, this.H, duration)
      if (p.y > this.H - 60 || t > duration) {
        this.list.splice(i--, 1)
        this.container.removeChild(p.elem)
      } else {
        p.draw()
      }
    }
  }

  start() {
    this.time = this.last = new Date()
    const animate = () => {
      if (!this.isStop && new Date() - this.time < 9 * 1000) {
        // this.list.forEach((n) => {
        //   that.container.removeChild(n.elem)
        // })
        this.create()
      }
      this.update()
      if (!this.list.length) {
        return
      }
      requestAnimationFrame(animate)
    }
    animate()
  }

  stop() {
    this.isStop = true
  }
}

function linear(t, b, c, d) {
  return (c * t) / d + b
}
function easeIn(t, b, c, d) {
  return c * (t /= d) * t + b
}
function easeOut(t, b, c, d) {
  return -c * (t /= d) * (t - 2) + b
}
function easeInOut(t, b, c, d) {
  if ((t /= d / 2) < 1) return (c / 2) * t * t + b
  return (-c / 2) * (--t * (t - 2) - 1) + b
}
