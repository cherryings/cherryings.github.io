var posts=["2023/12/13/hello-world/","2023/12/16/To-del/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };