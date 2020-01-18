// Modules to control application life and create native browser window
const { app, Tray, BrowserWindow } = require('electron')
const path = require('path')
const { makeShairport } = require('./shairport-sync')

const iconPath = path.join(__dirname, 'static', 'tray.png')

const shairport = makeShairport()

app.on('ready', () => {
  new BrowserWindow({ skipTaskbar: true, show: false })
  appIcon = new Tray(iconPath)
})

app.on('before-quit', () => {
  shairport.stop()
})
