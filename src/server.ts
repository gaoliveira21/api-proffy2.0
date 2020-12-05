import './util/module-alias'
import { Server } from '@overnightjs/core'
import bodyParser from 'body-parser'
import { UsersController } from './controllers/users'

export class SetupServer extends Server {
  constructor (private readonly port: number = 3000) {
    super()
  }

  public init (): void {
    this.setupExpress()
    this.setupControllers()
  }

  public start (): void {
    this.app.listen(this.port, () => {
      console.info(`Server listening on port: ${this.port}`)
    })
  }

  private setupExpress (): void {
    this.app.use(bodyParser.json())
  }

  private setupControllers (): void {
    const usersControllers = new UsersController()
    this.addControllers([
      usersControllers
    ])
  }
}
