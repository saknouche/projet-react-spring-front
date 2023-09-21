import axios from 'axios';

export class PostService {
   getPosts() {
      try {
         return axios.get('http://localhost:8080/api/v1/posts');
      } catch (error) {
         console.error(error);
      }
   }

   addPost(data) {
      try {
         return axios.post('http://localhost:8080/api/v1/posts', data);
      } catch (error) {
         console.error(error);
      }
   }

   addComment(data) {
      try {
         return axios.post('http://localhost:8080/api/v1/comment', data);
      } catch (error) {
         console.error(error);
      }
   }

   deleteComment(id) {
      try {
         return axios.delete(`http://localhost:8080/api/v1/comments/${id}`);
      } catch (error) {
         console.error(error);
      }
   }

   deletePost(id) {
      try {
         return axios.delete(`http://localhost:8080/api/v1/posts/${id}`);
      } catch (error) {
         console.error(error);
      }
   }
}
