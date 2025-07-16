import { Request, Response, NextFunction } from 'express';
import { videos, Video } from '../models/video';

// Create an video
export const createVideo = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, title, description, url, thumbnailUrl, duration} = req.body;
    const newVideo: Video = { id: Date.now().toString(), title, description, url, thumbnailUrl, duration };
    videos.push(newVideo);
    res.status(201).json(newVideo);
  } catch (error) {
    next(error);
  }
};

// Read all videos
export const getAllVideos = (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json(videos);
  } catch (error) {
    next(error);
  }
};

// Read single video
export const getVideoById = (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const video = videos.find((i) => i.id === id);
    if (!video) {
      res.status(404).json({ message: 'Video not found' });
      return;
    }
    res.json(video);
  } catch (error) {
    next(error);
  }
};

// Update an video
export const updateVideo = (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const { title } = req.body;
    const videoIndex = videos.findIndex((i) => i.id === id);
    if (videoIndex === -1) {
      res.status(404).json({ message: 'Video not found' });
      return;
    }
    videos[videoIndex].title = title;
    res.json(videos[videoIndex]);
  } catch (error) {
    next(error);
  }
};

// Delete an video
export const deleteVideo = (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id;
    const videoIndex = videos.findIndex((i) => i.id === id);
    if (videoIndex === -1) {
      res.status(404).json({ message: 'Video not found' });
      return;
    }
    const deletedVideo = videos.splice(videoIndex, 1)[0];
    res.json(deletedVideo);
  } catch (error) {
    next(error);
  }
};