import { IWidget } from '../store/types'
import { v4 as uuidv4 } from 'uuid'

import headline from '../assets/headline.svg'
import paragraph from '../assets/paragraph.svg'
import image from '../assets/image.svg'
import { WidgetIdentifier } from '../enums'

const DEFAULT_CONTENT = 'A legendary cap set that feels like new'
const DEFAULT_BUTTON = 'Register Now'
const DEFAULT_PARAGRAPH =
  'Prompt your customer to revisit your store by showing them the products they left behind. Consider offering them\n' +
  'a coupon code to close the deal. Using the &quot;Insert&quot; panel on the right, drag and drop the Abandoned\n' +
  'Cart element onto the page below.'

export const createWidget = (type: WidgetIdentifier): IWidget => {
  let content: string
  switch (type) {
    case WidgetIdentifier.headline: {
      content = DEFAULT_CONTENT
      break
    }
    case WidgetIdentifier.paragraph: {
      content = DEFAULT_PARAGRAPH
      break
    }
    case WidgetIdentifier.button: {
      content = DEFAULT_BUTTON
      break
    }
    case WidgetIdentifier.image: {
      content = ''
      break
    }
  }
  return {
    type,
    id: uuidv4(),
    content,
  }
}

export const getIcon = (type: WidgetIdentifier) => {
  let icon
  switch (type) {
    case WidgetIdentifier.headline: {
      icon = headline
      break
    }
    case WidgetIdentifier.paragraph: {
      icon = paragraph
      break
    }
    default: {
      icon = image
      break
    }
  }
  return icon
}
