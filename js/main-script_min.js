let prevScrollpos = window.pageYOffset;

function hideElement(e) {
    const t = document.querySelector("article p:nth-last-of-type(1)");
    e.style.display = "none", t.style["-webkit-mask-image"] = "none"
}

function displayArticle(l) {
    const t = document.querySelectorAll("div.panel section");
    const e = [...[...document.querySelectorAll("div.panel div.btn-group")].map(e => [...e.children].filter(e => {
        if (e.tagName == "input".toUpperCase()) return e
    }))[0]].map(e => e.id);
    var o = [...t].map(e => e.id);
    let n = 0;
    e.forEach((e, t) => {
        e === l.id && (n = t)
    });
    for (let e = 0; e < t.length; ++e) t[e].id === o[n] ? t[e].style.display = "block" : t[e].style.display = "none"
}
window.onscroll = function() {
    var e = window.pageYOffset;
    const t = document.querySelector("header");
    prevScrollpos > e ? (t.style.position = "sticky", t.style.display = "inherited", t.style.top = "0", t.animate([{
        transform: "translateY(-90px)"
    }, {
        transform: "translateY(0px)"
    }], {
        duration: 250
    })) : t.style.position = "relative", prevScrollpos = e
};