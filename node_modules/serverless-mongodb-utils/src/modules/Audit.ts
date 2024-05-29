import { type ObjectId } from 'mongodb'
import { type IAudit } from '../entities/Audit'

export class Audit implements IAudit {
  _id!: ObjectId
  userId!: string
  userName!: string
  action!: string
  documentId!: string
  createdAt!: Date
  collection!: string
}
