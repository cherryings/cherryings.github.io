var posts=["2023/12/17/多态/","2023/12/17/BinarySearchTree搜索二叉树/","2023/12/17/多继承/","2023/12/17/继承/","2023/12/17/模板进阶/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };