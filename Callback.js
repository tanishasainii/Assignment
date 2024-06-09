function fetchUser(id, callback) {
  setTimeout(() => {
      const user = { id, name: 'Tanisha' };
      callback(null, user);
  }, 2000);
}

function fetchPosts(id, callback) {
  setTimeout(() => {
      const posts = [
          { id: 1, title: 'Post 1' },
          { id: 2, title: 'Post 2' },
      ];
      callback(null, posts);
  }, 3000);
}

fetchUser(1, (err, user) => {
  if (err) {
      console.error(err);
  } else {
      fetchPosts(user.id, (err, posts) => {
          if (err) {
              console.error(err);
          } else {
              console.log(`User: ${user.name}`);
              console.log(`Posts: ${posts.map(post => post.title).join(', ')}`);
          }
      });
  }
});