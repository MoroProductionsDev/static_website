function hideElement(anchorBtn) {
    const lastVisibleParagraph = document.querySelector('article p:nth-last-of-type(1)');

    anchorBtn.style.display = "none";
    lastVisibleParagraph.style["-webkit-mask-image"] = "none";
}