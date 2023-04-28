import { FC } from 'react'
import { NewsFields } from '@/types'
import NewsItem from '@/components/NewsItem'

const NewsList: FC<{ items: NewsFields[] }> = ({ items }) => {
  return (
    <>
      {items && items.map((item) => (
        <NewsItem news={item} key={item.id}/>
      ))}
    </>
  )
}

export default NewsList
