const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21492,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 12502,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 15137,
  },
];
const sections = document.querySelectorAll("section");
const heart = document.querySelector(".heart");

posts.forEach((post, i) => {
  // Author Avatar
  sections[i].querySelector(".avatar").src = post.avatar;

  //   Author Name
  sections[i].querySelector("h1").textContent = post.name;

  //   Author Location
  sections[i].querySelector("h2").textContent = post.location;

  //   Post Image
  sections[i].querySelector(
    ".post-content"
  ).style.backgroundImage = `url(${post.post})`;

  //   Likes
  const likesStr = post.likes.toString();
  sections[i].querySelector("h3").textContent = `${likesStr.slice(
    0,
    2
  )},${likesStr.slice(2)} likes`;

  //   Comment
  sections[i].querySelector(
    "p"
  ).innerHTML = `<span class="author-id fw700">${post.username}</span> ${post.comment}`;
});

sections.forEach((section) => {
  section.querySelector(".post-content").addEventListener("dblclick", (e) => {
    postLiked(e.target.parentNode);
  });

  // section.querySelector(".heart").addEventListener("click", () => {
  //   post.likes++;

  //   setTimeout(() => {
  //     section.querySelector("h3").style.color = "red";
  //     section.querySelector("h3").style.transform = "scale(1.1)";
  //     const likesStr = post.likes.toString();
  //     section.querySelector("h3").textContent = `${likesStr.slice(
  //       0,
  //       2
  //     )},${likesStr.slice(2)} likes`;
  //   }, 500);

  //   setTimeout(() => {
  //     section.querySelector("h3").style.color = "black";
  //     section.querySelector("h3").style.transform = "scale(1)";
  //   }, 1000);
  // });
});

function postLiked(section) {
  setTimeout(() => {
    section.querySelector(".post-content").style.opacity = 0.5;
    section.querySelector("h3").style.color = "red";
    section.querySelector("h3").style.transform = "scale(1.1)";
    const likesStr = post.likes.toString();
    section.querySelector("h3").textContent = `${likesStr.slice(
      0,
      2
    )},${likesStr.slice(2)} likes`;
  }, 500);

  setTimeout(() => {
    section.querySelector(".post-content").style.opacity = 1;
    section.querySelector("h3").style.color = "black";
    section.querySelector("h3").style.transform = "scale(1)";
  }, 1000);
}
