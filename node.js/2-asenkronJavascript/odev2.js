const blogs= [
    {title: "Blog 1", description:"her şey güzel 1", author: "Talib GÜLER" },
    {title: "Blog 2", description:"her şey güzel 2", author: "Derda Melih BATTAL" },
    {title: "Blog 3", description:"her şey güzel 3", author: "Enes KURT" }
];

const listBlogs = () => {
    blogs.map(blog => {
        console.log(blog.description);
    })
};

const  addBlog = (newBlog) => {
    const promise1 = new Promise((resolve,reject) => {
        blogs.push(newBlog);
        resolve(blogs);
        reject('BIR HATA OLUSTU');     
    })
    return promise1;
};

async function showBlogs (){
    try {
        listBlogs()
        console.log("--------- Eklenmiş Hali ---------")
        await addBlog({title: "Blog 4", description:"her şey güzel 4", author: "Sefa EKİCİ" })
        listBlogs()
    } catch (error) {
        console.log(error)
    }
}

showBlogs();

