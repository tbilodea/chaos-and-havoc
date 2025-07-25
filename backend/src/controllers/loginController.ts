import { Request, Response, NextFunction } from 'express';

export const login = (req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ message: 'Not implemented' });
}

export const register = (req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ message: 'Not implemented' });
}
