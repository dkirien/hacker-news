interface INewsInfo {
  author: string
  date: string
  comments: string
}

export interface INewsInfoProps extends INewsInfo {
  rating: string
}

export interface INewsInfoPageProps extends INewsInfo {
  title: string
}

export type NewsFields = {
  by: string
  descendants: number
  kids: number[]
  id: number
  score: number
  time: number
  title: string
  type: string
  url: string
}

export type CommentsFields = {
  by: string
  id: number
  kids: number[]
  parent: number
  text: string
  time: number
  type: string
  dead: boolean
}

export interface PathsParams {
  paths: { params: { id: string } }[] | undefined
  fallback: 'blocking'
}
