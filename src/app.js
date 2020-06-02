import { http } from './http';
import { ui } from './ui';

// get Post on DOM <Load></Load>
document.addEventListener('DOMContentLoaded', getPosts);
// Add Submit Button Event
const postSubmit = document.querySelector('.post-submit');
postSubmit.addEventListener('click', submitPost);

function getPosts() {
  http
    .get('http://localhost:3000/posts')
    .then((data) => ui.showPosts(data))
    .catch((err) => console.error(err));
}

function deletePost(e) {
  if (e.target.parentElement.classList.contains('delete')) {
    const id = e.target.parentElement.dataset.id;
    if (confirm('Are You Sure to Delete This Post?')) {
      http
        .delete(`http://localhost:3000/posts/${id}`)
        .then((data) => {
          ui.showAlert('Post Removed', 'alert alert-success');
          getPosts();
        })
        .catch((err) => console.log(err));
    }
  }
  e.preventDefault();
}

document.querySelector('#posts').addEventListener('click', deletePost);
//  Submit post
function submitPost() {
  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;

  const data = {
    title,
    body,
  };

  // Post data
  http
    .post('http://localhost:3000/posts', data)
    .then((data) => {
      ui.showAlert('Post added', 'alert alert-success');
      ui.clearFields();
      getPosts();
    })
    .catch((err) => console.log(err));
}
