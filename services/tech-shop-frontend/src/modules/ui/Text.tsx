import { ComponentProps, memo } from 'react'
import { Join } from '@/types'

type TextElementProps = Partial<Join<ComponentProps<'p'>, ComponentProps<'span' | 'div'>>>

export interface TextProps extends TextElementProps {
    textTransform?: (text: string) => string
    text: string | number
    element?: 'p' | 'span' | 'div'
}

const Text: React.FC<TextProps> = ({ textTransform, text, element = 'div', className,...props }) => {

    const css = `text-pretty ${className}`

    switch (element) {
        case 'p':
            return <p className={ css } { ...props }>
                { textTransform ? textTransform(text?.toString() ?? '') : text }
            </p>
        case 'span':
            return <span className={ css } { ...props }>
                { textTransform ? textTransform(text?.toString() ?? '') : text }
            </span>
        case 'div':
            return <div className={ css } { ...props }>
                { textTransform ? textTransform(text?.toString() ?? '') : text }
            </div>
        default:
            return undefined
    }
}

export default memo(Text)