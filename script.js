const  getPosts = async => {
    const postsPromise = await fetch("");

    const posts = await postsPromise.json();
};

getPosts();