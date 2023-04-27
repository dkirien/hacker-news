import { NewsFields } from '@/types'

const API_URL = process.env.API_URL

export async function getNews(): Promise<NewsFields[] | undefined> {
  if ( API_URL ) {
    const resID = await fetch(`${API_URL}/newstories.json`)
    const IDs: number[] = await resID.json()
    const res: NewsFields[] = await Promise.all(
      IDs.slice(0, 99).map(async item => {
        const res = await fetch(`${API_URL}/item/${item}.json`)
        return await res.json()
      })
    )

    return res
  }
}
