(class Multimedia {
    setVideo(url, id) {
      let iframe = document.querySelector(`#${id}`);
      iframe.setAttribute("src", url);
    }
})();
return {function Reproduccion 
setVideo}
  
  let archivo1 = new Multimedia();
  //let archivo2 = new Multimedia();    

  archivo1.setVideo("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/649185458&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true", "audio"
  );
  archivo1.setVideo("https://www.youtube.com/embed/v7F6oTFc7Eg", "videoPelicula");
  //archivo2.setVideo("https://www.youtube.com/embed/xa8lhVwQBw4", "videoPelicula");
  archivo1.setVideo("https://www.youtube.com/embed/5n3L-53f30s", "videoSerie");

