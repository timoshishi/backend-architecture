import $ from 'jquery';

const Parse = {
  server: 'http://34.209.198.50/reviews',
  // backendServer: `http://localhost:5000/reviews`,
  productId: 5168867,
  getAllList: function (successCB, errorCB = null) {
    console.log('here');
    $.ajax({
      url: `${Parse.server}/${Parse.productId}/list?count=100&sort=relevant`,
      type: 'GET',
      contentType: 'application/json',
      data: {},
      success: successCB,
      error:
        errorCB ||
        function () {
          console.error(
            'Failed to fetch list of reviews sorted by relevance from Greenfield'
          );
        },
    });
  },
  getAllListHelpfulness: function (successCB, errorCB = null) {
    $.ajax({
      url: `${Parse.server}/${Parse.productId}/list?count=100&sort=helpfulness`,
      type: 'GET',
      contentType: 'application/json',
      data: {},
      success: successCB,
      error:
        errorCB ||
        function () {
          console.error(
            'Failed to fetch list of reviews sorted by helpfulness from Greenfield'
          );
        },
    });
  },
  getAllListNewest: function (successCB, errorCB = null) {
    $.ajax({
      url: `${Parse.server}/${Parse.productId}/list?count=100&sort=newest`,
      type: 'GET',
      contentType: 'application/json',
      data: {},
      success: successCB,
      error:
        errorCB ||
        function () {
          console.error(
            'Failed to fetch list of reviews sorted by newest from Greenfield'
          );
        },
    });
  },
  getProductMeta: function (successCB, errorCB = null) {
    $.ajax({
      url: `${Parse.server}/${Parse.productId}/meta`,
      type: 'GET',
      contentType: 'application/json',
      data: {},
      success: successCB,
      error:
        errorCB ||
        function () {
          console.error('Failed to fetch meta of reviews from Greenfield');
        },
    });
  },
  markAsHelpful: function (id, successCB, errorCB = null) {
    $.ajax({
      url: `${Parse.server}/helpful/${Parse.productId}`,
      type: 'PUT',
      contentType: 'application/json',
      data: {},
      success: successCB,
      error:
        errorCB ||
        function () {
          console.error('Failed to mark review as helpful on Greenfield');
        },
    });
  },
  submitReview: function (obj, successCB, errorCB = null) {
    console.log(JSON.stringify(obj));
    $.ajax({
      url: Parse.server,
      type: 'Post',
      contentType: 'application/json',
      data: obj,
      success: successCB,
      error:
        errorCB ||
        function () {
          console.error('Error when submiting review on Greenfield');
        },
    });
  },
  getAllProductList: function (successCB, errorCB = null) {
    $.ajax({
      url: `http://52.26.193.201:3000/products/list?count=20`,
      type: 'GET',
      contentType: 'application/json',
      data: {},
      success: successCB,
      error:
        errorCB ||
        function () {
          console.error('Failed to fetch list of products from Greenfield');
        },
    });
  },
  reportReview: function (id, successCB, errorCB = null) {
    $.ajax({
      url: `${Parse.server}/report/${Parse.productId}`,
      type: 'PUT',
      contentType: 'application/json',
      data: {},
      success: successCB,
      error:
        errorCB ||
        function () {
          console.error('Failed to report review on Greenfield');
        },
    });
  },
};

export default Parse;
