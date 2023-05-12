function displayArticle(rdbutton) {
    const sections = document.querySelectorAll('div.panel section');    // get the sections for each paragraphs of the div.panel (NodeList)
    const btnGroup = document.querySelectorAll('div.panel div.btn-group'); // get the div.btn-group element (NodeList)
    // get all the inputs button of type radion in the div.btn-group
    const rdbtn_inputs = [...btnGroup].map(input => [...input.children].filter(child => {
        if(child.tagName == "input".toUpperCase()) {
            return child;
        }
        }));
    const rdbtn_ids = [...rdbtn_inputs[0]].map(rdbtn => rdbtn.id); // make a copy of all the radio buttons id
    const section_ids = [...sections].map(section => section.id) // make a copy of all the section ids that identify that unique section

    let activeIdx = 0;
    rdbtn_ids.forEach((btn_id, idx) => {
        // find the target id match and set the appropiate index found later to be use for the sections
        if (btn_id === rdbutton.id) {
            activeIdx =  idx;
        }
    });
    
    for (let idx = 0; idx < sections.length; ++idx) {
        console.log(`${sections[idx].id} === ${section_ids[activeIdx]}`);

        // compare the active index section with to hide or show the content of the session.
        if(sections[idx].id == section_ids[activeIdx]) {
            sections[idx].style.display = "block";
        } else {
            sections[idx].style.display = "none";
        }
    }
}