exports.createPost = (req, res, next) => {
    const name = req.body.name;
    const age = req.body.age;

    //creating new post instance
    const post = new Post({
        name : name,
        age : age

    });

    //save the instance to databse
    post
    .save()
    .then(postSaved =>{
        res.status(201).json({
            message: 'post created successfulyl yay',
            post: postSaved
        });
    })
    .catch(err => console.log('err', err));
}

exports.getPosts = (req, res, next) => {
    // return array of existing posts
    Post.find().then(foundPosts => {
    res.json({
        message: "All posts",
        posts: foundPosts
        });
    });
}