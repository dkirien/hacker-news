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
  id: number
  score: number
  time: number
  title: string
  type: string
  url: string
}
