// Author: Igor Dimitrijević (@igorskyflyer)

import { MappedReplacer } from '@igorskyflyer/mapped-replacer'

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

/**
 * Emojifies the given string `text`.
 * @param text The string to emojify (convert textual representations of emojis to graphical ones).
 * @returns The emojified string or an empty string if no input is passed.
 */
export function emojify(text: string): string {
  return replacer.replace(text)
}
