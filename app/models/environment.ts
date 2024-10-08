import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Environment extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare environment: string
}
