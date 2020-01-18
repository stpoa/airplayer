// Modules to control application life and create native browser window
const { app, Tray } = require('electron')
const path = require('path')
const { makeShairport } = require('./shairport-sync')

const iconPath = path.join(__dirname, 'static', 'tray.png')

let shairport

app.on('ready', () => {
  appIcon = new Tray(iconPath)
  shairport = makeShairport()
})

app.on('before-quit', () => {
  shairport.stop()
})
