let sugerenciaVideo = (() => {
    let visualizar = (id, url) => {
        $(`#${id}`).attr('src', url);
    }
    return {
        mostrar: visualizar
    }
})();

class Multimedia{
    constructor(url){
        this._url = url;
        this._videoYT = () => this._url;
    };
    get getUrl(){
        return this._videoYT();
    };
    setInicio (){
        return "Este método es para realizar un cambio en la URL del video";
    };
};

class Reproductor extends Multimedia{
    constructor(url, id){
        super(url);
        this._id = id;
        this._getId = () =>this._id
    };
    playMultimedia (){
        let id = this._getId();
        let url = this._url;
        sugerenciaVideo.mostrar(id, url);
    };
    setInicio (){
        let id = this._getId();
        let url = this._url;
        url += `?start=${tiempo}`;
        sugerenciaVideo.mostrar(id, url);
    };
};

let musica = new Reproductor("https://www.youtube.com/embed/I-1oJnmr6nk", "videoMusica");
let pelicula = new Reproductor("https://www.youtube.com/embed/mQXzv_eO9XE", "videoPelicula");
let serie = new Reproductor ("https://www.youtube.com/embed/85z53bAebsI", "videoSerie");

musica.playMultimedia();
pelicula.playMultimedia();
serie.playMultimedia();