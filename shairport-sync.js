const fixPath = require('fix-path')
const { spawn } = require('child_process')

module.exports.makeShairport = () => {
  fixPath() // for MacOS in order to access PATH
  const shairportSyncProcess = spawn(
    'shairport-sync',
    ['-o', 'ao', '-a', 'ss-play'],
    {
      stdio: 'inherit',
    },
  )

  return {
    stop: () => {
      shairportSyncProcess.kill()
      spawn('killall', ['shairport-sync'])
    },
  }
}
