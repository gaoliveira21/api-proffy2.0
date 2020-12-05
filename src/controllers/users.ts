import { Controller, Post } from '@overnightjs/core'
import { Request, Response } from 'express'

@Controller('users')
export class UsersController {
  @Post('')
  public async store (request: Request, response: Response): Promise<Response> {
    return response.status(201).json()
  }
}
