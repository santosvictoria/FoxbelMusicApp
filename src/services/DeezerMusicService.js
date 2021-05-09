import axios from "axios";
async function getMusicListByAlbumName(name = 'Yellow Days') {
    const res = await axios.get(`https://foxbelmusic-serv.netlify.app/.netlify/functions/app/album/name/${name}`);
    const data = await res.data;
    return data;
}
async function getTrackListByAlbumId(id){
    const res = await axios.get(`https://foxbelmusic-serv.netlify.app/.netlify/functions/app/album?id=${id}`);
    const data = await res.data;
    return data;
}
export {
    getMusicListByAlbumName,
    getTrackListByAlbumId
}