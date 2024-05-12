import type { Comment } from "@prisma/client";
import { cache } from "react";
import { db } from '../../db';

export type CommentWithAuthor = Comment & {
    user: {
        name: string | null;
        image: string | null 
    };
};

export const fetchCommentsByPostId = cache((postId: string) : Promise<CommentWithAuthor[]> => {
    console.log('Making a fetch comment post query');
    return db.comment.findMany({
        where: { postId },
        include: {
            user: {
                select: {
                    name: true,
                    image: true,
                }
            }
        }
    })
});

// we can make a route full route cache by using fetch api 
// in db query by using cache function