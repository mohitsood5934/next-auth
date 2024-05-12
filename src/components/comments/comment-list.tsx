// import { type CommentWithAuthor } from "@/src/db/queries/comments";
import { fetchCommentsByPostId } from "@/src/db/queries/comments";
import CommentShow from "../../components/comments/comment-show";
import { notFound } from "next/navigation";

interface CommentListProps {
  // fetchData: () => Promise<CommentWithAuthor []>
  postId: string
}

// TODO: Get a list of comments from somewhere
// export default async function CommentList({ fetchData }: CommentListProps) {
export default async function CommentList({ postId }: CommentListProps) {
  // const comments = await fetchData();

  const comments = await fetchCommentsByPostId(postId);

  if(!comments) {
    notFound();
  }

  const topLevelComments = comments.filter(
    (comment) => comment.parentId === null
  );
  const renderedComments = topLevelComments.map((comment) => {
    return (
      <CommentShow
        key={comment.id}
        commentId={comment.id}
        postId={postId}
        // comments={comments}
      />
    );
  });

  return (
    <div className="space-y-3">
      <h1 className="text-lg font-bold">All {comments.length} comments</h1>
      {renderedComments}
    </div>
  );
}
