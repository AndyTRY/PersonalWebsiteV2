export enum MediaType {
    Image = 'Image',
    Video = 'Video',
    SketchFabModel = 'SketchFabModel'
  }
  
export interface Media {
    type: MediaType;
    caption: string | null;
  }
  
export interface Image extends Media {
    type: MediaType.Image;
    imageUrl: string;
  }
  
export interface Video extends Media {
    type: MediaType.Video;
    videoUrl: string;
    videoSpeed: number;

    // Needs Imporvement: can create a stronger enforcement
    mimeType: string; 
  }
  
export interface SketchFabModel extends Media {
    type: MediaType.SketchFabModel;
    embedHTML: string
  }