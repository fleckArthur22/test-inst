import React from "react";
import styles from "./Post.module.css";
import Leafs from "./leafs.jpg";
import Default from "../../components/Home/default.png";

import { FaRegComment } from "react-icons//fa";
import { GrAdd } from "react-icons/gr";
import { FiSend } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";

function Post() {
  return (
    <div className={styles.post}>
      <div className={styles.postUst}>
        <div className={styles.ustLeft}>
          <img src={Default} alt="" />
        </div>

        <div className={styles.ustRight}>
          <p>user</p>
        </div>
      </div>
      <div className={styles.postImage}>
        <img src={Leafs} alt="" />
      </div>
      <div className={styles.postAlt}>
        <div className={styles.postAltUst}>
          <div className={styles.reaction}>
            <AiOutlineHeart className={styles.reactionIcon1} />
            <FaRegComment className={styles.reactionIcon} />
            <FiSend className={styles.reactionIcon} />
          </div>
          <div className={styles.collection}>
            <GrAdd className={styles.collectionIcon} />
          </div>
        </div>
        <div className={styles.postAltInfo}>
          <p>100 beğenme</p>
          <p>
            <span>user</span> test
          </p>
          <p>3 yorumun tümünü gör</p>
          <p>3 saat önce</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
