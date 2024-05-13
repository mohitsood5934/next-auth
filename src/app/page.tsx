import PostList from "../components/posts/post-list";
import TopicCreateForm from "../components/topics/topic-create-form";
import TopicList from "../components/topics/topic-list";
import { fetchTopPosts } from "../db/queries/posts";
import { Divider } from '../module';

export default async function Home() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-xl m-2">Top Posts</h1>
        <PostList fetchData={fetchTopPosts} />
      </div>
      <div className="border shadow p-3">
        <TopicCreateForm />
        <Divider className="my-2" />
        <h3 className="text-lg">Topics</h3>
        <TopicList />
      </div>
    </div>
  );
}
