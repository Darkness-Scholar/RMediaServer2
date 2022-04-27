# Royal Media Sever

URL >>> https://dulcet-sunshine-7c07af.netlify.app

For running on local:

- npm install -g netlify-cli

- netlify dev


1. GET: /media/stream {**String**} : get media stream src

- Query params:
  
  + id <string> youtube video id
  
  + type <string> audio or video

- Example: https://dulcet-sunshine-7c07af.netlify.app/media/stream?id=4Bw105Ck2oI&type=audio
  
2. POST: /media/search {**Array**} : search by keyword
  
- Body:
  
  + keyword <string> 
  
  + quantity <number> quantity videos that returned
