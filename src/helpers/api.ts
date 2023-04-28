import { CommentsFields, NewsFields } from '@/types'

const API_URL = process.env.NEXT_PUBLIC_API_URL

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

export async function getNewsById(id: string): Promise<NewsFields | undefined> {
  if ( API_URL ) {
    const res = await fetch(`${API_URL}/item/${id}.json`)
    const data = await res.json()

    return data
  }
}

export async function getCommentsById(idArr: number[]): Promise<CommentsFields[] | undefined> {
  if ( API_URL ) {
    const res: CommentsFields[] = await Promise.all(
      idArr.map(async item => {
        const res = await fetch(`${API_URL}/item/${item}.json`)
        return await res.json()
      })
    )

    return res
  }
}
