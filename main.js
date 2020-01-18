// Modules to control application life and create native browser window
const { app, Tray, BrowserWindow, Menu } = require('electron')
const path = require('path')
const { makeShairport } = require('./shairport-sync')

const iconPath = path.join(__dirname, 'static', 'tray.png')

const shairport = makeShairport()

app.dock.hide()

app.on('ready', () => {
  new BrowserWindow({ skipTaskbar: true, show: false })
  appIcon = new Tray(iconPath)
  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Exit',
      type: 'normal',
      accelerator: 'Command+Q',
      click: () => {
        shairport.stop()
        app.quit()
      },
    },
  ])
  appIcon.setContextMenu(contextMenu)
})

app.on('before-quit', () => {
  shairport.stop()
})
