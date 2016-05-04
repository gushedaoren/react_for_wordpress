var API_ADDRESS = 'http://nixuchen.com';

module.exports = {
  getPostList : function() {
    return API_ADDRESS + '/wp-json/wp/v2/posts?per_page=20';
  },
  getPostDetail : function(id) {
    return API_ADDRESS + '/wp-json/wp/v2/posts/' + id;
  },

  getMedias : function() {
    return API_ADDRESS + '/wp-json/wp/v2/media?per_page=30';
  },

}
