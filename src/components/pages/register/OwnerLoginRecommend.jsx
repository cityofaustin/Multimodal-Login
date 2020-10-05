import React, { Component, Fragment } from "react";
import { handleIOSBrowser } from "../../../util/browser-util";
import GoBackSvg from "../../svg/GoBackSvg";
// import OptionSvg from '../../svg/OptionSvg';
// import HasPhoneSvg from '../../svg/HasPhoneSvg';
import LoginOption from "./LoginOption";
import { animateIn, getSectionClassName } from "../../../util/animation-util";
import AnsweredItemSvg from "../../svg/AnsweredItemSvg";
import UrlUtil from "../../../util/url-util";
import EthCrypto from "eth-crypto";
if (process.env.BROWSER) {
  import("./OwnerLoginRecommend.scss");
}
export default class OwnerLoginRecommend extends Component {
  static defaultProps = {
    handleGoForward: () => {},
    handleGoBack: () => {},
  };

  answerTitles = {
    password: "How often do you completely forget your passwords?",
    text:
      "In the last five years, how many times have you permanently lost your phone? ",
    palm: "How comfortable are you using your camera to scan your palm?",
    securityQuestions: "How good are you at answering security questions?",
  };

  state = {
    loginMethods: ["password", "text", "palm", "securityQuestions"],
    isDisplayWhy: false,
  };

  componentDidMount() {
    handleIOSBrowser();
    animateIn(this.refs.section);
  }

  getRecommended = () => {
    const {
      forgetsPassword,
      lostPhone,
      scanningPalm,
      answeringSecurityQuestions,
    } = {
      ...this.props.questions,
    };
    const recommended = [];
    if (forgetsPassword === "forgetPasswordRarely") {
      recommended.push("password");
    }
    if (lostPhone !== "noPhone") {
      recommended.push("text");
    }
    if (scanningPalm === "palmComfortable") {
      recommended.push("palm");
    }
    if (answeringSecurityQuestions === "securityGood") {
      recommended.push("securityQuestions");
    }
    return recommended;
  };

  isComplete = (loginMethod) => {
    const { passwordItem, textItem, palmItem, securityItems } = {
      ...this.props,
    };
    switch (loginMethod) {
      case "password":
        return !!passwordItem;
      case "text":
        return !!textItem;
      case "palm":
        return !!palmItem;
      case "securityQuestions":
        return !!securityItems;
      default:
        return false;
    }
  };

  areAnyComplete = () => {
    const { loginMethods } = { ...this.state };
    for (const loginMethod of loginMethods) {
      if (this.isComplete(loginMethod)) {
        return true;
      }
    }
    return false;
  };

  isQuestionSuccess = (loginMethod) => {
    const recommendedLoginMethods = this.getRecommended();
    return recommendedLoginMethods.indexOf(loginMethod) > -1;
  };

  generatePasswordInputForm = (passwordItem) => {
    let passwordInput = (
      <input type="hidden" name="password" value={passwordItem.password} />
    );

    if (
      passwordItem.password !== undefined &&
      passwordItem.password.length >= 64
    ) {
      let privateKey = passwordItem.password;
      let publicEncryptionKey;
      let publicAddress;
      let signature;

      if (privateKey.substring(0, 2) !== "0x") {
        privateKey = "0x" + privateKey;
      }

      try {
        publicEncryptionKey = EthCrypto.publicKeyByPrivateKey(privateKey);
        publicAddress = EthCrypto.publicKey.toAddress(publicEncryptionKey);

        const message = publicAddress;
        const messageHash = EthCrypto.hash.keccak256(message);
        signature = EthCrypto.sign(privateKey, messageHash);

        document.cookie =
          "bring-your-own-key=" + privateKey.substring(2, privateKey.length);
      } catch (e) {
        console.log("Not using byok");
      }

      if (publicEncryptionKey !== undefined) {
        passwordInput = (
          <Fragment>
            <input
              type="hidden"
              name="publicEncryptionKey"
              value={publicEncryptionKey}
            />
            <input type="hidden" name="publicAddress" value={publicAddress} />
            <input type="hidden" name="signature" value={signature} />
          </Fragment>
        );
      }
    }
    return passwordInput;
  };

  renderRegisterForm() {
    const { emailItem, palmItem, passwordItem, securityItems, textItem } = {
      ...this.props,
    };

    let passwordInput;

    if (passwordItem) {
      passwordInput = this.generatePasswordInputForm(passwordItem);
    }

    return (
      <form method="POST" action="/register">
        {emailItem && (
          <Fragment>
            {/* <span>username length {emailItem.username.length}</span> */}
            {emailItem.username.length > 0 && (
              <input type="hidden" name="username" value={emailItem.username} />
            )}
            {emailItem.email.length > 0 && (
              <input type="hidden" name="email" value={emailItem.email} />
            )}
          </Fragment>
        )}
        {passwordItem && passwordInput}
        {palmItem && (
          <input
            type="hidden"
            name="palmTemplate"
            value={palmItem.palmTemplate}
          />
        )}
        {textItem && (
          <input type="hidden" name="text" value={textItem.phoneNumber} />
        )}
        {securityItems && (
          <input
            type="hidden"
            name="securityQuestions"
            value={JSON.stringify(securityItems)}
          />
        )}
        <input
          id="client_id"
          name="client_id"
          type="hidden"
          value={UrlUtil.getQueryVariable("client_id")}
        />
        <input
          id="response_type"
          name="response_type"
          type="hidden"
          value={UrlUtil.getQueryVariable("response_type")}
        />
        <input
          id="redirect_url"
          name="redirect_url"
          type="hidden"
          value={UrlUtil.getQueryVariable("redirect_url")}
        />
        <input id="scope" name="scope" type="hidden" value="" />
        <input id="state" name="state" type="hidden" value="" />
        <input
          style={{ width: "210px" }}
          type="submit"
          value="Finish"
          disabled={!this.areAnyComplete()}
        />
      </form>
    );
  }

  renderSectionContents() {
    const { loginMethods, isDisplayWhy } = { ...this.state };
    return (
      <div className="section-contents">
        <div className="title">Document Owner</div>
        <div className="subtitle">More ways to login</div>
        <div className="card owner1">
          <div>
            <div className="card-title">
              {this.getRecommended().length < 1 &&
                "We couldn't find the perfect login solution for you, but here are some options"}
              {this.getRecommended().length > 0 &&
                "Based on your answers, we found the following login solution for you"}
            </div>
          </div>
          {this.getRecommended().map((loginMethod) => (
            <div
              className="recommended"
              key={loginMethod}
              onClick={() =>
                this.props.handleGoForward("owner", 10, { loginMethod })
              }
            >
              <LoginOption
                loginMethod={loginMethod}
                isComplete={this.isComplete(loginMethod)}
              />
            </div>
          ))}
          {this.getRecommended().length < 4 && (
            <div>
              <div className="excerpt1">Other login methods</div>
              {/* <div className="excerpt2">(not recommended for you)</div> */}
            </div>
          )}
          {loginMethods
            .filter(
              (loginMethod) => this.getRecommended().indexOf(loginMethod) < 0
            )
            .map((loginMethod) => (
              <div
                key={loginMethod}
                onClick={() =>
                  this.props.handleGoForward("owner", 10, { loginMethod })
                }
              >
                <LoginOption
                  loginMethod={loginMethod}
                  isComplete={this.isComplete(loginMethod)}
                />
              </div>
            ))}
          <div className="submit-section">
            {this.renderRegisterForm()}
            <div onClick={() => this.setState({ isDisplayWhy: !isDisplayWhy })}>
              Why did you pick this for me?
            </div>
          </div>
        </div>
        <GoBackSvg
          color="#2362c7"
          goBack={() => this.props.handleGoBack("owner", 9)}
        />
      </div>
    );
  }

  renderSectionWhy() {
    const { loginMethods, isDisplayWhy } = { ...this.state };

    return (
      <div className="section-contents">
        <div className="title">Document Owner</div>
        <div className="subtitle">More ways to login</div>
        <div className="card owner1 why-card">
          <div className="why-title">Why did you pick this for me?</div>
          {loginMethods.map((loginMethod) => (
            <div key={loginMethod} className="why-item">
              <div className="why-item-title">
                {this.answerTitles[loginMethod]}
              </div>
              <AnsweredItemSvg
                loginMethod={loginMethod}
                isSuccess={this.isQuestionSuccess(loginMethod)}
              />
            </div>
          ))}
        </div>
        <GoBackSvg
          color="#2362c7"
          goBack={() => this.setState({ isDisplayWhy: !isDisplayWhy })}
        />
      </div>
    );
  }

  render() {
    const { isDisplayWhy } = { ...this.state };
    return (
      <div
        ref="section"
        id="section-9-owner"
        className={getSectionClassName(this.props.position)}
      >
        {isDisplayWhy ? this.renderSectionWhy() : this.renderSectionContents()}
      </div>
    );
  }
}
