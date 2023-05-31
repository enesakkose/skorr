import { type Events } from '@/types/Events'
import { useQuery } from '@tanstack/react-query'
import { getDateV2 } from '@/utils/helpers/getFormatTime'

export const getEventsV2 = async(category: string, date: number) => {
  const res = await (fetch(`/api/getEvents?category=${category}&date=${getDateV2(date)}`))
  const data: Events = await res.json()
  return data.events
}

export const getLiveEventsV2 = async(category: string) => {
  const res = await (fetch(`/api/getLiveEvents?category=${category}`))
  const data: Events = await res.json()
  return data.events
}

export const useGetEvents = (category: string, timezone: 'live' | 'all', date: number) => {
  return useQuery(['eventsV2', category, timezone], () => timezone === 'live' ? getLiveEventsV2(category) : getEventsV2(category, date))
}