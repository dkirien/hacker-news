import { FC } from 'react'
import NewsItem from '@/components/NewsItem'
import { NewsFields } from '@/types'

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
