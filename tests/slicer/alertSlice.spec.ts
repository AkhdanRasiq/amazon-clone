import reducer, { setAlert } from "../../src/features/alertSlice"
import { AnyAction } from '@reduxjs/toolkit'

import { alertDefault_mockData } from '../mockData/alert_mockData'
import { IAlert } from '../../src/utils/interface'


const testData = alertDefault_mockData

describe("alert slice should pass the test", () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {} as AnyAction)).toEqual(
    {
      ...testData
    })
  })

  it('alert status should be true to shown', () => {
    const previousState: IAlert = {
      ...testData
    }

    expect(reducer(previousState, setAlert({ status: true }))).toEqual({
      ...testData,
      status: true
    })
  })
})
