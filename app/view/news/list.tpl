<html lang="zh">
<head>
  <meta name="referrer" content="no-referrer" />
  <title>Hacker News</title>
  <style>
    h1 {
      margin-left: 330px;
    }
    .image {
      position: fixed;
      right: 10%;
      width: 500px;
    }
    .news-view {
      width: 1000px;
      overflow: hidden;
    }
    .item {
      border: 1px solid darkgray;
      list-style: none;
      text-align: center;
      width: 300px;
      height: 400px;
      float: left;
    }
    .small-container {
      margin: 10px auto;
      width: 250px;
      height: 350px;
      overflow: hidden;
      text-align: center;
    }
    .small {
      width: 250px;
    }
  </style>
</head>
<body>
<h1>{{title}}</h1>
<img src="/public/middleware.gif" class="image" alt="middleware">
<ul class="news-view view">
  {% for item in list %}
  <li class="item">
    <a href="{{ item.alt }}">{{ item.title }}</a>
    <div class="small-container">
      <img class="small" src="{{ item.images.small }}" alt="small">
    </div>
  </li>
  {% endfor %}
</ul>
</body>
</html>
