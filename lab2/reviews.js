const addCommentBtn = document.querySelector('.add-comment-button');
const commentInputName = document.querySelector('#comment-name');
const commentText = document.querySelector('#comment-text');
const commentArea = document.querySelector("#comment-list");
const commentForm = document.querySelector('#comment-form');


commentForm.addEventListener('submit', function (event) {
  event.preventDefault(); 

  const nameValue = commentInputName.value.trim();
  const textValue = commentText.value.trim();

  if (nameValue === '' || textValue === '') {
    return; 
  }

  const comment = document.createElement('div');
  comment.classList.add('comments-item');
  comment.innerHTML = `   
                  <div class="comments-item-textbox">
                    <div class="comments-item-textbox-box">
                      <h3 class="comments-item-name">${nameValue}</h3>
                    </div>
                  </div>
                  <p class="comments-item-text">${textValue}</p>`;

  commentArea.append(comment);

  commentForm.reset();
});