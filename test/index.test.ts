// Author: Igor Dimitrijević (@igorskyflyer)

import { assert, describe, test } from 'vitest'
import { emojify } from '../src/index.js'

describe('🧪 Emojilyzer 😁 tests 🧪', () => {
  test('#1 should be true', () => {
    const result: string = emojify(`Hey there! :) How's it going? :)
I just wanted to check in and see if you're free for a coffee later today. I've got some exciting news to share!

Yesterday, I went to this amazing concert and the band was just phenomenal!
The crowd was going wild and I even got to meet the lead singer after the show!
Can you believe it?! XD

After the concert, we grabbed some delicious food and talked about all sorts of things. It was such a great night. :) Anyway, let me know if you're up for coffee! ;)

I hope everything is going well with you. ^_^ I've been super busy lately, but it's all good!

Talk soon! <3

P.S. Did you see the latest movie that came out? It was so awesome! :3 I was on the edge of my seat the whole time.

Catch you later! ;)`)

    assert.equal(
      result,
      `Hey there! 🙂 How's it going? 🙂
I just wanted to check in and see if you're free for a coffee later today. I've got some exciting news to share!

Yesterday, I went to this amazing concert and the band was just phenomenal!
The crowd was going wild and I even got to meet the lead singer after the show!
Can you believe it?! 😂

After the concert, we grabbed some delicious food and talked about all sorts of things. It was such a great night. 🙂 Anyway, let me know if you're up for coffee! 😉

I hope everything is going well with you. 😄 I've been super busy lately, but it's all good!

Talk soon! ❤️

P.S. Did you see the latest movie that came out? It was so awesome! 😸 I was on the edge of my seat the whole time.

Catch you later! 😉`
    )
  }) // #1
})
