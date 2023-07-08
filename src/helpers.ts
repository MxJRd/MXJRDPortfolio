export const fetchButtonSize = (size: string) => {
  switch(size) {
    case 'small':
      return 'p-1'
    case 'medium':
      return 'p-2'
    case 'large':
      return 'p-3'
  }
}

export const fetchSVGSize = (size: string) => {
  switch(size) {
    case 'small':
      return 'w-4'
    case 'medium':
      return 'w-8'
    case 'large':
      return 'w-8'
  }
}

class MatrixTextScrambler {
  el: HTMLParagraphElement
  chars: string
  queue: Array<any>
  resolve: any
  frame: number
  frameRequest: number
  constructor(el: HTMLParagraphElement, queue: Array<any> = [], resolve: (value?: unknown) => void, frame: number = 0, frameRequest: number = 0) {
    this.el = el
    this.chars = '!<>-_\\/[]{}—=+*^?#________'
    this.update = this.update.bind(this)
    this.queue = queue
    this.resolve = resolve
    this.frame = frame
    this.frameRequest = frameRequest
  }
  setText(newText: string) {
    const oldText = this.el.innerText!
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise((resolve) => this.resolve = resolve)
    this.queue = []
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)
      this.queue.push({ from, to, start, end })
    }
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }
  update() {
    let output = ''
    let complete = 0
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.4) {
          char = this.randomChar()
          this.queue[i].char = char
        }
        output += `<span class="text-blue-300">${char}</span>`
      } else {
        output += from
      }
    }
    this.el.innerHTML = output
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)]
  }
}

export default MatrixTextScrambler
