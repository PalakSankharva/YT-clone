const videos = [
  {
    title: "Build Modern React Apps in 2026",
    channel: "Code Master",
    views: "1.2M views",
    time: "2 days ago",
    thumb:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1000",
    avatar: "https://i.pravatar.cc/150?img=1"
  },
  {
    title: "Artificial Intelligence Future",
    channel: "Tech Vision",
    views: "850K views",
    time: "1 week ago",
    thumb:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1000",
    avatar: "https://i.pravatar.cc/150?img=2"
  },
  {
    title: "JavaScript Complete Roadmap",
    channel: "Dev World",
    views: "600K views",
    time: "3 days ago",
    thumb:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1000",
    avatar: "https://i.pravatar.cc/150?img=3"
  },
  {
    title: "Amazing Gaming Setup Tour",
    channel: "Game Zone",
    views: "2.1M views",
    time: "5 days ago",
    thumb:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1000",
    avatar: "https://i.pravatar.cc/150?img=4"
  },
  {
    title: "Frontend Developer Guide",
    channel: "Web Wizard",
    views: "950K views",
    time: "4 days ago",
    thumb:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1000",
    avatar: "https://i.pravatar.cc/150?img=5"
  },
  {
    title: "Learn Node.js Backend",
    channel: "Backend Hub",
    views: "720K views",
    time: "6 days ago",
    thumb:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1000",
    avatar: "https://i.pravatar.cc/150?img=6"
  }
];

const grid = document.getElementById("videoGrid");

/* Render Videos */

function renderVideos(videoList) {
  grid.innerHTML = "";

  videoList.forEach((video, index) => {
    grid.innerHTML += `
      <div class="video-card" onclick="playVideo(${index})">

          <img class="thumbnail"
               src="${video.thumb}"
               alt="${video.title}">

          <div class="video-info">

              <img class="channel-img"
                   src="${video.avatar}"
                   alt="avatar">

              <div class="video-details">
                  <h3>${video.title}</h3>
                  <p>${video.channel}</p>
                  <p class="stats">
                      ${video.views} • ${video.time}
                  </p>
              </div>

          </div>

      </div>
    `;
  });
}

renderVideos(videos);

/* Video Click */

function playVideo(index) {
  alert(`▶ Playing: ${videos[index].title}`);
}

/* Sidebar Toggle */

const menuBtn = document.querySelector(".menu");
const sidebar = document.querySelector(".sidebar");

menuBtn.onclick = () => {
  sidebar.classList.toggle("hide");
};

/* Sidebar Navigation */

const menuItems = document.querySelectorAll(".sidebar li");

menuItems.forEach(item => {

  item.onclick = function () {

    menuItems.forEach(i =>
      i.classList.remove("active")
    );

    this.classList.add("active");

    alert(`📂 ${this.innerText} Opened`);
  };

});

/* Category Buttons */

const categoryButtons =
  document.querySelectorAll(".categories button");

categoryButtons.forEach(btn => {

  btn.onclick = function () {

    categoryButtons.forEach(b =>
      b.classList.remove("active")
    );

    this.classList.add("active");

    alert(`🎯 ${this.innerText} Selected`);
  };

});

/* Notifications */

const bell =
  document.querySelector(".fa-bell");

bell.onclick = () => {
  alert("🔔 You have 3 new notifications");
};

/* Upload Button */

const uploadBtn =
  document.querySelector(".fa-video");

uploadBtn.onclick = () => {
  alert("📹 Upload Video Page");
};

/* Profile Click */

const profile =
  document.querySelector(".nav-right img");

profile.onclick = () => {
  alert("👤 Profile Page Opened");
};

/* Search Functionality */

const searchInput =
  document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {

  const searchText =
    searchInput.value.toLowerCase();

  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(searchText)
  );

  renderVideos(filteredVideos);

});