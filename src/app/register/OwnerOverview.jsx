"use client";
import React, { useEffect, useRef } from "react";
import GoBackSvg from "../../svg/GoBackSvg";
import { handleIOSBrowser } from "../../util/browser-util";
import UploadDocSvg from "../../svg/UploadDocSvg";
import StoreDocSvg from "../../svg/StoreDocSvg";
import ShareDocSvg from "../../svg/ShareDocSvg";
import { animateIn, getSectionClassName } from "../../util/animation-util";
import UrlUtil from "../../util/url-util";

const OwnerOverview = ({
  handleGoForward = () => {},
  handleGoBack = () => {},
  position,
}) => {
  const sectionRef = useRef(null);
  let error;
  if (UrlUtil.getQueryVariable("error") === "no-valid-login-methods") {
    error = "No valid login methods";
  }

  useEffect(() => {
    handleIOSBrowser();
    animateIn(sectionRef.current);
  }, []);

  return (
    <div
      ref={sectionRef}
      id="section-1-owner"
      className={getSectionClassName(position)}
    >
      <div className="section-contents">
        <div className="title">Document Owner</div>
        <div className="subtitle">As an owner you can...</div>
        <div className="card owner1">
          <div className="card-body">
            <div
              className="card-body-section"
              style={{ marginTop: 0, marginBottom: "12px" }}
            >
              {error && <div className="error">{error}</div>}
            </div>
            <div className="card-body-section" style={{ marginTop: 0 }}>
              <UploadDocSvg />
              <div>Upload Documents</div>
            </div>
            <div className="card-body-section">
              <StoreDocSvg />
              <div>Store Documents</div>
            </div>
            <div className="card-body-section">
              <ShareDocSvg />
              <div>Share Documents</div>
            </div>
            <div className="card-body-section">
              <div className="bottom-exerpt">
                This account type will only allow you to upload store and share
                your own documents.
              </div>
            </div>
            <input
              style={{ width: "210px", marginTop: "27px" }}
              type="button"
              value="Continue"
              onClick={() => handleGoForward("owner", 2)}
            />
          </div>
        </div>
        <GoBackSvg color="#2362c7" goBack={() => handleGoBack("owner", 1)} />
      </div>
    </div>
  );
};

export default OwnerOverview;
