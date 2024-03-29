const show = document.querySelector(".show");
const loader = document.querySelector(".loader");
const filter = document.querySelector("#filter");

let i = 0;
let initialNumber = 5;

const blogContainerEl = document.getElementById("blogContainer");

function showBlogs(element) {
  var blog = document.createElement("div");
  blog.style = `
    background-color:#4992d3;
    box-shadow: 0 2px 4px rgb(0 0 0 / 30%);
    border-radius: 3px;
    padding: 20px;
    margin: 40px 0px;
    width:99%;
`;
  blog.className = "blog";
  blogContainerEl.append(blog);

  var blogId = document.createElement("span");
  blogId.innerHTML = ++i;
  blog.append(blogId);
  blogId.style = `
    background-color: #fff;
    color: #4992d3;
    padding:20px;
    border-radius: 50%;
    position: relative;
    top:-20px;
    left:-45px;
    `;

  var blogTitle = document.createElement("h2");
  blogTitle.className = "blogTitle";
  blogTitle.innerHTML = element.title;
  blog.append(blogTitle);

  var blogDesc = document.createElement("p");
  blogDesc.className = "blogDesc";
  blogDesc.innerHTML = element.content;
  blog.append(blogDesc);
}
blogContent.slice(0, initialNumber).forEach((element) => {
  // console.log(blogContent.title)
  showBlogs(element);
});

function scrollWindow(e) {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight - 5) {
    showLoading();
  }
}
function showLoading() {
  initialNumber += 5;
  loader.style.opacity = "1";
  setTimeout(() => {
    loader.style.opacity = "0";
    setTimeout(() => {
      console.log(initialNumber);
      // showBlogs();
      blogContent.slice(0, initialNumber).forEach((element) => {
        console.log(blogContent.title);
        showBlogs(element);
      });
    }, 500);
  }, 1000);
}
function filterBlogs(e) {
  console.log(e.target.value);
  const inputVal = e.target.value.toLowerCase();
  const blogEl = document.querySelectorAll(".blog");
  window.removeEventListener("scroll", (e) => {
    scrollWindow(e);
  });
  blogEl.forEach((element) => {
    const blogTitleEl = element
      .querySelector(".blogTitle")
      .innerText.toLowerCase();
    const blogDescEl = element
      .querySelector(".blogDesc")
      .innerText.toLowerCase();

    if (
      blogTitleEl.indexOf(inputVal) > -1 ||
      blogDescEl.indexOf(inputVal) > -1
    ) {
      element.style.display = "block";
      console.log("available");
    } else {
      element.style.display = "none";
      console.log("not available");
    }
  });
  loader.style = `opacity:0;`;
}

// showBlogs();
window.addEventListener("scroll", (e) => {
  scrollWindow(e);
});

filter.addEventListener("input", (e) => filterBlogs(e));
