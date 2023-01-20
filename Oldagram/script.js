const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const body = document.querySelector("#body")

renderPost()

function renderPost(){
    for(const i in posts){
        let card = document.createElement("section");
        card.innerHTML = `<div class="container">
        <div class="section-title">
            <img src="${posts[i].avatar}" alt="potrait of post creator" class="avatar">
            <div class="post-info">
                <h6 class="bold">${posts[i].name}</h6>
                <p>${posts[i].location}</p>
            </div>
        </div>
        <div class="main-img">
            <img src="${posts[i].post}" alt="potrait of sir vangogh" class="post-img">
        </div>
        <div class="section-end">
            <div class="icons">
                <i class=" fa-regular fa-heart l${i}" onclick="liked(this)"></i>
                <img src="images/icon-comment.png" alt="" class="comment">
                <img src="images/icon-dm.png" alt="" class="dm">
            </div>
            <span class="like bold"><span class="likes a${i} bold">${posts[i].likes}</span> likes</span>
            <p><span class="bold">${posts[i].username}</span> ${posts[i].comment}</p>
        </div>
    </div>`
        body.appendChild(card)
    }
}
const likes = document.querySelector("#likes")

function liked(x){
 x.classList.toggle("fa-regular")
 x.classList.toggle("fa-solid");
 x.classList.toggle("liked");
 likeCount()
}

function likeCount(){
    for(const i in posts){
        const hrt = document.querySelector(`.l${i}`)
        const likeCn = document.querySelector(`.a${i}`)
        let likeNum = posts[i].likes
        if(hrt.classList.contains("fa-heart")){
            likeNum+=1
        }
        if(hrt.classList.contains("fa-regular")){
            likeNum-=1
        }
        likeCn.textContent = likeNum
    }
}