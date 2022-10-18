/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PropTypes from 'prop-types'; // ES6
import { fetchArticles } from '../actions';
import Home from '../website/home/index';
// import  fetchArticlesdata  from '../actions';
// import ArticleDetailModal from '../components/ArticleDetailModal';
// console.log()
const HomePage = props => {
  const {articles}=props
  console.log('siraj prop')
  const doc=articles
//   console.log(doc)
  const [modal, setModal] = useState(false);
  const [currentArticle, setCurrentArticle] = useState({});

  const readArticle = article => {
    setCurrentArticle(article);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };



  const head = () => {
    return (
      <Helmet key={Math.random()}>
       <title>
       Best Veterinary Clinic in Gurgaon |  Pet hospital nearby in Gurgaon - Vetic
        </title>
        <meta
          id="meta-description"
          name="description"
        content="India's First tech-integrated chain of modern veterinary clinics  in Gurgaon to cater to all your pet needs such as wellness, consultations, grooming & nutrition."
      />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://vetic.in" />
         
      </Helmet>
    );
  };

  const { fetchArticles: loadArticles } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
    loadArticles();
  }, [loadArticles]);
  return (
    <div>
      {head()}
      
        
         <Home doc={doc} />
      
    </div>
  );
};

const mapStateToProps = state => {
  return {
    articles: state.articles
    
  };
};

const loadData = store => {
  // console.log('hh store')
  // console.log({store})
  // For the connect tag we need Provider component but on the server at this moment app is not rendered yet
  // So we need to use store itself to load data

  return store.dispatch(fetchArticles()); // Manually dispatch a network request
};

HomePage.propTypes = {
  // articles: PropTypes.arrayOf(PropTypes.any),
  articles: PropTypes.objectOf(PropTypes.any),
  fetchArticles: PropTypes.func
  // console.log('hh store')
  // console.log({store})
};

HomePage.defaultProps = {
  articles: [],
  fetchArticles: null
};

export default {
  component: connect(
    mapStateToProps,
    { fetchArticles }
  )(HomePage),
  loadData
};
