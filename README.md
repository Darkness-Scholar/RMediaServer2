# Royal Media Sever

BACK-END: >>> https://dulcet-sunshine-7c07af.netlify.app

FRONT-END: >>> https://rmediavi.web.app/


For running on local:

- npm install -g netlify-cli

- netlify dev


1. GET: /media/stream {**String**} : get media stream src

- Query params:
  
  + id {**String**} youtube video id
  
  + type {**String**} audio or video

- Example: https://dulcet-sunshine-7c07af.netlify.app/media/stream?id=4Bw105Ck2oI&type=audio
  
2. POST: /media/search {**Array**} : search by keyword
  
- Body:
  
  + keyword {**String**} 
  
  + quantity {**Number**} quantity videos that returned
  
- Example: `let {data} = await axios.post("https://dulcet-sunshine-7c07af.netlify.app/media/search", {keyword:"Lac troi", quanity: 12})`
