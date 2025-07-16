export interface Video {
    id: string;
    title: string;
    description: string;
    url: string;
    thumbnailUrl: string;
    duration: number;
}

export const videos: Video[] = [];