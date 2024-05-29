import { type ObjectId } from 'mongodb'

export interface IAudit {
  _id: ObjectId
  userId: string
  userName: string
  action: string
  documentId: string
  createdAt: Date
  collection: string
}

export const auditCollection = 'audit'
