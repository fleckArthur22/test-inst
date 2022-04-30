import React, { useState } from "react";
import { FiSearch, FiPlusSquare } from "react-icons/fi";
import { MdHomeFilled } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FaRegCompass } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineUserCircle } from "react-icons/hi";
import Logo from "./logo.png";
import Default from "./default.png";
import styles from "./Home.module.css";
import Post from "../Post/Post";

import Modal from "../Modal/Modal";

function Home() {
  const [darkModal, setDarkModal] = useState(false);
  const [lightModal, setLightModal] = useState(false);
  console.log(darkModal);

  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <img src={Logo} alt="" />
        </div>

        <div className={styles.search}>
          <FiSearch className={styles.searchIcon} />
          <input type="text" placeholder="Search" className={styles.inpBox} />
        </div>

        <div className={styles.menu}>
          <MdHomeFilled className={styles.btnIcon} />
          <RiMessengerLine className={styles.btnIcon} />
          <FiPlusSquare
            className={styles.btnIcon}
            onClick={() => setDarkModal(!darkModal)}
          />
          <FaRegCompass className={styles.btnIcon} />
          <AiOutlineHeart className={styles.btnIcon} />
          <HiOutlineUserCircle
            className={styles.btnIcon}
            lightModal={lightModal}
            setLightModal={setLightModal}
          />
        </div>
      </div>

      <div className={styles.home}>
        <div className={styles.left}>
          <div className={styles.story}>
            <p>Stories</p>
          </div>

          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>

        <div className={styles.right}>
          <div className={styles.info}>
            <div className={styles.pic}>
              <img src={Default} className={styles.infoPic} alt="" />
            </div>

            <p className={styles.user}>User</p>
            <p className={styles.switch}>Switch</p>
          </div>
        </div>
      </div>

      <div className={styles.mobilePanel}>
        <div className={styles.panelMenu}>
          <MdHomeFilled className={styles.btnIcon2} />
          <RiMessengerLine className={styles.btnIcon2} />
          <FiPlusSquare
            className={styles.btnIcon2}
            onClick={() => setDarkModal(!darkModal)}
          />
          <FaRegCompass className={styles.btnIcon2} />
          <AiOutlineHeart className={styles.btnIcon2} />
          <HiOutlineUserCircle className={styles.btnIcon2} />
        </div>
      </div>
      <Modal darkModal={darkModal} setDarkModal={setDarkModal} />
    </div>
  );
}

export default Home;
