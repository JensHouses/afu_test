import 'katex/dist/katex.min.css'
import katex from 'katex'
import renderMathInElement from 'public/katex/contrib/auto-render'

export default defineNuxtPlugin(() => {
    if (process.client) {
        renderMathInElement(document.body, {
            delimiters: [
                {left: "$$", right: "$$", display: true},
                {left: "$", right: "$", display: false}
            ]
        })
    }
})