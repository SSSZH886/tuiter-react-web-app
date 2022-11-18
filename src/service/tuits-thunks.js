import {createAsyncThunk}
  from "@reduxjs/toolkit"
import * as service
  from "./tuits-service"

  export const createTuitThunk = createAsyncThunk(
    'tuits/createTuit', async (t) => {
     const tuit =  await service.createTuit(t)
     return tuit
    }
  )


export const findTuitsThunk = createAsyncThunk(
  'tuits/findTuits', async () => {
   const tuits =  await service.findTuits()
   return tuits
  }
)
export const deleteTuitThunk = createAsyncThunk(
    'tuits/deleteTuit',
    async (tuitId) => {
      await service.deleteTuit(tuitId)
      return tuitId
  })

  export const updateTuitThunk =
  createAsyncThunk(
    'tuits/updateTuit',
    async (t) => {
    const tuit =  await service.updateTuit(t)
    return tuit
    }
)

  