import { SetupServer } from './server'

enum ExitStatus {
  failure = 1,
  success = 0
}

try {
  const server = new SetupServer()
  server.init()
  server.start()

  const exitSignals: NodeJS.Signals[] = ['SIGINT', 'SIGTERM', 'SIGQUIT']

  exitSignals.forEach(signal => {
    process.on(signal, () => {
      try {
        console.info('App exited with success')
        process.exit(ExitStatus.success)
      } catch (err) {
        console.error(`App exited with error: ${err}`)
        process.exit(ExitStatus.failure)
      }
    })
  })
} catch (err) {
  console.error(`App exited with error: ${err}`)
  process.exit(ExitStatus.failure)
}
