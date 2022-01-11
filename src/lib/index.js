export const convertParams = url => {
    let json = {};
    url.replace(/([^?&]+)=([^?&]+)/g, (s, v, k) => {
        json[v] = decodeURIComponent(k);
        return k + '=' +  v;
    });
    return json;
}
