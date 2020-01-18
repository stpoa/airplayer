const { spawn } = require('child_process')

module.exports.makeShairport = () => {
  const shairportSyncProcess = spawn(
    'shairport-sync',
    ['-o', 'ao', '-a', 'ss-play'],
    {
      stdio: 'inherit',
    },
  )

  return {
    stop: () => shairportSyncProcess.kill(),
  }
}
