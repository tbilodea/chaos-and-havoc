import { Router } from 'express';
import { getAllVideos, getVideoById, createVideo, updateVideo, deleteVideo } from '../controllers/videoController';

export default Router()
    .get('/', getAllVideos)
    .get('/:id', getVideoById)
    .post('/', createVideo)
    .put('/:id', updateVideo)
    .delete('/:id', deleteVideo);