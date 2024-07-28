// Author: Igor Dimitrijević (@igorskyflyer)

import { MappedReplacer } from '@igor.dvlpr/mapped-replacer'

const replacer: MappedReplacer = new MappedReplacer({
  caseSensitive: false,
  strict: true
})

replacer.addRules({
  '😅': [":')"],
  '😢': [":'("],
  '❤️': ['<3'],
  '💔': ['</3'],
  '😑': ['-_-'],
  '🤨': ['o_O'],
  '😠': ['>:('],
  '😡': ['>:['],
  '😮': ['>:O'],
  '😼': ['>:3'],
  '🫡': ['o7'],
  '😂': ['xd'],
  '🙂': [':)', ':-)'],
  '😄': ['^^', '^_^', '=)'],
  '☹️': [':(', ':-('],
  '😉': [';)', ';-)'],
  '😁': [':D', ':-D', '=D'],
  '😛': [':P', ':-P'],
  '😲': [':O', ':-O'],
  '😕': [':/', ':-/'],
  '😐': [':|', ':-|'],
  '😘': [':*', ':-*'],
  '😖': [':S', ':-S'],
  '😳': [':$', ':-$'],
  '😎': ['8D', '8-D'],
  '😸': [':3', ':-3']
})

export function emojify(text: string): string {
  return replacer.replace(text)
}
