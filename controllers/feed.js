exports.getPosts = (req,res, next) => {
    //returning array of posts
    res.status(200).json({
        posts: [
            {
                //name: 'Siddhardh Nerusu',
                //age: '06/06/2003'
            }
        ]
    })
};

exports.createPost = (req,res,next) => {
    //getting posts name and dob from req
    const name = req.body.name;
    const age = req.body.age;
    //creating a post w dynamic id w current date
    //returning conformitaiton message with the created post
    res.status(201).json({
        message: 'Post Successfully Made',
        post: {
            id:new Date().toISOString(),
            name:name,
            age:age,

        }
    });
}