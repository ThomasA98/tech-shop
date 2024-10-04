import clsx from 'clsx'
import { ComponentProps, memo } from 'react'

type TagProps = ComponentProps<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' >

export interface TitleProps extends TagProps {
    size?: '1' | '2' | '3' | '4' | '5' | '6'
}

const Title: React.FC<TitleProps> = ({ size = '1', ...props }) => {

    const Tag = `h${ size }`

  return (
    <Tag
      { ...props }
      { ...{
        className: clsx(
            'text-balance font-bold capitalize',
            {
                'text-5xl': size === '1',
                'text-4xl': size === '2',
                'text-3xl': size === '3',
                'text-2xl': size === '4',
                'text-xl': size === '5',
                'text-lg': size === '6',
            },
          )
      }}
    />
  )
}

export default memo(Title)