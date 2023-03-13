import AboutMeSection from "../AboutMeSection";
import RecentPosts from "../RecentPosts";
import FollowMe from "../FollowMe";
import TagCloud from "../TagCloud";

export default [
    [   
        "About Me",
        <AboutMeSection />,
        "aboutMe"
    ],
    [
        "Recent Posts",
        <RecentPosts />,
        "recentPosts"
    ],
    [
        "Follow me!",
        <FollowMe />,
        "followMe"
    ],
    [
        "Tag Cloud",
        <TagCloud />,
        "tagCloud"
    ],

]