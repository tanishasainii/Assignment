//Conversion of the Callback code to Promises and Async/Await code

async function fetchUser(id) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          const user = { id, name: 'Tanisha' };
          resolve(user);
      }, 2000);
  });
}


async function fetchPosts(id) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          const posts = [
              { id: 1, title: 'Post 1' },
              { id: 2, title: 'Post 2' },
          ];
          resolve(posts);
      }, 3000);
  });
}


async function main() {
  try {
      const user = await fetchUser(1);
      const posts = await fetchPosts(user.id);
      console.log(`User: ${user.name}`);
      console.log(`Posts: ${posts.map(post => post.title).join(', ')}`);
  } catch (error) {
      console.error(error);
  }
}

main();