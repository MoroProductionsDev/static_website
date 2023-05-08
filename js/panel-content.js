function displayArticle(rdbutton) {
    const rdbtn_ids = ["rd-btn-0_to_4_weeks", "rd-btn-4_weeks_to_yr", "rd-btn-yr_to_seven_yrs", "rd-btn-seven_yrs_and_more"];
    const article_id = ["0_to_4_weeks_article", "4_weeks_to_yr_article", "yr_to_seven_yrs_article", "seven_yrs_and_more_article"];
    const articles = document.querySelectorAll('div.panel > article');

    // if (rdbutton.checked) {

        let activeIdx = 0;
        rdbtn_ids.forEach((btn_id, idx) => {
            if (rdbutton.id == btn_id) {
                activeIdx =  idx;
            }
        });

        articles.forEach((article, idx) => {
            if(idx == activeIdx) {
                article.style.display = "block";
            } else {
                article.style.display = "none";
            }
        });
    // }
}