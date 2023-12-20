

const addCourseForm = document.getElementById('addCourseForm');
addCourseForm.addEventListener('submit',async (e) => {
  const name = document.getElementById('name').value;
  const theme = document.getElementById('theme').value;
  const diff = document.getElementById('difficulty').value;
  const description = document.getElementById('descr').value;
  sessionStorage.setItem('course_name', name);
  sessionStorage.setItem('theme', theme);
  sessionStorage.setItem('diff', diff);
  sessionStorage.setItem('description', description);
});

/*async function addCourseToDb(name, theme, diff, description){
  const postData = {
    name: name,
    descr:description,
    num:diff,
    is_approved: false,
    href:"course_information_page.html",
    next: null
  };

  // Get a key for a new Post.

  // Write the new post's data simultaneously in the posts list and the user's post list.
  const updates = {};
  updates['/posts/' + newPostKey] = postData;
  updates['/user-posts/' + uid + '/' + newPostKey] = postData;

  return update(ref(db), updates);
}*/

