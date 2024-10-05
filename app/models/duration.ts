import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Duration extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare duration: string
}
