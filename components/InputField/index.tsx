"use client";

import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import CustomButton from "../CustomButton";
import { fetchData } from "@/utils";
import { setTimeout } from "timers/promises";

function InputField() {
  const [url, setUrl] = useState<any>();
  const [copied, setCopied] = useState<boolean>(false);

  const ref = useRef("");
  const handleClick = () => {
    fetchData({
      url: ref.current,
      setUrl,
    });
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(url?.result.full_short_link);
    setCopied(true);
  };
  return (
    <div className="container">
      <div className="input-field">
        <div className="wrapper">
          <input
            onChange={(e) => (ref.current = e.target.value)}
            placeholder="shorten a link here..."
            type="text"
          />
          <CustomButton handleClick={handleClick}>Shorten it!</CustomButton>
        </div>
      </div>
      {url ? (
        <div className="short-link">
          <h5 className="main-url">{ref.current}</h5>
          <div className="short-link__copy-side">
            <h5 className="short-url">{url.result.full_short_link3}</h5>
            <div>
              <CustomButton handleClick={handleCopy}>
                {copied ? "Copied" : "Copy"}
              </CustomButton>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default InputField;
