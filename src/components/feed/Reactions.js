import { useState, useEffect } from "react";
import "../../styles/Reactions.css";

import likeIconOff from "../../assets/icons/thumbs-up-gray.svg";
import dislikeIconOff from "../../assets/icons/thumbs-down-gray.svg";
import likeIconOn from "../../assets/icons/thumbs-up-blue.svg";
import dislikeIconOn from "../../assets/icons/thumbs-down-blue.svg";
import { postReaction } from "../../api/api";

const Reactions = ({ like, dislike, id }) => {
    const [reaction, setReaction] = useState(null);
    const [counts, setCounts] = useState({ like: like, dislike: dislike });

    useEffect(() => {
        const storedReaction = localStorage.getItem(`${id}_reaction`);
        if (storedReaction) {
            setReaction(storedReaction);
        }
    }, [id]);

    const handleReactionClick = (type) => {
        // if (reaction === type) {
        //     localStorage.removeItem(`${id}_reaction`);
        //     setCounts((prevCounts) => ({
        //         ...prevCounts,
        //         [type]: prevCounts[type] - 1,
        //     }));
        //     setReaction(null);
        // } else {
        //     localStorage.setItem(`${id}_reaction`, type);
        //     setCounts((prevCounts) => ({
        //         ...prevCounts,
        //         [type]: prevCounts[type] + 1,
        //     }));
        //     if (reaction) {
        //         setCounts((prevCounts) => ({
        //             ...prevCounts,
        //             [reaction]: prevCounts[reaction] - 1,
        //         }));
        //     }
        //     setReaction(type);
        // }

        if (reaction === null) {
            postReaction(id, type);
            localStorage.setItem(`${id}_reaction`, type);
            setReaction(type);
            setCounts((prev) => ({
                ...prev,
                [type]: prev[type] + 1,
            }));                        
        }
    };

    return (
        <div className="FeedCard-reactionContainer">
            <div
                className={`FeedCard-reaction ${reaction === "like" ? "clicked" : reaction === "dislike" ? "another" : ""}`}
                onClick={() => handleReactionClick("like")}
            >
                <img
                    src={reaction === "like" ? likeIconOn : likeIconOff}
                    alt="likeIcon"
                    className="FeedCard-reactionIcon"
                />
                좋아요 {counts.like > 0 && counts.like}
            </div>
            <div
                className={`FeedCard-reaction ${reaction === "dislike" ? "clicked" : reaction === "like" ? "another" : ""}`}
                onClick={() => handleReactionClick("dislike")}
            >
                <img
                    src={reaction === "dislike" ? dislikeIconOn : dislikeIconOff}
                    alt="dislikeIcon"
                    className="FeedCard-reactionIcon"
                />
                싫어요 {counts.dislike > 0 && counts.dislike}
            </div>
        </div>
    );
};

export default Reactions;
