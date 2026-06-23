import { Router } from 'express'
import { Model } from 'mongoose'

export const createModelRouter = <T>(resource: string, entityModel: Model<T>) => {
  const router = Router()

  router.get('/', async (_request, response, next) => {
    try {
      const items = await entityModel.find().sort({ createdAt: 1 }).lean()
      response.json({ resource, items })
    } catch (error) {
      next(error)
    }
  })

  return router
}