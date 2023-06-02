import dayjs from 'dayjs'
import { useEffect, useState, useMemo } from 'react'

export const useGetEventTime = (startTime: number, status: string) => {
  const [minute, setMinute] = useState<number>()

  const getElapsedMinutes = useMemo(() => {
    return () => {
      const currentTimestamp = Math.floor(Date.now() / 1000)

      let startTimestamp
      if (status === '1st half') {
        startTimestamp = 1
      } else if(status === '1st extra') {
        startTimestamp = 91 * 60
      } else if(status === '2nd extra') {
        startTimestamp = 106 * 60
      } else{
        startTimestamp = 46 * 60
      }
      

      const elapsedTime = currentTimestamp - startTime
      const elapsedMinutes = Math.floor((startTimestamp + elapsedTime) / 60)

      return elapsedMinutes
    }
  }, [status])

  useEffect(() => {
    const t = setInterval(() => {
      const elapsedMinutes = getElapsedMinutes()
      setMinute(elapsedMinutes)
    }, 1000)

    return () => clearInterval(t)
  })

  return minute
}
