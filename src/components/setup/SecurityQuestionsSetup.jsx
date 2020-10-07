import React, { Component, Fragment } from "react";
import MSelect from "../common/MSelect";
import HowSvg from "../svg/HowSvg";
import SecurityExampleSvg from "../svg/SecurityExampleSvg";
import CrossSvg from "../svg/CrossSvg";
import UrlUtil from "../../util/url-util";
import SecurityMethodLoginSvg from "../svg/SecurityMethodLoginSvg";

if (process.env.BROWSER) {
  import("./SecurityQuestionsSetup.scss");
}
export default class SecurityQuestionSetup extends Component {
  constructor(props) {
    super(props);
    let securityItems = [
      {
        question: undefined,
        answer: "",
      },
    ];
    securityItems = props.securityItems ? props.securityItems : securityItems;
    this.state = {
      securityItems,
      confirmDelete: false,
    };
  }

  setSecurityQuestions = async () => {
    const {
      goBack,
      loginMethods,
      setLoginMethods,
      setSecurityQuestions,
      isAdd,
    } = { ...this.props };
    const { securityItems } = { ...this.state };
    try {
      const url = "/api/login-methods";
      const authorization = UrlUtil.getQueryVariable("access_token");
      const init = {
        method: isAdd ? "POST" : "PUT",
        headers: {
          Authorization: `Bearer ${authorization}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          securityQuestions: JSON.stringify(securityItems),
        }),
      };
      await fetch(url, init);
      if (isAdd) {
        loginMethods.push("SecurityQuestionsLoginType");
        setLoginMethods(loginMethods);
      }
      setSecurityQuestions(securityItems);
      goBack();
    } catch (err) {
      console.error(err);
    }
  };

  deleteSecurityQuestions = async () => {
    const { setLoginMethods, goBack, setSecurityQuestions } = { ...this.props };
    let { loginMethods } = { ...this.props };
    try {
      const url = "/api/login-methods/SecurityQuestionsLoginType";
      const authorization = UrlUtil.getQueryVariable("access_token");
      const init = {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${authorization}`,
          "Content-Type": "application/json",
        },
      };
      await fetch(url, init);
      loginMethods = loginMethods.filter(lm => lm !== "SecurityQuestionsLoginType");
      setLoginMethods(loginMethods);
      setSecurityQuestions([]);
      goBack();
    } catch (err) {
      console.error(err);
    }
  };

  isSecurityFilledOut() {
    const { securityItems } = { ...this.state };
    let isFilledOut = true;
    for (const securityItem of securityItems) {
      if (securityItem.answer.length <= 0 || !securityItem.question) {
        isFilledOut = false;
      }
    }
    return isFilledOut;
  }

  renderSecurityCard() {
    const { securityItems } = { ...this.state };
    const { toggleDisplayHow, isLogin, isSettings, isAdd } = { ...this.props };
    return (
      <div id="security-questions-setup" className="card owner1">
        <div className="card-content">
          <div
            className="card-title"
            style={{ fontSize: "25px", paddingBottom: "13px" }}
          >
            Security Questions
          </div>
          <div className="excerpt1">
            Select a maximum of three preferred security questions followed by
            your answers
          </div>
          {securityItems.map((securityItem, i) => {
            return (
              <Fragment key={i}>
                <div className="card-body-section1">
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <label>Question #{i + 1}</label>
                    {i > 0 && (
                      <div
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          securityItems.splice(i, 1);
                          this.setState({ securityItems });
                        }}
                      >
                        <CrossSvg />
                      </div>
                    )}
                  </div>
                  <MSelect
                    value={this.getOptions().find(
                      (option) => option.value === securityItem.question
                    )}
                    options={this.getOptions()}
                    isSearcheable={false}
                    onChange={(e) => {
                      securityItem.question = e.value;
                      this.setState({ securityItems });
                    }}
                  />
                </div>
                <div className="answer-section">
                  <div className="card-body-section1">
                    <div>Answer</div>
                    <input
                      type="text"
                      value={securityItem.answer}
                      onChange={(e) => {
                        securityItem.answer = e.target.value;
                        this.setState({ securityItems });
                      }}
                    />
                  </div>
                </div>
              </Fragment>
            );
          })}
          {securityItems.length < 3 && (
            <input
              type="button"
              value="Add Question"
              style={{ width: "220px", marginTop: "20px" }}
              onClick={() => {
                securityItems.push({
                  question: undefined,
                  answer: "",
                });
                this.setState({
                  securityItems,
                });
              }}
            />
          )}
        </div>
        <div className="submit-section">
          {!isLogin && !isSettings && (
            <input
              style={{ width: "210px" }}
              type="button"
              value="Set Questions"
              onClick={() =>
                this.props.handleGoBack("owner", 10, { securityItems })
              }
              disabled={this.isDisabled()}
            />
          )}
          {!isLogin && isSettings && (
            <input
              style={{ width: "210px" }}
              type="button"
              value="Save"
              onClick={this.setSecurityQuestions}
              disabled={this.isDisabled()}
            />
          )}
        </div>
        {!isSettings && (
          <div className="how" onClick={toggleDisplayHow}>
            How does this work?
          </div>
        )}
        {isSettings && !isAdd && (
          <div
            onClick={() => this.setState({ confirmDelete: true })}
            style={{
              color: "#d95868",
              marginTop: "12px",
              fontSize: "15px",
              cursor: "pointer",
            }}
          >
            delete this login method
          </div>
        )}
      </div>
    );
  }

  renderHow() {
    return (
      <div className="how-container">
        <HowSvg loginMethod="securityAnswers" />
        <div className="sec-excerpt">
          Two-step verification is a simple way to authenticate a user by
          sending a unique code to their mobile device.
        </div>
        <SecurityExampleSvg />
      </div>
    );
  }

  renderLogin() {
    const { renderHiddenInputs } = { ...this.props };
    const { isDisplayHow, securityItems } = { ...this.state };
    return (
      <Fragment>
        {!isDisplayHow && (
          <div id="section-1-owner">
            <div className="section-contents">
              <form
                method="POST"
                action="/authorize"
                className="card login-card"
              >
                <div className="top-section">
                  <div
                    className="card-title"
                    style={{ margin: "0 -18px 12px -18px" }}
                  >
                    Security Questions
                  </div>
                  <SecurityMethodLoginSvg />
                </div>
                <div className="question-container">
                  {securityItems.map((securityItem, i) => {
                    return (
                      <Fragment key={i}>
                        <div className="card-body-section1">
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <label>Question #{i + 1}</label>
                          </div>
                          <MSelect
                            value={this.getOptions().find(
                              (option) => option.value === securityItem.question
                            )}
                            options={this.getOptions()}
                            isSearcheable={false}
                            onChange={(e) => {
                              securityItem.question = e.value;
                              this.setState({ securityItems });
                            }}
                          />
                        </div>
                        <div className="answer-section">
                          <div className="card-body-section1">
                            <label>Answer</label>
                            <input
                              type="text"
                              value={securityItem.answer}
                              onChange={(e) => {
                                securityItem.answer = e.target.value;
                                this.setState({ securityItems });
                              }}
                            />
                          </div>
                        </div>
                      </Fragment>
                    );
                  })}
                </div>
                <div className="security-excerpt">
                  Please clear the questions listed above to gain access to your
                  account.
                </div>
                <input
                  name="securityQuestions"
                  type="hidden"
                  value={JSON.stringify(securityItems)}
                />
                <div>
                  <input
                    style={{ width: "210px" }}
                    type="submit"
                    value="Login"
                    disabled={!this.isSecurityFilledOut()}
                  />
                  <div
                    className="how"
                    onClick={() =>
                      this.setState({ isDisplayHow: !isDisplayHow })
                    }
                  >
                    How does this work?
                  </div>
                </div>
                {renderHiddenInputs()}
              </form>
            </div>
          </div>
        )}
        {isDisplayHow && (
          <div>
            <div className="card owner1 delete">
              <div className="how-container">
                <HowSvg loginMethod="securityAnswers" />
                <div className="sec-excerpt">
                  Two-step verification is a simple way to authenticate a user
                  by sending a unique code to their mobile device.
                </div>
                <SecurityExampleSvg />
              </div>
              <GoBackSvg
                color="#2362c7"
                goBack={() => this.setState({ isDisplayHow: !isDisplayHow })}
              />
            </div>
          </div>
        )}
      </Fragment>
    );
  }

  renderConfirmDelete() {
    return (
      <Fragment>
        <div id="section-1-owner">
          <div className="section-contents">
            <div className="card login-card delete">
              <div className="top-section">
                <div
                  className="card-title"
                  style={{ margin: "0 -18px 12px -18px" }}
                >
                  Security Questions
                </div>
                <SecurityMethodLoginSvg />
              </div>
              <div
                style={{
                  fontSize: "15px",
                  color: "white",
                  textAlign: "center",
                }}
              >
                <p>Are you sure you wish to delete this login method?</p>
                <p>
                  You will have to add every single question again if you change
                  your mind
                </p>
              </div>
              <div>
                <input
                  type="button"
                  value="Yes, delete"
                  style={{
                    width: "220px",
                    marginTop: "20px",
                    backgroundColor: "#d95868",
                  }}
                  onClick={this.deleteSecurityQuestions}
                />
                <div
                  style={{
                    fontSize: "15px",
                    textAlign: "center",
                    color: "white",
                    marginTop: "12px",
                    cursor: "pointer",
                  }}
                  onClick={() => this.setState({ confirmDelete: false })}
                >
                  no, take me back
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }

  render() {
    const { confirmDelete } = { ...this.state };
    const { isDisplayHow, isLogin } = { ...this.props };
    if (confirmDelete) {
      return this.renderConfirmDelete();
    }
    if (isLogin) {
      return this.renderLogin();
    }
    return !isDisplayHow ? this.renderSecurityCard() : this.renderHow();
  }

  isDisabled = () => {
    const { securityItems } = { ...this.state };
    let matched = securityItems.filter(
      (securityItem) => securityItem.answer.length > 0 && securityItem.question
    );
    return matched.length < securityItems.length || matched.length === 0;
  };

  getOptions = () => {
    const { securityItems } = { ...this.state };
    return [
      {
        value: "streetNumGrewOn",
        label: "What was the street number that you grew up on?",
        isDisabled: securityItems.some(
          (securityItem) => securityItem.question === "streetNumGrewOn"
        ),
      },
      {
        value: "cityGrewIn",
        label: "In what town or city did you grow up in?",
        isDisabled: securityItems.some(
          (securityItem) => securityItem.question === "cityGrewIn"
        ),
      },
      {
        value: "primarySchool",
        label: "What primary school did you go to?",
        isDisabled: securityItems.some(
          (securityItem) => securityItem.question === "primarySchool"
        ),
      },
    ];
  };
}
