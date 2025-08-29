<div align="center">
  <img src="https://raw.githubusercontent.com/igorskyflyer/npm-emojilyzer/main/media/emojilyzer.png" alt="Icon of Emojilyzer" width="256" height="256">
  <h1>Emojilyzer</h1>
</div>

<br>

<h4 align="center">
  💬 Emojifies strings, converting textual representations of emojis to graphical ones. 🖌️
</h4>

<br>
<br>

## 📃 Table of Contents

- [Features](#-features)
- [Usage](#-usage)
- [API](#-api)
  - [emojify()](#emojifytext-string-string)
- [Examples](#️-examples)
- [Changelog](#-changelog)
- [Support](#-support)
- [License](#-license)
- [Related](#-related)
- [Author](#-author)

<br>
<br>

## 🤖 Features

- ⚡ One‑liner API - `emojify("Hello :)")` → `"Hello 🙂"`
- 🧠 Powered by [`MappedReplacer`](https://www.npmjs.com/package/@igorskyflyer/mapped-replacer) - a blazing‑fast, battle‑tested replacement engine
- 🔍 Strict matching - no accidental half‑matches or false positives
- 🔡 Case‑insensitive - XD, xd, Xd all become 😂
- 🎨 Rich mapping set - covers classic emoticons, leetspeak, and niche faces
- 🪶 Zero config - works out of the box, no setup required
- 🛡 Safe fallback - returns original text if nothing matches

<br>
<br>

## 🕵🏼 Usage

Install it by executing any of the following, depending on your preferred package manager:

```bash
pnpm add @igorskyflyer/emojilyzer
```

```bash
yarn add @igorskyflyer/emojilyzer
```

```bash
npm i @igorskyflyer/emojilyzer
```

<br>
<br>

## 🤹🏼 API

### `emojify(text: string): string`

*Emojifies the given string `text`.*  

`text` - The string to emojify (convert textual representations of emojis to graphical ones).  

Returns the emojified string or an empty string if no input is passed.

<br>
<br>

## 🗒️ Examples

`example.ts`
```ts
import { emojify } from '@igorskyflyer/emojilyzer'

console.log(
  emojify(`Hey there! :) How's it going? :) I just wanted to check in and see if you're free for a coffee later today. I've got some exciting news to share!

Yesterday, I went to this amazing concert and the band was just phenomenal!
The crowd was going wild and I even got to meet the lead singer after the show!
Can you believe it?! XD

After the concert, we grabbed some delicious food and talked about all sorts of things. It was such a great night. :) Anyway, let me know if you're up for coffee! ;)

I hope everything is going well with you. ^_^ I've been super busy lately, but it's all good!

Talk soon! <3

P.S. Did you see the latest movie that came out? It was so awesome! :3 I was on the edge of my seat the whole time.

Catch you later! ;)`)
)

// Will log

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
```

<br>
<br>

## 📝 Changelog

📑 The changelog is available here, [CHANGELOG.md](https://github.com/igorskyflyer/npm-emojilyzer/blob/main/CHANGELOG.md).

<br>
<br>

## 🪪 License

Licensed under the MIT license which is available here, [MIT license](https://github.com/igorskyflyer/npm-emojilyzer/blob/main/LICENSE).

<br>
<br>

## 💖 Support

<div align="center">
  I work hard for every project, including this one and your support means a lot to me!
  <br>
  Consider buying me a coffee. ☕
  <br>
  <br>
  <a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="180" height="46"></a>
  <br>
  <br>
  <em>Thank you for supporting my efforts!</em> 🙏😊
</div>

<br>
<br>

## 🧬 Related

[@igorskyflyer/regkeys](https://www.npmjs.com/package/@igorskyflyer/regkeys)

> _📚 An NPM package for fetching Windows registry keys. 🗝_

<br>

[@igorskyflyer/normalized-string](https://www.npmjs.com/package/@igorskyflyer/normalized-string)

> _💊 NormalizedString provides you with a String type with consistent line-endings, guaranteed. 📮_

<br>

[@igorskyflyer/strip-headings](https://www.npmjs.com/package/@igorskyflyer/strip-headings)

> _⛸ Strips Markdown headings!🏹_

<br>

[@igorskyflyer/my-file-path](https://www.npmjs.com/package/@igorskyflyer/my-file-path)

> _🌟 An npm module that strongly types file paths! 🥊_

<br>

[@igorskyflyer/simple-exec](https://www.npmjs.com/package/@igorskyflyer/simple-exec)

> _🕺 Command. Execution. Made. Simple. ▶_

<br>
<br>
<br>

## 👨🏻‍💻 Author
Created by **Igor Dimitrijević** ([*@igorskyflyer*](https://github.com/igorskyflyer/)).
