export type GalleryItem = {kind:'video';title:string;src:string;poster?:string;captions?:string}|{kind:'image';title:string;src:string;alt:string};
// Add supplied media files under public/gallery and reference them here.
// No stock videos or simulated research footage. Videos require a deliberate click to play.
export const gallery:GalleryItem[]=[];
