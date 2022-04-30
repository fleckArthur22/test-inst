import styles from "./Register.module.css";

const Register = ({ Link }) => {
  const image1 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAO4AAABQCAYAAAAeLkknAAAAAXNSR0IArs4c6QAAFuxJREFUeF7tnQOQJUkQhmvPtm3b3rNt27Zt++Js27Zt27Z9e/F1RL7Ily+7Z97u7HT3TGbExe28V91VlVXpv+r16devX78UFBwIDtSKA31CcGu1XjHY4EDGgRDc2AjBgRpyIAS3hosWQw4OhODGHggO1JADIbg1XLQYcnAgBDf2QHCghhwIwa3hosWQgwMhuLEHggM15EAIbg0XLYYcHAjBjT0QHKghB0Jwa7hoMeTgQAhu7IHgQA05EIJbw0WLIQcHQnBjDwQHasiBENwaLloMOTgQght7IDhQQw5UUnB/+umn9OGHH6Z//vknjT322GmsscaqFWt///339O6776bBBx88jTPOOGn44Yev1fhjsNXnQKUE96+//konnHBCuuSSSxL/Fpp55pnTMccck8Yff/zqczSldPrpp6cTTzyxMdbZZpstHXbYYWmiiSaqxfhjkNXnQGUE95tvvkmbbLJJeuONN1yurb766umQQw6pPkdTSgceeGC6/PLLm8a68847py222KIW449BVp8DlRBchHb99dfP3EtohhlmSC+99FIT95Zbbrl07LHHVp+jKaXddtst3XTTTU1j3WeffbI5BgUHuoIDpQsuQrveeuul9957L5vPiiuumHbccce04IILNs1vmWWWSccff3xXzHmgv2O77bZLd911V1M/hx56aFpttdUGet/RQe/gQOmCu/nmm6cHH3ww4/aUU06ZrrnmmvTDDz+k+eefv2kFllpqqaa4scrLo+ck4zzuuOPSsssuW+Vhx9hqxIFSBfeWW25Ju+yyS4Nd559/fppnnnnSl19+mRZYYIEmNi6xxBLp5JNPrgVrN9xww/T44483jfW0005Liy66aC3GH4OsPgdKE9zvv/8+Lb300um7777LuDTTTDOlK6+8Mvv3F198kfr27dvEvcUXXzydcsoplePoxRdfnL7++us01FBDpaGHHjr7DwX0wQcfNI2VhBVzojQ0zDDDpEEHHbRyc4kB1YcDpQnukUcemW1wobPOOqshrJ999llaaKGFmri42GKLpVNPPbVSnCWZhvLpHxpiiCHSSCONlKabbrqsfBQUHGiHA6UI7m+//Za5wj///HM21uGGGy499dRTDSv06aefpoUXXrjygnvZZZelgw46qB1+t7QdccQRs7kHBQfa4UApgnv33XenbbfdtjFOXEgsrtAnn3ySFllkkcoL7o033ph23333dvjd0nbVVVfNwBlBwYF2OFCK4O6///6NeJbB7rnnnmmjjTZqjPvjjz9uSeSQ2CHBUwa9+eab6Y8//siy3sSymv7777/0559/Zkivv//+O/3yyy+JRJqlww8/PENOEdsOMsgg2X+4yxNPPHEGjbTv/OijjzKPhO/xSAaUBIZJfD3BBBOkwQYbrNOvZG6XXnppeuyxx9KQQw6Ztt9++zTFFFN0+nmvIbx6//3307///pvN0fJ1gF7eCx4uRXDXXnvt9OyzzzbYe9FFF6U555yz8TeblphWk41xwTEj7Gz+6aefPq288srZhrSEYAGhpK7K5l1yySXTuuuumyWROqIHHnggA328/fbbWdPRRx894R57/ci7EPAZZ5yx5dX33ntvGm+88Qq75PfXSNCRPf/222+ztn369EnLL798ZtlHHnnkdN1112WbfZJJJkmzzz579n0RkfwDRnrttddmz0G451tvvXUi+00d/c4778zePcsss7i4cPrGuxCaaqqpmv7uiI/6e5TcOeeck/1HyASxhuuss06mEOABY2V96Ie19ej2229P5513XppwwgkzPlDnFwXHmoOye/755zMFQ/2cNpbw/BgH60qpDoXbET/bmevAbFuK4GI9sapCt912W5p00kkbf3PAgCxykeCy4eadd95GExb/oYceyjagFiJghk888UTTuwD+n3nmmYVWg80MTBEFoYlNDDQzj1AOZMgtUR4aZZRRCtfSg0rKA/Bnyy23zFBZQpNNNlkm6HkWGaFda621WjLc8jxILhTNVVdd1Xgnn4HyEvLClmGHHTY999xzTXOhSoDQFc0RXjKHhx9+2OXD3HPPndXvjz766Mb3c801V7rgggtaBIq1ufXWWxvtdMhxxRVXpAMOOKCpD+vVsX8wBqI8aAyPSYCiFKtOpQguMS0lHyGERAPwcaGwjEWC+9VXX7WANO6777407rjjNh4jjkaresQGw/XzNOyvv/6aZbV//PHHlkdxeVdZZZXcdeVZLJcltD9uah6dffbZHUI6EVBccU1XX311BhG1hNVZY401WqCjtp19J14B3oHQ9ddfn4UymkYbbbS01157ZZ7I66+/nl5++eVGWQ+rhYX3yl1F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";

  const image2 =
    "https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png";

  return (
    <div className={styles.register}>
      <div className={styles.container}>
        <div className={styles.loginBox}>
          <img src={image1} alt="" />
          <p>Arkadaşlarının fotoğraf ve videolarını görmek için kaydol.</p>
          <div className={styles.inputs}>
            <input type="text" placeholder="E-posta" />
            <input type="text" placeholder="Adı Soyadı" />
            <input type="text" placeholder="Kullanıcı adı" />
            <input type="text" placeholder="Şifre" />

            <Link className={styles.link} to="/home">
              <button>Kaydol</button>
            </Link>
          </div>
        </div>

        <div className={styles.registerBox}>
          <p>
            Hesabın var mı?
            <Link
              className={styles.link}
              to="/"
              style={{ textDecoration: "none" }}
            >
              <span> Giriş Yap</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
