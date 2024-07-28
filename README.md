<h1 align="center">Emojilyzer</h1>

<br>

<div align="center">
	<img src="https://raw.githubusercontent.com/igorskyflyer/npm-emojilyzer/main/assets/icon.png" width="128" height="128" alt="Emojilyzer logo">
</div>

<br>

<div align="center">
	💬 Emojifies strings, converting textual representations of emojis to graphical ones. 🖌️
</div>

<br>
<br>

<div align="center">
	<blockquote>
		<br>
		<h4>💖 Support further development</h4>
		<span>I work hard for every project, including this one
		<br>
		and your support means a lot to me!
		<br>
		<br>
		Consider buying me a coffee. ☕
		<br>
		<strong>Thank you for supporting my efforts! 🙏😊</strong></span>
		<br>
		<br>
		<a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="150"></a>
		<br>
		<br>
		<a href="https://github.com/igorskyflyer"><em>@igorskyflyer</em></a>
		<br>
		<br>
		<br>
	</blockquote>
</div>

<br>
<br>

## 📃 Table of contents

- [Usage](#-usage)
- [API](#-api)
      [emojify()](#emojifytext-string-string)
- [Examples](#-examples)
- [Changelog](#-changelog)
- [License](#-license)
- [Related](#-related)
- [Author](#-author)

<br>
<br>

## 🕵🏼 Usage

Install it by executing:

```shell
npm i "@igor.dvlpr/emojilyzer"
```

<br>

## 🤹🏼 API

### `emojify(text: string): string`

*Emojifies the given string `text`.*  

`text` - The string to emojify (convert textual representations of emojis to graphical ones).  

Returns the emojified string or an empty string if no input is passed.

---

## ✨ Examples

`example.ts`
```ts
import { emojify } from '@igor.dvlpr/emojilyzer'

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

---

## 📝 Changelog

📑 The changelog is available here: [CHANGELOG.md](https://github.com/igorskyflyer/npm-emojilyzer/blob/main/CHANGELOG.md).

---

## 🪪 License

Licensed under the MIT license which is available here, [MIT license](https://github.com/igorskyflyer/npm-emojilyzer/blob/main/LICENSE).

---

## 🧬 Related

[@igor.dvlpr/regkeys](https://www.npmjs.com/package/@igor.dvlpr/regkeys)

> _📚 An NPM package for fetching Windows registry keys. 🗝_

<br>

[@igor.dvlpr/normalized-string](https://www.npmjs.com/package/@igor.dvlpr/normalized-string)

> _💊 NormalizedString provides you with a String type with consistent line-endings, guaranteed. 📮_

<br>

[@igor.dvlpr/strip-headings](https://www.npmjs.com/package/@igor.dvlpr/strip-headings)

> _⛸ Strips Markdown headings!🏹_

<br>

[@igor.dvlpr/my-file-path](https://www.npmjs.com/package/@igor.dvlpr/my-file-path)

> _🌟 An npm module that strongly types file paths! 🥊_

<br>

[@igor.dvlpr/simple-exec](https://www.npmjs.com/package/@igor.dvlpr/simple-exec)

> _🕺 Command. Execution. Made. Simple. ▶_

---

<br>

### 👨🏻‍💻 Author
Created by **Igor Dimitrijević** ([*@igorskyflyer*](https://github.com/igorskyflyer/)).
