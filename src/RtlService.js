class RtlCssBundleService {
  constructor() {
    this.rtlApplied = false
    this.rtlStyles = [];
    this.ltrStyles = Array.from(
      document.querySelectorAll('link[rel="stylesheet"]')
    )
  }

  insert = () => {
    if (this.rtlApplied) { return }

    this.rtlApplied = true

    if (this.rtlStyles.length) {
      return this.rtlStyles.forEach(style => {
        document.body.appendChild(style)
      })
    }

    this.rtlStyles = this.ltrStyles.map(styleSheet => {
      const link = document.createElement("link")
      link.href = styleSheet.href.replace(/\.css$/, '.rtl.css')
      link.rel = "stylesheet"
      document.body.appendChild(link)
      return link
    })
  }

  detach = () => {
    this.rtlApplied = false
    this.rtlStyles.forEach(style => {
      document.body.removeChild(style)
    })
  }

  toggle = () => {
    return this.rtlApplied
      ? this.detach()
      : this.insert()
  }
}

const rtlStyles = new RtlCssBundleService()

export default rtlStyles