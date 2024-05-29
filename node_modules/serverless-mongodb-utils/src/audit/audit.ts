import { type ObjectId } from 'mongodb'
import { connectToDb } from '../dbUtils'
import { type IAudit, auditCollection } from '../entities/Audit'
import { Audit } from '../modules/Audit'

export const auditRecord = async (userId: ObjectId, userName: string, action: string, id: string | undefined, date: Date, collection: string): Promise<void> => {
  // Store the audit record in the database
  const auditRecord = new Audit()
  auditRecord.userId = userId.toString()
  auditRecord.action = action
  auditRecord.documentId = id ?? ''
  auditRecord.createdAt = date
  auditRecord.userName = userName
  auditRecord.collection = collection
  const db = await connectToDb()
  const repo = db.collection<IAudit>(auditCollection)
  await repo.insertOne(auditRecord)
}
