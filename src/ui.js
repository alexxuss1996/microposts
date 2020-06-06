class UI {
  constructor() {
    this.post = document.querySelector('#posts');
    this.bodyInput = document.querySelector('#body');
    this.titleInput = document.querySelector('#title');
    this.idInput = document.querySelector('#id');
    this.postSubmit = document.querySelector('.post-submit');
    this.forState = 'add';
  }

  showPosts(posts) {
    let output = ``;

    posts.forEach((post) => {
      output += `
			<div class="card mt-3 mb-3">
				<div class="card-body">
					<h4 class="card-title">${post.title}</h4>
					<p class="card-text">${post.body}</p>
					<a href="#" class="edit card-link" data-id="${post.id}">
						<i class="fa fa-pencil"></i>
					</a>
					<a href="#" class="delete card-link" data-id="${post.id}">
						<i class="fa fa-remove"></i>
					</a>
				</div>
			</div>		
		`;
    });

    this.post.innerHTML = output;
  }

  showAlert(message, className) {
    this.clearAlert();
    const div = document.createElement('div');
    const posts = document.querySelector('#posts');
    const container = document.querySelector('.posts-container');
    div.className = className;
    div.appendChild(document.createTextNode(message));
    container.insertBefore(div, posts);
    // Clear Alert after 3 seconds
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  clearAlert() {
    const currentAlert = document.querySelector('.alert');
    if (currentAlert) {
      currentAlert.remove();
    }
  }

  clearIdInput() {
    this.idInput.value = '';
  }

  clearFields() {
    this.titleInput.value = '';
    this.bodyInput.value = '';
  }

  fillForm(data) {
    this.idInput.value = data.id;
    this.titleInput.value = data.title;
    this.bodyInput.value = data.body;

    this.changeFormState('edit');
  }

  changeFormState(type) {
    if (type === 'edit') {
      this.postSubmit.textContent = 'Update Post';
      this.postSubmit.className = 'post-submit btn btn-warning btn-block';
      // Cancel button
      const button = document.createElement('button');
      button.className = 'post-cancel btn btn-secondary btn-block';
      button.appendChild(document.createTextNode('Cancel'));
      // Get parent & insert
      const cardForm = document.querySelector('.card-form');
      const formEnd = document.querySelector('.form-end');
      cardForm.insertBefore(button, formEnd);
    } else {
      this.postSubmit.textContent = 'Post It';
      this.postSubmit.className = 'post-submit btn btn-primary btn-block';
      if (document.querySelector('.post-cancel')) {
        document.querySelector('.post-cancel').remove();
      }
      this.clearIdInput();
      this.clearFields();
    }
  }
}

export const ui = new UI();
