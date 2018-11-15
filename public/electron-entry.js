const { app, BrowserWindow } = require('electron')

let win
app.on('ready', () => {
  win = new BrowserWindow({
    width: 800,
    height: 600
  })
  win.on('closed', () => {
    app.quit()
  })
  win.loadFile('dist/index.html')
})
