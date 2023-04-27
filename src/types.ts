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
