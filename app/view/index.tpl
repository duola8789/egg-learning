<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title></title>
</head>
<body>
Hi Egg
<a href="news">Movies</a>
</body>
<script>
window.onload = () => {
  fetch('/getTitle').then(res => res.json()).then(res => document.title = res.title)
}
</script>
</html>
