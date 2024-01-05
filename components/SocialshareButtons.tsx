"use client";
import React from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  XIcon,
} from "react-share";

const SocialshareButtons = ({
  shareUrl,
  title,
}: {
  shareUrl: string;
  title: string;
}) => {
  return (
    <div className="space-x-3">
      <FacebookShareButton url={shareUrl}>
        <FacebookIcon size={25} round />
      </FacebookShareButton>

      <TwitterShareButton url={shareUrl} title={title}>
        <XIcon size={25} round />
      </TwitterShareButton>

      <TelegramShareButton url={shareUrl} title={title}>
        <TelegramIcon size={25} round />
      </TelegramShareButton>

      <WhatsappShareButton url={shareUrl} title={title}>
        <WhatsappIcon size={25} round />
      </WhatsappShareButton>
    </div>
  );
};

export default SocialshareButtons;
