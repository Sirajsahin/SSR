import axios from 'axios';
export const FETCH_ARTICLES = 'fetch_articles';

export const fetchArticles = source => async dispatch => {
  let url;
  // if (source) {
  //   url = `https://static.vetic.in/api/pages/dog-food-near-me`;
  // } else {
  //   url = `https://static.vetic.in/api/pages/dog-food-near-me`;
  // }
  console.log('siraj source')
  console.log(source)
  if (source) {

    // console.log(source)
    url = `https://static.vetic.in/api/pages/${source}`;
  } else {
    // url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${config.apikey}`;
    url = `https://static.vetic.in/api/pages/dog-clinic-near-me`;
  }

  const res = await axios.get(url);
  //  console.log("siraj res")
  //  console.log(res.data.data.page_content.body.main)
  dispatch({
    type: FETCH_ARTICLES,
    // payload: res.data.articles
    payload: res.data.data.page_content.body.main
  });
};


