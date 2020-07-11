const { JSDOM } = require("jsdom")
const axios = require('axios')

const upvoteFirstPost = async () => {
    try {
        const { data } = await axios.get("https://old.reddit.com/r/programming/");
        const dom = new JSDOM(data, {
            runScripts: "dangerously",
            resources: "usable"
        });
        const { document } = dom.window;
        const firstPost = document.querySelector("div > div.midcol > div.arrow");
        firstPost.click();
        const isUpvoted = firstPost.classList.contains("upmod");
        return isUpvoted
            ? "Post has been upvoted successfully!"
            : "The post has not been upvoted!";
    } catch (error) {
        throw error;
    }
};

upvoteFirstPost().then(msg => console.log(msg));