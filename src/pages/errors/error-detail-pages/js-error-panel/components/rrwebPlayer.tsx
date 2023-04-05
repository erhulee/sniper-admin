import { useEffect } from "react";
import { useRef } from "react";
import rrwebPlayer from "rrweb-player";
import "rrweb-player/dist/style.css";
const stack = [
  {
    type: 4,
    data: {
      href: "http://81.68.89.84:8345/",
      width: 2560,
      height: 1321,
    },
    timestamp: 1680707553870,
  },
  {
    type: 2,
    data: {
      node: {
        type: 0,
        childNodes: [
          {
            type: 1,
            name: "html",
            publicId: "",
            systemId: "",
            id: 2,
          },
          {
            type: 2,
            tagName: "html",
            attributes: {
              lang: "en",
            },
            childNodes: [
              {
                type: 2,
                tagName: "head",
                attributes: {},
                childNodes: [
                  {
                    type: 3,
                    textContent: "\n            ",
                    id: 5,
                  },
                  {
                    type: 2,
                    tagName: "script",
                    attributes: {
                      crossorigin: "",
                      src: "https://bdul0j-web-site.oss.laf.dev/index.js",
                    },
                    childNodes: [
                      {
                        type: 3,
                        textContent: "SCRIPT_PLACEHOLDER",
                        id: 7,
                      },
                    ],
                    id: 6,
                  },
                  {
                    type: 3,
                    textContent: "\n            ",
                    id: 8,
                  },
                  {
                    type: 2,
                    tagName: "script",
                    attributes: {
                      crossorigin: "",
                    },
                    childNodes: [
                      {
                        type: 3,
                        textContent: "SCRIPT_PLACEHOLDER",
                        id: 10,
                      },
                    ],
                    id: 9,
                  },
                  {
                    type: 3,
                    textContent: "\n      \n    ",
                    id: 11,
                  },
                  {
                    type: 2,
                    tagName: "meta",
                    attributes: {
                      charset: "UTF-8",
                    },
                    childNodes: [],
                    id: 12,
                  },
                  {
                    type: 3,
                    textContent: "\n    ",
                    id: 13,
                  },
                  {
                    type: 2,
                    tagName: "link",
                    attributes: {
                      rel: "icon",
                      type: "image/svg+xml",
                      href: "http://81.68.89.84:8345/vite.svg",
                    },
                    childNodes: [],
                    id: 14,
                  },
                  {
                    type: 3,
                    textContent: "\n    ",
                    id: 15,
                  },
                  {
                    type: 2,
                    tagName: "meta",
                    attributes: {
                      name: "viewport",
                      content: "width=device-width, initial-scale=1.0",
                    },
                    childNodes: [],
                    id: 16,
                  },
                  {
                    type: 3,
                    textContent: "\n    ",
                    id: 17,
                  },
                  {
                    type: 2,
                    tagName: "title",
                    attributes: {},
                    childNodes: [
                      {
                        type: 3,
                        textContent: "Vite + React + TS",
                        id: 19,
                      },
                    ],
                    id: 18,
                  },
                  {
                    type: 3,
                    textContent: "\n    ",
                    id: 20,
                  },
                  {
                    type: 2,
                    tagName: "script",
                    attributes: {
                      type: "module",
                      crossorigin: "",
                      src: "http://81.68.89.84:8345/assets/index-905ae9a3.js",
                    },
                    childNodes: [],
                    id: 21,
                  },
                  {
                    type: 3,
                    textContent: "\n    ",
                    id: 22,
                  },
                  {
                    type: 2,
                    tagName: "link",
                    attributes: {
                      rel: "stylesheet",
                      href: "http://81.68.89.84:8345/assets/index-d1dc9814.css",
                    },
                    childNodes: [],
                    id: 23,
                  },
                  {
                    type: 3,
                    textContent: "\n  ",
                    id: 24,
                  },
                ],
                id: 4,
              },
              {
                type: 3,
                textContent: "\n  ",
                id: 25,
              },
              {
                type: 2,
                tagName: "body",
                attributes: {},
                childNodes: [
                  {
                    type: 3,
                    textContent: "\n    ",
                    id: 27,
                  },
                  {
                    type: 2,
                    tagName: "div",
                    attributes: {
                      id: "root",
                    },
                    childNodes: [],
                    id: 28,
                  },
                  {
                    type: 3,
                    textContent: "\n  \n    \n  \n\n",
                    id: 29,
                  },
                ],
                id: 26,
              },
            ],
            id: 3,
          },
        ],
        id: 1,
      },
      initialOffset: {
        left: 0,
        top: 0,
      },
    },
    timestamp: 1680707553872,
  },
  {
    type: 3,
    data: {
      source: 1,
      positions: [
        {
          x: 361,
          y: 713,
          id: 3,
          timeOffset: 0,
        },
      ],
    },
    timestamp: 1680707553964,
  },
  {
    type: 3,
    data: {
      source: 1,
      positions: [
        {
          x: 360,
          y: 718,
          id: 3,
          timeOffset: -436,
        },
        {
          x: 355,
          y: 751,
          id: 3,
          timeOffset: -370,
        },
        {
          x: 340,
          y: 775,
          id: 3,
          timeOffset: -304,
        },
        {
          x: 336,
          y: 783,
          id: 3,
          timeOffset: -254,
        },
      ],
    },
    timestamp: 1680707554468,
  },
  {
    type: 0,
    data: {},
    timestamp: 1680707554790,
  },
  {
    type: 3,
    data: {
      source: 0,
      texts: [],
      attributes: [
        {
          id: 41,
          attributes: {
            "data-css-hash": "12u8cnt",
            "data-token-hash": "dupj7l",
          },
        },
        {
          id: 40,
          attributes: {
            "data-css-hash": "vj22rm",
            "data-token-hash": "dupj7l",
          },
        },
        {
          id: 39,
          attributes: {
            "data-css-hash": "1sl5drg",
            "data-token-hash": "dupj7l",
          },
        },
        {
          id: 30,
          attributes: {
            "data-css-hash": "1985ub8",
            "data-token-hash": "dupj7l",
          },
        },
      ],
      removes: [],
      adds: [
        {
          parentId: 4,
          nextId: 5,
          node: {
            type: 2,
            tagName: "style",
            attributes: {
              "data-rc-order": "prependQueue",
              "data-css-hash": "1985ub8",
              "data-token-hash": "dupj7l",
            },
            childNodes: [],
            id: 30,
          },
        },
        {
          parentId: 30,
          nextId: null,
          node: {
            type: 3,
            textContent:
              ':where(.css-mxhywb)[class^="ant-btn"], :where(.css-mxhywb)[class*=" ant-btn"] { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; box-sizing: border-box; }:where(.css-mxhywb)[class^="ant-btn"]::before, :where(.css-mxhywb)[class*=" ant-btn"]::before, :where(.css-mxhywb)[class^="ant-btn"]::after, :where(.css-mxhywb)[class*=" ant-btn"]::after { box-sizing: border-box; }:where(.css-mxhywb)[class^="ant-btn"] [class^="ant-btn"], :where(.css-mxhywb)[class*=" ant-btn"] [class^="ant-btn"], :where(.css-mxhywb)[class^="ant-btn"] [class*=" ant-btn"], :where(.css-mxhywb)[class*=" ant-btn"] [class*=" ant-btn"] { box-sizing: border-box; }:where(.css-mxhywb)[class^="ant-btn"] [class^="ant-btn"]::before, :where(.css-mxhywb)[class*=" ant-btn"] [class^="ant-btn"]::before, :where(.css-mxhywb)[class^="ant-btn"] [class*=" ant-btn"]::before, :where(.css-mxhywb)[class*=" ant-btn"] [class*=" ant-btn"]::before, :where(.css-mxhywb)[class^="ant-btn"] [class^="ant-btn"]::after, :where(.css-mxhywb)[class*=" ant-btn"] [class^="ant-btn"]::after, :where(.css-mxhywb)[class^="ant-btn"] [class*=" ant-btn"]::after, :where(.css-mxhywb)[class*=" ant-btn"] [class*=" ant-btn"]::after { box-sizing: border-box; }:where(.css-mxhywb).ant-btn { outline: none; position: relative; display: inline-block; font-weight: 400; white-space: nowrap; text-align: center; background-image: none; background-color: transparent; border: 1px solid transparent; cursor: pointer; transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1) 0s; user-select: none; touch-action: manipulation; line-height: 1.57143; color: rgba(0, 0, 0, 0.88); }:where(.css-mxhywb).ant-btn > span { display: inline-block; }:where(.css-mxhywb).ant-btn > .anticon + span, :where(.css-mxhywb).ant-btn > span + .anticon { margin-inline-start: 8px; }:where(.css-mxhywb).ant-btn > a { color: currentcolor; }:where(.css-mxhywb).ant-btn:not(:disabled):focus-visible { outline: rgb(145, 202, 255) solid 4px; outline-offset: 1px; transition: outline-offset 0s ease 0s, outline 0s ease 0s; }:where(.css-mxhywb).ant-btn-icon-only.ant-btn-compact-item { flex: 0 0 auto; }:where(.css-mxhywb).ant-btn-compact-item.ant-btn-primary:not([disabled]) + .ant-btn-compact-item.ant-btn-primary:not([disabled]) { position: relative; }:where(.css-mxhywb).ant-btn-compact-item.ant-btn-primary:not([disabled]) + .ant-btn-compact-item.ant-btn-primary:not([disabled])::before { position: absolute; top: -1px; inset-inline-start: -1px; display: inline-block; width: 1px; height: calc(100% + 2px); background-color: rgb(64, 150, 255); content: ""; }:where(.css-mxhywb).ant-btn-compact-vertical-item.ant-btn-primary:not([disabled]) + .ant-btn-compact-vertical-item.ant-btn-primary:not([disabled]) { position: relative; }:where(.css-mxhywb).ant-btn-compact-vertical-item.ant-btn-primary:not([disabled]) + .ant-btn-compact-vertical-item.ant-btn-primary:not([disabled])::before { position: absolute; top: -1px; inset-inline-start: -1px; display: inline-block; width: calc(100% + 2px); height: 1px; background-color: rgb(64, 150, 255); content: ""; }:where(.css-mxhywb).ant-btn.ant-btn-sm { font-size: 14px; height: 24px; padding: 0px 7px; border-radius: 4px; }:where(.css-mxhywb).ant-btn.ant-btn-sm.ant-btn-icon-only { width: 24px; padding-inline: 0px; }:where(.css-mxhywb).ant-btn.ant-btn-sm.ant-btn-icon-only.ant-btn-round { width: auto; }:where(.css-mxhywb).ant-btn.ant-btn-sm.ant-btn-icon-only > span { transform: scale(1.143); }:where(.css-mxhywb).ant-btn.ant-btn-sm.ant-btn-loading { opacity: 0.65; cursor: default; }:where(.css-mxhywb).ant-btn.ant-btn-sm .ant-btn-loading-icon { transition: width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0s, opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0s; }:where(.css-mxhywb).ant-btn.ant-btn-sm:not(.ant-btn-icon-only) .ant-btn-loading-icon > .anticon { margin-inline-end: 8px; }:where(.css-mxhywb).ant-btn.ant-btn-circle.ant-btn-sm { min-width: 24px; padding-inline: 0px; border-radius: 50%; }:where(.css-mxhywb).ant-btn.ant-btn-round.ant-btn-sm { border-radius: 24px; padding-inline: 12px; }:where(.css-mxhywb).ant-btn { font-size: 14px; height: 32px; padding: 4px 15px; border-radius: 6px; }:where(.css-mxhywb).ant-btn.ant-btn-icon-only { width: 32px; padding-inline: 0px; }:where(.css-mxhywb).ant-btn.ant-btn-icon-only.ant-btn-round { width: auto; }:where(.css-mxhywb).ant-btn.ant-btn-icon-only > span { transform: scale(1.143); }:where(.css-mxhywb).ant-btn.ant-btn-loading { opacity: 0.65; cursor: default; }:where(.css-mxhywb).ant-btn .ant-btn-loading-icon { transition: width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0s, opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0s; }:where(.css-mxhywb).ant-btn:not(.ant-btn-icon-only) .ant-btn-loading-icon > .anticon { margin-inline-end: 8px; }:where(.css-mxhywb).ant-btn.ant-btn-circle { min-width: 32px; padding-inline: 0px; border-radius: 50%; }:where(.css-mxhywb).ant-btn.ant-btn-round { border-radius: 32px; padding-inline: 16px; }:where(.css-mxhywb).ant-btn.ant-btn-lg { font-size: 16px; height: 40px; padding: 6.42857px 15px; border-radius: 8px; }:where(.css-mxhywb).ant-btn.ant-btn-lg.ant-btn-icon-only { width: 40px; padding-inline: 0px; }:where(.css-mxhywb).ant-btn.ant-btn-lg.ant-btn-icon-only.ant-btn-round { width: auto; }:where(.css-mxhywb).ant-btn.ant-btn-lg.ant-btn-icon-only > span { transform: scale(1.143); }:where(.css-mxhywb).ant-btn.ant-btn-lg.ant-btn-loading { opacity: 0.65; cursor: default; }:where(.css-mxhywb).ant-btn.ant-btn-lg .ant-btn-loading-icon { transition: width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0s, opacity 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0s; }:where(.css-mxhywb).ant-btn.ant-btn-lg:not(.ant-btn-icon-only) .ant-btn-loading-icon > .anticon { margin-inline-end: 8px; }:where(.css-mxhywb).ant-btn.ant-btn-circle.ant-btn-lg { min-width: 40px; padding-inline: 0px; border-radius: 50%; }:where(.css-mxhywb).ant-btn.ant-btn-round.ant-btn-lg { border-radius: 40px; padding-inline: 20px; }:where(.css-mxhywb).ant-btn.ant-btn-block { width: 100%; }:where(.css-mxhywb).ant-btn-default { background-color: rgb(255, 255, 255); border-color: rgb(217, 217, 217); box-shadow: rgba(0, 0, 0, 0.02) 0px 2px 0px; }:where(.css-mxhywb).ant-btn-default:disabled { cursor: not-allowed; border-color: rgb(217, 217, 217); color: rgba(0, 0, 0, 0.25); background-color: rgba(0, 0, 0, 0.04); box-shadow: none; }:where(.css-mxhywb).ant-btn-default:not(:disabled):hover { color: rgb(64, 150, 255); border-color: rgb(64, 150, 255); }:where(.css-mxhywb).ant-btn-default:not(:disabled):active { color: rgb(9, 88, 217); border-color: rgb(9, 88, 217); }:where(.css-mxhywb).ant-btn-default.ant-btn-background-ghost { color: rgb(255, 255, 255); background-color: transparent; border-color: rgb(255, 255, 255); box-shadow: none; }:where(.css-mxhywb).ant-btn-default.ant-btn-background-ghost:not(:disabled):hover { background-color: transparent; }:where(.css-mxhywb).ant-btn-default.ant-btn-background-ghost:not(:disabled):active { background-color: transparent; }:where(.css-mxhywb).ant-btn-default.ant-btn-background-ghost:disabled { cursor: not-allowed; color: rgba(0, 0, 0, 0.25); border-color: rgb(217, 217, 217); }:where(.css-mxhywb).ant-btn-default.ant-btn-dangerous { color: rgb(255, 77, 79); border-color: rgb(255, 77, 79); }:where(.css-mxhywb).ant-btn-default.ant-btn-dangerous:not(:disabled):hover { color: rgb(255, 120, 117); border-color: rgb(255, 163, 158); }:where(.css-mxhywb).ant-btn-default.ant-btn-dangerous:not(:disabled):active { color: rgb(217, 54, 62); border-color: rgb(217, 54, 62); }:where(.css-mxhywb).ant-btn-default.ant-btn-dangerous.ant-btn-background-ghost { color: rgb(255, 77, 79); background-color: transparent; border-color: rgb(255, 77, 79); box-shadow: none; }:where(.css-mxhywb).ant-btn-default.ant-btn-dangerous.ant-btn-background-ghost:not(:disabled):hover { background-color: transparent; }:where(.css-mxhywb).ant-btn-default.ant-btn-dangerous.ant-btn-background-ghost:not(:disabled):active { background-color: transparent; }:where(.css-mxhywb).ant-btn-default.ant-btn-dangerous.ant-btn-background-ghost:disabled { cursor: not-allowed; color: rgba(0, 0, 0, 0.25); border-color: rgb(217, 217, 217); }:where(.css-mxhywb).ant-btn-default.ant-btn-dangerous:disabled { cursor: not-allowed; border-color: rgb(217, 217, 217); color: rgba(0, 0, 0, 0.25); background-color: rgba(0, 0, 0, 0.04); box-shadow: none; }:where(.css-mxhywb).ant-btn-primary { color: rgb(255, 255, 255); background-color: rgb(22, 119, 255); box-shadow: rgba(5, 145, 255, 0.1) 0px 2px 0px; }:where(.css-mxhywb).ant-btn-primary:disabled { cursor: not-allowed; border-color: rgb(217, 217, 217); color: rgba(0, 0, 0, 0.25); background-color: rgba(0, 0, 0, 0.04); box-shadow: none; }:where(.css-mxhywb).ant-btn-primary:not(:disabled):hover { color: rgb(255, 255, 255); background-color: rgb(64, 150, 255); }:where(.css-mxhywb).ant-btn-primary:not(:disabled):active { color: rgb(255, 255, 255); background-color: rgb(9, 88, 217); }:where(.css-mxhywb).ant-btn-primary.ant-btn-background-ghost { color: rgb(22, 119, 255); background-color: transparent; border-color: rgb(22, 119, 255); box-shadow: none; }:where(.css-mxhywb).ant-btn-primary.ant-btn-background-ghost:not(:disabled):hover { background-color: transparent; color: rgb(64, 150, 255); border-color: rgb(64, 150, 255); }:where(.css-mxhywb).ant-btn-primary.ant-btn-background-ghost:not(:disabled):active { background-color: transparent; color: rgb(9, 88, 217); border-color: rgb(9, 88, 217); }:where(.css-mxhywb).ant-btn-primary.ant-btn-background-ghost:disabled { cursor: not-allowed; color: rgba(0, 0, 0, 0.25); border-color: rgb(217, 217, 217); }:where(.css-mxhywb).ant-btn-primary.ant-btn-dangerous { background-color: rgb(255, 77, 79); box-shadow: rgba(255, 38, 5, 0.06) 0px 2px 0px; }:where(.css-mxhywb).ant-btn-primary.ant-btn-dangerous:not(:disabled):hover { background-color: rgb(255, 120, 117); }:where(.css-mxhywb).ant-btn-primary.ant-btn-dangerous:not(:disabled):active { background-color: rgb(217, 54, 62); }:where(.css-mxhywb).ant-btn-primary.ant-btn-dangerous.ant-btn-background-ghost { color: rgb(255, 77, 79); background-color: transparent; border-color: rgb(255, 77, 79); box-shadow: none; }:where(.css-mxhywb).ant-btn-primary.ant-btn-dangerous.ant-btn-background-ghost:not(:disabled):hover { background-color: transparent; color: rgb(255, 120, 117); border-color: rgb(255, 120, 117); }:where(.css-mxhywb).ant-btn-primary.ant-btn-dangerous.ant-btn-background-ghost:not(:disabled):active { background-color: transparent; color: rgb(217, 54, 62); border-color: rgb(217, 54, 62); }:where(.css-mxhywb).ant-btn-primary.ant-btn-dangerous.ant-btn-background-ghost:disabled { cursor: not-allowed; color: rgba(0, 0, 0, 0.25); border-color: rgb(217, 217, 217); }:where(.css-mxhywb).ant-btn-primary.ant-btn-dangerous:disabled { cursor: not-allowed; border-color: rgb(217, 217, 217); color: rgba(0, 0, 0, 0.25); background-color: rgba(0, 0, 0, 0.04); box-shadow: none; }:where(.css-mxhywb).ant-btn-dashed { background-color: rgb(255, 255, 255); border-color: rgb(217, 217, 217); box-shadow: rgba(0, 0, 0, 0.02) 0px 2px 0px; border-style: dashed; }:where(.css-mxhywb).ant-btn-dashed:disabled { cursor: not-allowed; border-color: rgb(217, 217, 217); color: rgba(0, 0, 0, 0.25); background-color: rgba(0, 0, 0, 0.04); box-shadow: none; }:where(.css-mxhywb).ant-btn-dashed:not(:disabled):hover { color: rgb(64, 150, 255); border-color: rgb(64, 150, 255); }:where(.css-mxhywb).ant-btn-dashed:not(:disabled):active { color: rgb(9, 88, 217); border-color: rgb(9, 88, 217); }:where(.css-mxhywb).ant-btn-dashed.ant-btn-background-ghost { color: rgb(255, 255, 255); background-color: transparent; border-color: rgb(255, 255, 255); box-shadow: none; }:where(.css-mxhywb).ant-btn-dashed.ant-btn-background-ghost:not(:disabled):hover { background-color: transparent; }:where(.css-mxhywb).ant-btn-dashed.ant-btn-background-ghost:not(:disabled):active { background-color: transparent; }:where(.css-mxhywb).ant-btn-dashed.ant-btn-background-ghost:disabled { cursor: not-allowed; color: rgba(0, 0, 0, 0.25); border-color: rgb(217, 217, 217); }:where(.css-mxhywb).ant-btn-dashed.ant-btn-dangerous { color: rgb(255, 77, 79); border-color: rgb(255, 77, 79); }:where(.css-mxhywb).ant-btn-dashed.ant-btn-dangerous:not(:disabled):hover { color: rgb(255, 120, 117); border-color: rgb(255, 163, 158); }:where(.css-mxhywb).ant-btn-dashed.ant-btn-dangerous:not(:disabled):active { color: rgb(217, 54, 62); border-color: rgb(217, 54, 62); }:where(.css-mxhywb).ant-btn-dashed.ant-btn-dangerous.ant-btn-background-ghost { color: rgb(255, 77, 79); background-color: transparent; border-color: rgb(255, 77, 79); box-shadow: none; }:where(.css-mxhywb).ant-btn-dashed.ant-btn-dangerous.ant-btn-background-ghost:not(:disabled):hover { background-color: transparent; }:where(.css-mxhywb).ant-btn-dashed.ant-btn-dangerous.ant-btn-background-ghost:not(:disabled):active { background-color: transparent; }:where(.css-mxhywb).ant-btn-dashed.ant-btn-dangerous.ant-btn-background-ghost:disabled { cursor: not-allowed; color: rgba(0, 0, 0, 0.25); border-color: rgb(217, 217, 217); }:where(.css-mxhywb).ant-btn-dashed.ant-btn-dangerous:disabled { cursor: not-allowed; border-color: rgb(217, 217, 217); color: rgba(0, 0, 0, 0.25); background-color: rgba(0, 0, 0, 0.04); box-shadow: none; }:where(.css-mxhywb).ant-btn-link { color: rgb(22, 119, 255); }:where(.css-mxhywb).ant-btn-link:not(:disabled):hover { color: rgb(105, 177, 255); }:where(.css-mxhywb).ant-btn-link:not(:disabled):active { color: rgb(9, 88, 217); }:where(.css-mxhywb).ant-btn-link:disabled { cursor: not-allowed; color: rgba(0, 0, 0, 0.25); }:where(.css-mxhywb).ant-btn-link.ant-btn-dangerous { color: rgb(255, 77, 79); }:where(.css-mxhywb).ant-btn-link.ant-btn-dangerous:not(:disabled):hover { color: rgb(255, 120, 117); }:where(.css-mxhywb).ant-btn-link.ant-btn-dangerous:not(:disabled):active { color: rgb(217, 54, 62); }:where(.css-mxhywb).ant-btn-link.ant-btn-dangerous:disabled { cursor: not-allowed; color: rgba(0, 0, 0, 0.25); }:where(.css-mxhywb).ant-btn-text:not(:disabled):hover { color: rgba(0, 0, 0, 0.88); background-color: rgba(0, 0, 0, 0.06); }:where(.css-mxhywb).ant-btn-text:not(:disabled):active { color: rgba(0, 0, 0, 0.88); background-color: rgba(0, 0, 0, 0.15); }:where(.css-mxhywb).ant-btn-text:disabled { cursor: not-allowed; color: rgba(0, 0, 0, 0.25); }:where(.css-mxhywb).ant-btn-text.ant-btn-dangerous { color: rgb(255, 77, 79); }:where(.css-mxhywb).ant-btn-text.ant-btn-dangerous:disabled { cursor: not-allowed; color: rgba(0, 0, 0, 0.25); }:where(.css-mxhywb).ant-btn-text.ant-btn-dangerous:not(:disabled):hover { color: rgb(255, 120, 117); background-color: rgb(255, 242, 240); }:where(.css-mxhywb).ant-btn-text.ant-btn-dangerous:not(:disabled):active { color: rgb(255, 120, 117); background-color: rgb(255, 242, 240); }:where(.css-mxhywb).ant-btn-disabled { cursor: not-allowed; border-color: rgb(217, 217, 217); color: rgba(0, 0, 0, 0.25); background-color: rgba(0, 0, 0, 0.04); box-shadow: none; }:where(.css-mxhywb).ant-btn-disabled.ant-btn:hover { cursor: not-allowed; border-color: rgb(217, 217, 217); color: rgba(0, 0, 0, 0.25); background-color: rgba(0, 0, 0, 0.04); box-shadow: none; }:where(.css-mxhywb).ant-btn-group { position: relative; display: inline-flex; }:where(.css-mxhywb).ant-btn-group > span:not(:last-child), :where(.css-mxhywb).ant-btn-group > .ant-btn:not(:last-child), :where(.css-mxhywb).ant-btn-group > span:not(:last-child) > .ant-btn, :where(.css-mxhywb).ant-btn-group > .ant-btn:not(:last-child) > .ant-btn { border-start-end-radius: 0px; border-end-end-radius: 0px; }:where(.css-mxhywb).ant-btn-group > span:not(:first-child), :where(.css-mxhywb).ant-btn-group > .ant-btn:not(:first-child) { margin-inline-start: -1px; }:where(.css-mxhywb).ant-btn-group > span:not(:first-child), :where(.css-mxhywb).ant-btn-group > .ant-btn:not(:first-child), :where(.css-mxhywb).ant-btn-group > span:not(:first-child) > .ant-btn, :where(.css-mxhywb).ant-btn-group > .ant-btn:not(:first-child) > .ant-btn { border-start-start-radius: 0px; border-end-start-radius: 0px; }:where(.css-mxhywb).ant-btn-group .ant-btn { position: relative; z-index: 1; }:where(.css-mxhywb).ant-btn-group .ant-btn:hover, :where(.css-mxhywb).ant-btn-group .ant-btn:focus, :where(.css-mxhywb).ant-btn-group .ant-btn:active { z-index: 2; }:where(.css-mxhywb).ant-btn-group .ant-btn[disabled] { z-index: 0; }:where(.css-mxhywb).ant-btn-group .ant-btn-icon-only { font-size: 14px; }:where(.css-mxhywb).ant-btn-group > span:not(:last-child):not(:disabled), :where(.css-mxhywb).ant-btn-group > .ant-btn-primary:not(:last-child):not(:disabled), :where(.css-mxhywb).ant-btn-group > span:not(:last-child) > .ant-btn-primary:not(:disabled), :where(.css-mxhywb).ant-btn-group > .ant-btn-primary:not(:last-child) > .ant-btn-primary:not(:disabled) { border-inline-end-color: rgb(64, 150, 255); }:where(.css-mxhywb).ant-btn-group > span:not(:first-child):not(:disabled), :where(.css-mxhywb).ant-btn-group > .ant-btn-primary:not(:first-child):not(:disabled), :where(.css-mxhywb).ant-btn-group > span:not(:first-child) > .ant-btn-primary:not(:disabled), :where(.css-mxhywb).ant-btn-group > .ant-btn-primary:not(:first-child) > .ant-btn-primary:not(:disabled) { border-inline-start-color: rgb(64, 150, 255); }:where(.css-mxhywb).ant-btn-group > span:not(:last-child):not(:disabled), :where(.css-mxhywb).ant-btn-group > .ant-btn-danger:not(:last-child):not(:disabled), :where(.css-mxhywb).ant-btn-group > span:not(:last-child) > .ant-btn-danger:not(:disabled), :where(.css-mxhywb).ant-btn-group > .ant-btn-danger:not(:last-child) > .ant-btn-danger:not(:disabled) { border-inline-end-color: rgb(255, 120, 117); }:where(.css-mxhywb).ant-btn-group > span:not(:first-child):not(:disabled), :where(.css-mxhywb).ant-btn-group > .ant-btn-danger:not(:first-child):not(:disabled), :where(.css-mxhywb).ant-btn-group > span:not(:first-child) > .ant-btn-danger:not(:disabled), :where(.css-mxhywb).ant-btn-group > .ant-btn-danger:not(:first-child) > .ant-btn-danger:not(:disabled) { border-inline-start-color: rgb(255, 120, 117); }:where(.css-mxhywb).ant-btn-compact-item:not(.ant-btn-compact-last-item) { margin-inline-end: -1px; }:where(.css-mxhywb).ant-btn-compact-item:hover, :where(.css-mxhywb).ant-btn-compact-item:focus, :where(.css-mxhywb).ant-btn-compact-item:active { z-index: 2; }:where(.css-mxhywb).ant-btn-compact-item[disabled] { z-index: 0; }:where(.css-mxhywb).ant-btn-compact-item:not(.ant-btn-compact-first-item):not(.ant-btn-compact-last-item) { border-radius: 0px; }:where(.css-mxhywb).ant-btn-compact-item:not(.ant-btn-compact-last-item).ant-btn-compact-first-item, :where(.css-mxhywb).ant-btn-compact-item:not(.ant-btn-compact-last-item).ant-btn-compact-first-item.ant-btn-sm, :where(.css-mxhywb).ant-btn-compact-item:not(.ant-btn-compact-last-item).ant-btn-compact-first-item.ant-btn-lg { border-start-end-radius: 0px; border-end-end-radius: 0px; }:where(.css-mxhywb).ant-btn-compact-item:not(.ant-btn-compact-first-item).ant-btn-compact-last-item, :where(.css-mxhywb).ant-btn-compact-item:not(.ant-btn-compact-first-item).ant-btn-compact-last-item.ant-btn-sm, :where(.css-mxhywb).ant-btn-compact-item:not(.ant-btn-compact-first-item).ant-btn-compact-last-item.ant-btn-lg { border-start-start-radius: 0px; border-end-start-radius: 0px; }:where(.css-mxhywb).ant-btn-compact-vertical-item:not(.ant-btn-compact-vertical-last-item) { margin-bottom: -1px; }:where(.css-mxhywb).ant-btn-compact-vertical-item:hover, :where(.css-mxhywb).ant-btn-compact-vertical-item:focus, :where(.css-mxhywb).ant-btn-compact-vertical-item:active { z-index: 2; }:where(.css-mxhywb).ant-btn-compact-vertical-item[disabled] { z-index: 0; }:where(.css-mxhywb).ant-btn-compact-vertical-item:not(.ant-btn-compact-vertical-first-item):not(.ant-btn-compact-vertical-last-item) { border-radius: 0px; }:where(.css-mxhywb).ant-btn-compact-vertical-item.ant-btn-compact-vertical-first-item:not(.ant-btn-compact-vertical-last-item), :where(.css-mxhywb).ant-btn-compact-vertical-item.ant-btn-compact-vertical-first-item:not(.ant-btn-compact-vertical-last-item).ant-btn-sm, :where(.css-mxhywb).ant-btn-compact-vertical-item.ant-btn-compact-vertical-first-item:not(.ant-btn-compact-vertical-last-item).ant-btn-lg { border-end-end-radius: 0px; border-end-start-radius: 0px; }:where(.css-mxhywb).ant-btn-compact-vertical-item.ant-btn-compact-vertical-last-item:not(.ant-btn-compact-vertical-first-item), :where(.css-mxhywb).ant-btn-compact-vertical-item.ant-btn-compact-vertical-last-item:not(.ant-btn-compact-vertical-first-item).ant-btn-sm, :where(.css-mxhywb).ant-btn-compact-vertical-item.ant-btn-compact-vertical-last-item:not(.ant-btn-compact-vertical-first-item).ant-btn-lg { border-start-start-radius: 0px; border-start-end-radius: 0px; }',
            isStyle: true,
            id: 31,
          },
        },
        {
          parentId: 28,
          nextId: null,
          node: {
            type: 2,
            tagName: "div",
            attributes: {},
            childNodes: [],
            id: 32,
          },
        },
        {
          parentId: 32,
          nextId: null,
          node: {
            type: 2,
            tagName: "div",
            attributes: {},
            childNodes: [],
            id: 33,
          },
        },
        {
          parentId: 33,
          nextId: null,
          node: {
            type: 2,
            tagName: "div",
            attributes: {},
            childNodes: [],
            id: 34,
          },
        },
        {
          parentId: 34,
          nextId: null,
          node: {
            type: 2,
            tagName: "div",
            attributes: {},
            childNodes: [],
            id: 35,
          },
        },
        {
          parentId: 35,
          nextId: null,
          node: {
            type: 2,
            tagName: "pre",
            attributes: {
              style:
                "text-align: start; background-color: black; padding: 2rem; border-radius: 20px;",
            },
            childNodes: [],
            id: 36,
          },
        },
        {
          parentId: 36,
          nextId: null,
          node: {
            type: 2,
            tagName: "div",
            attributes: {},
            childNodes: [],
            id: 37,
          },
        },
        {
          parentId: 37,
          nextId: null,
          node: {
            type: 3,
            textContent: "){}",
            id: 38,
          },
        },
        {
          parentId: 4,
          nextId: 30,
          node: {
            type: 2,
            tagName: "style",
            attributes: {
              "data-rc-order": "prependQueue",
              "data-css-hash": "1sl5drg",
              "data-token-hash": "dupj7l",
            },
            childNodes: [],
            id: 39,
          },
        },
        {
          parentId: 4,
          nextId: 39,
          node: {
            type: 2,
            tagName: "style",
            attributes: {
              "data-rc-order": "prependQueue",
              "data-css-hash": "vj22rm",
              "data-token-hash": "dupj7l",
            },
            childNodes: [],
            id: 40,
          },
        },
        {
          parentId: 4,
          nextId: 40,
          node: {
            type: 2,
            tagName: "style",
            attributes: {
              "data-rc-order": "prependQueue",
              "data-css-hash": "12u8cnt",
              "data-token-hash": "dupj7l",
            },
            childNodes: [],
            id: 41,
          },
        },
        {
          parentId: 41,
          nextId: null,
          node: {
            type: 3,
            textContent:
              ":where(.css-mxhywb) a { color: rgb(22, 119, 255); text-decoration: none; background-color: transparent; outline: none; cursor: pointer; transition: color 0.3s ease 0s; }:where(.css-mxhywb) a:hover { color: rgb(105, 177, 255); }:where(.css-mxhywb) a:active { color: rgb(9, 88, 217); }:where(.css-mxhywb) a:active, :where(.css-mxhywb) a:hover { text-decoration: none; outline: 0px; }:where(.css-mxhywb) a:focus { text-decoration: none; outline: 0px; }:where(.css-mxhywb) a[disabled] { color: rgba(0, 0, 0, 0.25); cursor: not-allowed; }",
            isStyle: true,
            id: 42,
          },
        },
        {
          parentId: 40,
          nextId: null,
          node: {
            type: 3,
            textContent:
              ':where(.css-mxhywb)[class^="ant-switch"], :where(.css-mxhywb)[class*=" ant-switch"] { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; box-sizing: border-box; }:where(.css-mxhywb)[class^="ant-switch"]::before, :where(.css-mxhywb)[class*=" ant-switch"]::before, :where(.css-mxhywb)[class^="ant-switch"]::after, :where(.css-mxhywb)[class*=" ant-switch"]::after { box-sizing: border-box; }:where(.css-mxhywb)[class^="ant-switch"] [class^="ant-switch"], :where(.css-mxhywb)[class*=" ant-switch"] [class^="ant-switch"], :where(.css-mxhywb)[class^="ant-switch"] [class*=" ant-switch"], :where(.css-mxhywb)[class*=" ant-switch"] [class*=" ant-switch"] { box-sizing: border-box; }:where(.css-mxhywb)[class^="ant-switch"] [class^="ant-switch"]::before, :where(.css-mxhywb)[class*=" ant-switch"] [class^="ant-switch"]::before, :where(.css-mxhywb)[class^="ant-switch"] [class*=" ant-switch"]::before, :where(.css-mxhywb)[class*=" ant-switch"] [class*=" ant-switch"]::before, :where(.css-mxhywb)[class^="ant-switch"] [class^="ant-switch"]::after, :where(.css-mxhywb)[class*=" ant-switch"] [class^="ant-switch"]::after, :where(.css-mxhywb)[class^="ant-switch"] [class*=" ant-switch"]::after, :where(.css-mxhywb)[class*=" ant-switch"] [class*=" ant-switch"]::after { box-sizing: border-box; }:where(.css-mxhywb).ant-switch { box-sizing: border-box; margin: 0px; padding: 0px; color: rgba(0, 0, 0, 0.88); font-size: 14px; line-height: 22px; list-style: none; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; position: relative; display: inline-block; min-width: 44px; height: 22px; vertical-align: middle; background: rgba(0, 0, 0, 0.25); border: 0px; border-radius: 100px; cursor: pointer; transition: all 0.2s ease 0s; user-select: none; }:where(.css-mxhywb).ant-switch:hover:not(.ant-switch-disabled) { background: rgba(0, 0, 0, 0.45); }:where(.css-mxhywb).ant-switch:focus-visible { outline: rgb(145, 202, 255) solid 4px; outline-offset: 1px; transition: outline-offset 0s ease 0s, outline 0s ease 0s; }:where(.css-mxhywb).ant-switch.ant-switch-checked { background: rgb(22, 119, 255); }:where(.css-mxhywb).ant-switch.ant-switch-checked:hover:not(.ant-switch-disabled) { background: rgb(64, 150, 255); }:where(.css-mxhywb).ant-switch.ant-switch-loading, :where(.css-mxhywb).ant-switch.ant-switch-disabled { cursor: not-allowed; opacity: 0.65; }:where(.css-mxhywb).ant-switch.ant-switch-loading *, :where(.css-mxhywb).ant-switch.ant-switch-disabled * { box-shadow: none; cursor: not-allowed; }:where(.css-mxhywb).ant-switch.ant-switch-rtl { direction: rtl; }:where(.css-mxhywb).ant-switch .ant-switch-inner { display: block; overflow: hidden; border-radius: 100px; height: 100%; padding-inline: 24px 9px; transition: padding-inline-start 0.2s ease-in-out 0s, padding-inline-end 0.2s ease-in-out 0s; }:where(.css-mxhywb).ant-switch .ant-switch-inner .ant-switch-inner-checked, :where(.css-mxhywb).ant-switch .ant-switch-inner .ant-switch-inner-unchecked { display: block; color: rgb(255, 255, 255); font-size: 12px; transition: margin-inline-start 0.2s ease-in-out 0s, margin-inline-end 0.2s ease-in-out 0s; pointer-events: none; }:where(.css-mxhywb).ant-switch .ant-switch-inner .ant-switch-inner-checked { margin-inline: calc((-100% + 22px) - 48px) calc(100% - 22px + 48px); }:where(.css-mxhywb).ant-switch .ant-switch-inner .ant-switch-inner-unchecked { margin-top: -22px; margin-inline: 0px; }:where(.css-mxhywb).ant-switch.ant-switch-checked .ant-switch-inner { padding-inline: 9px 24px; }:where(.css-mxhywb).ant-switch.ant-switch-checked .ant-switch-inner .ant-switch-inner-checked { margin-inline: 0px; }:where(.css-mxhywb).ant-switch.ant-switch-checked .ant-switch-inner .ant-switch-inner-unchecked { margin-inline: calc(100% - 22px + 48px) calc((-100% + 22px) - 48px); }:where(.css-mxhywb).ant-switch:not(.ant-switch-disabled):active:not(.ant-switch-checked) .ant-switch-inner .ant-switch-inner-unchecked { margin-inline: 4px -4px; }:where(.css-mxhywb).ant-switch:not(.ant-switch-disabled):active.ant-switch-checked .ant-switch-inner .ant-switch-inner-checked { margin-inline: -4px 4px; }:where(.css-mxhywb).ant-switch .ant-switch-handle { position: absolute; top: 2px; inset-inline-start: 2px; width: 18px; height: 18px; transition: all 0.2s ease-in-out 0s; }:where(.css-mxhywb).ant-switch .ant-switch-handle::before { position: absolute; top: 0px; inset-inline: 0px; bottom: 0px; background-color: rgb(255, 255, 255); border-radius: 9px; box-shadow: rgba(0, 35, 11, 0.2) 0px 2px 4px 0px; transition: all 0.2s ease-in-out 0s; content: ""; }:where(.css-mxhywb).ant-switch.ant-switch-checked .ant-switch-handle { inset-inline-start: calc(100% - 20px); }:where(.css-mxhywb).ant-switch:not(.ant-switch-disabled):active .ant-switch-handle::before { inset-inline: 0px -30%; }:where(.css-mxhywb).ant-switch:not(.ant-switch-disabled):active.ant-switch-checked .ant-switch-handle::before { inset-inline: -30% 0px; }:where(.css-mxhywb).ant-switch .ant-switch-loading-icon.anticon { position: relative; top: 2px; color: rgba(0, 0, 0, 0.65); vertical-align: top; }:where(.css-mxhywb).ant-switch.ant-switch-checked .ant-switch-loading-icon { color: rgb(22, 119, 255); }:where(.css-mxhywb).ant-switch.ant-switch-small { min-width: 28px; height: 16px; line-height: 16px; }:where(.css-mxhywb).ant-switch.ant-switch-small .ant-switch-inner { padding-inline: 18px 6px; }:where(.css-mxhywb).ant-switch.ant-switch-small .ant-switch-inner .ant-switch-inner-checked { margin-inline: calc((-100% + 16px) - 36px) calc(100% - 16px + 36px); }:where(.css-mxhywb).ant-switch.ant-switch-small .ant-switch-inner .ant-switch-inner-unchecked { margin-top: -16px; margin-inline: 0px; }:where(.css-mxhywb).ant-switch.ant-switch-small .ant-switch-handle { width: 12px; height: 12px; }:where(.css-mxhywb).ant-switch.ant-switch-small .ant-switch-loading-icon { top: 1.5px; font-size: 9px; }:where(.css-mxhywb).ant-switch.ant-switch-small.ant-switch-checked .ant-switch-inner { padding-inline: 6px 18px; }:where(.css-mxhywb).ant-switch.ant-switch-small.ant-switch-checked .ant-switch-inner .ant-switch-inner-checked { margin-inline: 0px; }:where(.css-mxhywb).ant-switch.ant-switch-small.ant-switch-checked .ant-switch-inner .ant-switch-inner-unchecked { margin-inline: calc(100% - 16px + 36px) calc((-100% + 16px) - 36px); }:where(.css-mxhywb).ant-switch.ant-switch-small.ant-switch-checked .ant-switch-handle { inset-inline-start: calc(100% - 14px); }:where(.css-mxhywb).ant-switch.ant-switch-small:not(.ant-switch-disabled):active:not(.ant-switch-checked) .ant-switch-inner .ant-switch-inner-unchecked { margin-inline: 2px -2px; }:where(.css-mxhywb).ant-switch.ant-switch-small:not(.ant-switch-disabled):active.ant-switch-checked .ant-switch-inner .ant-switch-inner-checked { margin-inline: -2px 2px; }',
            isStyle: true,
            id: 43,
          },
        },
        {
          parentId: 39,
          nextId: null,
          node: {
            type: 3,
            textContent:
              ':where(.css-mxhywb)[class^="ant-wave"], :where(.css-mxhywb)[class*=" ant-wave"] { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; box-sizing: border-box; }:where(.css-mxhywb)[class^="ant-wave"]::before, :where(.css-mxhywb)[class*=" ant-wave"]::before, :where(.css-mxhywb)[class^="ant-wave"]::after, :where(.css-mxhywb)[class*=" ant-wave"]::after { box-sizing: border-box; }:where(.css-mxhywb)[class^="ant-wave"] [class^="ant-wave"], :where(.css-mxhywb)[class*=" ant-wave"] [class^="ant-wave"], :where(.css-mxhywb)[class^="ant-wave"] [class*=" ant-wave"], :where(.css-mxhywb)[class*=" ant-wave"] [class*=" ant-wave"] { box-sizing: border-box; }:where(.css-mxhywb)[class^="ant-wave"] [class^="ant-wave"]::before, :where(.css-mxhywb)[class*=" ant-wave"] [class^="ant-wave"]::before, :where(.css-mxhywb)[class^="ant-wave"] [class*=" ant-wave"]::before, :where(.css-mxhywb)[class*=" ant-wave"] [class*=" ant-wave"]::before, :where(.css-mxhywb)[class^="ant-wave"] [class^="ant-wave"]::after, :where(.css-mxhywb)[class*=" ant-wave"] [class^="ant-wave"]::after, :where(.css-mxhywb)[class^="ant-wave"] [class*=" ant-wave"]::after, :where(.css-mxhywb)[class*=" ant-wave"] [class*=" ant-wave"]::after { box-sizing: border-box; }:where(.css-mxhywb).ant-wave { position: absolute; background: transparent; pointer-events: none; box-sizing: border-box; color: var(--wave-color, #1677ff); box-shadow: currentcolor 0px 0px 0px 0px; opacity: 0.2; }:where(.css-mxhywb).ant-wave.wave-motion-appear { transition: box-shadow 0.4s cubic-bezier(0.08, 0.82, 0.17, 1) 0s, opacity 2s cubic-bezier(0.08, 0.82, 0.17, 1) 0s; }:where(.css-mxhywb).ant-wave.wave-motion-appear-active { box-shadow: currentcolor 0px 0px 0px 6px; opacity: 0; }',
            isStyle: true,
            id: 44,
          },
        },
        {
          parentId: 32,
          nextId: 33,
          node: {
            type: 2,
            tagName: "div",
            attributes: {
              style: "display: flex;",
            },
            childNodes: [],
            id: 45,
          },
        },
        {
          parentId: 45,
          nextId: null,
          node: {
            type: 2,
            tagName: "button",
            attributes: {
              type: "button",
              role: "switch",
              "aria-checked": "true",
              class: "ant-switch css-mxhywb ant-switch-checked",
            },
            childNodes: [],
            id: 46,
          },
        },
        {
          parentId: 45,
          nextId: 46,
          node: {
            type: 2,
            tagName: "div",
            attributes: {
              style: "flex: 1 1 0%; font-size: 2em;",
            },
            childNodes: [],
            id: 47,
          },
        },
        {
          parentId: 47,
          nextId: null,
          node: {
            type: 3,
            textContent: "测试页面",
            id: 48,
          },
        },
        {
          parentId: 46,
          nextId: null,
          node: {
            type: 2,
            tagName: "span",
            attributes: {
              class: "ant-switch-inner",
            },
            childNodes: [],
            id: 49,
          },
        },
        {
          parentId: 46,
          nextId: 49,
          node: {
            type: 2,
            tagName: "div",
            attributes: {
              class: "ant-switch-handle",
            },
            childNodes: [],
            id: 50,
          },
        },
        {
          parentId: 49,
          nextId: null,
          node: {
            type: 2,
            tagName: "span",
            attributes: {
              class: "ant-switch-inner-unchecked",
            },
            childNodes: [],
            id: 51,
          },
        },
        {
          parentId: 49,
          nextId: 51,
          node: {
            type: 2,
            tagName: "span",
            attributes: {
              class: "ant-switch-inner-checked",
            },
            childNodes: [],
            id: 52,
          },
        },
        {
          parentId: 52,
          nextId: null,
          node: {
            type: 3,
            textContent: "hash",
            id: 53,
          },
        },
        {
          parentId: 51,
          nextId: null,
          node: {
            type: 3,
            textContent: "history",
            id: 54,
          },
        },
        {
          parentId: 34,
          nextId: 35,
          node: {
            type: 2,
            tagName: "img",
            attributes: {},
            childNodes: [],
            id: 55,
          },
        },
        {
          parentId: 34,
          nextId: 55,
          node: {
            type: 2,
            tagName: "div",
            attributes: {},
            childNodes: [],
            id: 56,
          },
        },
        {
          parentId: 34,
          nextId: 56,
          node: {
            type: 2,
            tagName: "div",
            attributes: {},
            childNodes: [],
            id: 57,
          },
        },
        {
          parentId: 34,
          nextId: 57,
          node: {
            type: 2,
            tagName: "div",
            attributes: {},
            childNodes: [],
            id: 58,
          },
        },
        {
          parentId: 34,
          nextId: 58,
          node: {
            type: 2,
            tagName: "div",
            attributes: {},
            childNodes: [],
            id: 59,
          },
        },
        {
          parentId: 34,
          nextId: 59,
          node: {
            type: 2,
            tagName: "div",
            attributes: {},
            childNodes: [],
            id: 60,
          },
        },
        {
          parentId: 34,
          nextId: 60,
          node: {
            type: 2,
            tagName: "div",
            attributes: {
              style:
                "display: flex; justify-content: space-between; align-items: center;",
            },
            childNodes: [],
            id: 61,
          },
        },
        {
          parentId: 61,
          nextId: null,
          node: {
            type: 2,
            tagName: "a",
            attributes: {
              class: "",
              href: "http://81.68.89.84:8345/#/other",
            },
            childNodes: [],
            id: 62,
          },
        },
        {
          parentId: 61,
          nextId: 62,
          node: {
            type: 2,
            tagName: "h2",
            attributes: {},
            childNodes: [],
            id: 63,
          },
        },
        {
          parentId: 63,
          nextId: null,
          node: {
            type: 3,
            textContent: "稳定性检测测试",
            id: 64,
          },
        },
        {
          parentId: 62,
          nextId: null,
          node: {
            type: 2,
            tagName: "button",
            attributes: {
              type: "button",
              class: "ant-btn css-mxhywb ant-btn-default",
            },
            childNodes: [],
            id: 65,
          },
        },
        {
          parentId: 65,
          nextId: null,
          node: {
            type: 2,
            tagName: "span",
            attributes: {},
            childNodes: [],
            id: 66,
          },
        },
        {
          parentId: 66,
          nextId: null,
          node: {
            type: 3,
            textContent: "测试PV",
            id: 67,
          },
        },
        {
          parentId: 60,
          nextId: null,
          node: {
            type: 2,
            tagName: "pre",
            attributes: {
              style:
                "text-align: start; background-color: black; padding: 2rem; border-radius: 20px;",
            },
            childNodes: [],
            id: 68,
          },
        },
        {
          parentId: 60,
          nextId: 68,
          node: {
            type: 2,
            tagName: "div",
            attributes: {
              style: "display: flex; align-items: center;",
            },
            childNodes: [],
            id: 69,
          },
        },
        {
          parentId: 69,
          nextId: null,
          node: {
            type: 2,
            tagName: "button",
            attributes: {
              type: "button",
              class: "ant-btn css-mxhywb ant-btn-primary",
            },
            childNodes: [],
            id: 70,
          },
        },
        {
          parentId: 69,
          nextId: 70,
          node: {
            type: 2,
            tagName: "h4",
            attributes: {
              style: "flex: 1 1 0%;",
            },
            childNodes: [],
            id: 71,
          },
        },
        {
          parentId: 71,
          nextId: null,
          node: {
            type: 3,
            textContent: "普通JS错误",
            id: 72,
          },
        },
        {
          parentId: 70,
          nextId: null,
          node: {
            type: 2,
            tagName: "span",
            attributes: {},
            childNodes: [],
            id: 73,
          },
        },
        {
          parentId: 73,
          nextId: null,
          node: {
            type: 3,
            textContent: "触 发",
            id: 74,
          },
        },
        {
          parentId: 68,
          nextId: null,
          node: {
            type: 2,
            tagName: "div",
            attributes: {},
            childNodes: [],
            id: 75,
          },
        },
        {
          parentId: 75,
          nextId: null,
          node: {
            type: 3,
            textContent: "}",
            id: 76,
          },
        },
        {
          parentId: 75,
          nextId: 76,
          node: {
            type: 2,
            tagName: "span",
            attributes: {
              class: "hljs-string",
            },
            childNodes: [],
            id: 77,
          },
        },
        {
          parentId: 75,
          nextId: 77,
          node: {
            type: 3,
            textContent: "=",
            id: 78,
          },
        },
        {
          parentId: 75,
          nextId: 78,
          node: {
            type: 2,
            tagName: "span",
            attributes: {
              class: "hljs-property",
            },
            childNodes: [],
            id: 79,
          },
        },
        {
          parentId: 75,
          nextId: 79,
          node: {
            type: 3,
            textContent: ".",
            id: 80,
          },
        },
        {
          parentId: 75,
          nextId: 80,
          node: {
            type: 2,
            tagName: "span",
            attributes: {
              class: "hljs-property",
            },
            childNodes: [],
            id: 81,
          },
        },
        {
          parentId: 75,
          nextId: 81,
          node: {
            type: 3,
            textContent: " s={};s.",
            id: 82,
          },
        },
        {
          parentId: 75,
          nextId: 82,
          node: {
            type: 2,
            tagName: "span",
            attributes: {
              class: "hljs-keyword",
            },
            childNodes: [],
            id: 83,
          },
        },
        {
          parentId: 75,
          nextId: 83,
          node: {
            type: 3,
            textContent: "){",
            id: 84,
          },
        },
        {
          parentId: 75,
          nextId: 84,
          node: {
            type: 2,
            tagName: "span",
            attributes: {
              class: "hljs-params",
            },
            childNodes: [],
            id: 85,
          },
        },
        {
          parentId: 75,
          nextId: 85,
          node: {
            type: 3,
            textContent: "(",
            id: 86,
          },
        },
        {
          parentId: 75,
          nextId: 86,
          node: {
            type: 2,
            tagName: "span",
            attributes: {
              class: "hljs-title function_",
            },
            childNodes: [],
            id: 87,
          },
        },
        {
          parentId: 75,
          nextId: 87,
          node: {
            type: 3,
            textContent: " ",
            id: 88,
          },
        },
        {
          parentId: 75,
          nextId: 88,
          node: {
            type: 2,
            tagName: "span",
            attributes: {
              class: "hljs-keyword",
            },
            childNodes: [],
            id: 89,
          },
        },
        {
          parentId: 89,
          nextId: null,
          node: {
            type: 3,
            textContent: "function",
            id: 90,
          },
        },
        {
          parentId: 87,
          nextId: null,
          node: {
            type: 3,
            textContent: "t",
            id: 91,
          },
        },
        {
          parentId: 83,
          nextId: null,
          node: {
            type: 3,
            textContent: "const",
            id: 92,
          },
        },
        {
          parentId: 81,
          nextId: null,
          node: {
            type: 3,
            textContent: "a",
            id: 93,
          },
        },
        {
          parentId: 79,
          nextId: null,
          node: {
            type: 3,
            textContent: "b",
            id: 94,
          },
        },
        {
          parentId: 77,
          nextId: null,
          node: {
            type: 3,
            textContent: '"2"',
            id: 95,
          },
        },
        {
          parentId: 59,
          nextId: null,
          node: {
            type: 2,
            tagName: "pre",
            attributes: {
              style:
                "text-align: start; background-color: black; padding: 2rem; border-radius: 20px;",
            },
            childNodes: [],
            id: 96,
          },
        },
        {
          parentId: 59,
          nextId: 96,
          node: {
            type: 2,
            tagName: "div",
            attributes: {
              style: "display: flex; align-items: center;",
            },
            childNodes: [],
            id: 97,
          },
        },
        {
          parentId: 97,
          nextId: null,
          node: {
            type: 2,
            tagName: "button",
            attributes: {
              type: "button",
              class: "ant-btn css-mxhywb ant-btn-primary",
            },
            childNodes: [],
            id: 98,
          },
        },
        {
          parentId: 97,
          nextId: 98,
          node: {
            type: 2,
            tagName: "h4",
            attributes: {
              style: "flex: 1 1 0%;",
            },
            childNodes: [],
            id: 99,
          },
        },
        {
          parentId: 99,
          nextId: null,
          node: {
            type: 3,
            textContent: "未捕获的Promise错误",
            id: 100,
          },
        },
        {
          parentId: 98,
          nextId: null,
          node: {
            type: 2,
            tagName: "span",
            attributes: {},
            childNodes: [],
            id: 101,
          },
        },
        {
          parentId: 101,
          nextId: null,
          node: {
            type: 3,
            textContent: "触 发",
            id: 102,
          },
        },
        {
          parentId: 96,
          nextId: null,
          node: {
            type: 2,
            tagName: "div",
            attributes: {},
            childNodes: [],
            id: 103,
          },
        },
        {
          parentId: 103,
          nextId: null,
          node: {
            type: 3,
            textContent: "(s)})}",
            id: 104,
          },
        },
        {
          parentId: 103,
          nextId: 104,
          node: {
            type: 2,
            tagName: "span",
            attributes: {
              class: "hljs-title function_",
            },
            childNodes: [],
            id: 105,
          },
        },
        {
          parentId: 103,
          nextId: 105,
          node: {
            type: 3,
            textContent: ".",
            id: 106,
          },
        },
        {
          parentId: 103,
          nextId: 106,
          node: {
            type: 2,
            tagName: "span",
            attributes: {
              class: "hljs-variable language_",
            },
            childNodes: [],
            id: 107,
          },
        },
        {
          parentId: 103,
          nextId: 107,
          node: {
            type: 3,
            textContent: "{",
            id: 108,
          },
        },
        {
          parentId: 103,
          nextId: 108,
          node: {
            type: 2,
            tagName: "span",
            attributes: {
              class: "hljs-function",
            },
            childNodes: [],
            id: 109,
          },
        },
        {
          parentId: 103,
          nextId: 109,
          node: {
            type: 3,
            textContent: "(",
            id: 110,
          },
        },
        {
          parentId: 103,
          nextId: 110,
          node: {
            type: 2,
            tagName: "span",
            attributes: {
              class: "hljs-title function_",
            },
            childNodes: [],
            id: 111,
          },
        },
        {
          parentId: 103,
          nextId: 111,
          node: {
            type: 3,
            textContent: ").",
            id: 112,
          },
        },
        {
          parentId: 103,
          nextId: 112,
          node: {
            type: 2,
            tagName: "span",
            attributes: {
              class: "hljs-number",
            },
            childNodes: [],
            id: 113,
          },
        },
        {
          parentId: 103,
          nextId: 113,
          node: {
            type: 3,
            textContent: "(",
            id: 114,
          },
        },
        {
          parentId: 103,
          nextId: 114,
          node: {
            type: 2,
            tagName: "span",
            attributes: {
              class: "hljs-title function_",
            },
            childNodes: [],
            id: 115,
          },
        },
        {
          parentId: 103,
          nextId: 115,
          node: {
            type: 3,
            textContent: ".",
            id: 116,
          },
        },
        {
          parentId: 103,
          nextId: 116,
          node: {
            type: 2,
            tagName: "span",
            attributes: {
              class: "hljs-title class_",
            },
            childNodes: [],
            id: 117,
          },
        },
        {
          parentId: 103,
          nextId: 117,
          node: {
            type: 3,
            textContent: "){",
            id: 118,
          },
        },
        {
          parentId: 103,
          nextId: 118,
          node: {
            type: 2,
            tagName: "span",
            attributes: {
              class: "hljs-params",
            },
            childNodes: [],
            id: 119,
          },
        },
        {
          parentId: 103,
          nextId: 119,
          node: {
            type: 3,
            textContent: "(",
            id: 120,
          },
        },
        {
          parentId: 103,
          nextId: 120,
          node: {
            type: 2,
            tagName: "span",
            attributes: {
              class: "hljs-title function_",
            },
            childNodes: [],
            id: 121,
          },
        },
        {
          parentId: 103,
          nextId: 121,
          node: {
            type: 3,
            textContent: " ",
            id: 122,
          },
        },
        {
          parentId: 103,
          nextId: 122,
          node: {
            type: 2,
            tagName: "span",
            attributes: {
              class: "hljs-keyword",
            },
            childNodes: [],
            id: 123,
          },
        },
        {
          parentId: 123,
          nextId: null,
          node: {
            type: 3,
            textContent: "function",
            id: 124,
          },
        },
        {
          parentId: 121,
          nextId: null,
          node: {
            type: 3,
            textContent: "n",
            id: 125,
          },
        },
        {
          parentId: 117,
          nextId: null,
          node: {
            type: 3,
            textContent: "Promise",
            id: 126,
          },
        },
        {
          parentId: 115,
          nextId: null,
          node: {
            type: 3,
            textContent: "reject",
            id: 127,
          },
        },
        {
          parentId: 113,
          nextId: null,
          node: {
            type: 3,
            textContent: "2",
            id: 128,
          },
        },
        {
          parentId: 111,
          nextId: null,
          node: {
            type: 3,
            textContent: "then",
            id: 129,
          },
        },
        {
          parentId: 109,
          nextId: null,
          node: {
            type: 3,
            textContent: "=>",
            id: 130,
          },
        },
        {
          parentId: 109,
          nextId: 130,
          node: {
            type: 2,
            tagName: "span",
            attributes: {
              class: "hljs-params",
            },
            childNodes: [],
            id: 131,
          },
        },
        {
          parentId: 131,
          nextId: null,
          node: {
            type: 3,
            textContent: "s",
            id: 132,
          },
        },
        {
          parentId: 107,
          nextId: null,
          node: {
            type: 3,
            textContent: "console",
            id: 133,
          },
        },
        {
          parentId: 105,
          nextId: null,
          node: {
            type: 3,
            textContent: "log",
            id: 134,
          },
        },
        {
          parentId: 58,
          nextId: null,
          node: {
            type: 2,
            tagName: "pre",
            attributes: {
              style:
                "text-align: start; background-color: black; padding: 2rem; border-radius: 20px;",
            },
            childNodes: [],
            id: 135,
          },
        },
        {
          parentId: 58,
          nextId: 135,
          node: {
            type: 2,
            tagName: "div",
            attributes: {
              style: "display: flex; align-items: center;",
            },
            childNodes: [],
            id: 136,
          },
        },
        {
          parentId: 136,
          nextId: null,
          node: {
            type: 2,
            tagName: "button",
            attributes: {
              type: "button",
              class: "ant-btn css-mxhywb ant-btn-primary",
            },
            childNodes: [],
            id: 137,
          },
        },
        {
          parentId: 136,
          nextId: 137,
          node: {
            type: 2,
            tagName: "h4",
            attributes: {
              style: "flex: 1 1 0%;",
            },
            childNodes: [],
            id: 138,
          },
        },
        {
          parentId: 138,
          nextId: null,
          node: {
            type: 3,
            textContent: "网络请求错误(xhr)",
            id: 139,
          },
        },
        {
          parentId: 137,
          nextId: null,
          node: {
            type: 2,
            tagName: "span",
            attributes: {},
            childNodes: [],
            id: 140,
          },
        },
        {
          parentId: 140,
          nextId: null,
          node: {
            type: 3,
            textContent: "触 发",
            id: 141,
          },
        },
        {
          parentId: 135,
          nextId: null,
          node: {
            type: 2,
            tagName: "div",
            attributes: {},
            childNodes: [],
            id: 142,
          },
        },
        {
          parentId: 142,
          nextId: null,
          node: {
            type: 3,
            textContent: ")}",
            id: 143,
          },
        },
        {
          parentId: 142,
          nextId: 143,
          node: {
            type: 2,
            tagName: "span",
            attributes: {
              class: "hljs-string",
            },
            childNodes: [],
            id: 144,
          },
        },
        {
          parentId: 142,
          nextId: 144,
          node: {
            type: 3,
            textContent: "(",
            id: 145,
          },
        },
        {
          parentId: 142,
          nextId: 145,
          node: {
            type: 2,
            tagName: "span",
            attributes: {
              class: "hljs-title function_",
            },
            childNodes: [],
            id: 146,
          },
        },
        {
          parentId: 142,
          nextId: 146,
          node: {
            type: 3,
            textContent: "),s.",
            id: 147,
          },
        },
        {
          parentId: 142,
          nextId: 147,
          node: {
            type: 2,
            tagName: "span",
            attributes: {
              class: "hljs-string",
            },
            childNodes: [],
            id: 148,
          },
        },
        {
          parentId: 142,
          nextId: 148,
          node: {
            type: 3,
            textContent: ",",
            id: 149,
          },
        },
        {
          parentId: 142,
          nextId: 149,
          node: {
            type: 2,
            tagName: "span",
            attributes: {
              class: "hljs-string",
            },
            childNodes: [],
            id: 150,
          },
        },
        {
          parentId: 142,
          nextId: 150,
          node: {
            type: 3,
            textContent: "(",
            id: 151,
          },
        },
        {
          parentId: 142,
          nextId: 151,
          node: {
            type: 2,
            tagName: "span",
            attributes: {
              class: "hljs-title function_",
            },
            childNodes: [],
            id: 152,
          },
        },
        {
          parentId: 142,
          nextId: 152,
          node: {
            type: 3,
            textContent: ";s.",
            id: 153,
          },
        },
        {
          parentId: 142,
          nextId: 153,
          node: {
            type: 2,
            tagName: "span",
            attributes: {
              class: "hljs-title class_",
            },
            childNodes: [],
            id: 154,
          },
        },
        {
          parentId: 142,
          nextId: 154,
          node: {
            type: 3,
            textContent: " ",
            id: 155,
          },
        },
        {
          parentId: 142,
          nextId: 155,
          node: {
            type: 2,
            tagName: "span",
            attributes: {
              class: "hljs-keyword",
            },
            childNodes: [],
            id: 156,
          },
        },
        {
          parentId: 142,
          nextId: 156,
          node: {
            type: 3,
            textContent: " s=",
            id: 157,
          },
        },
        {
          parentId: 142,
          nextId: 157,
          node: {
            type: 2,
            tagName: "span",
            attributes: {
              class: "hljs-keyword",
            },
            childNodes: [],
            id: 158,
          },
        },
        {
          parentId: 142,
          nextId: 158,
          node: {
            type: 3,
            textContent: "){",
            id: 159,
          },
        },
        {
          parentId: 142,
          nextId: 159,
          node: {
            type: 2,
            tagName: "span",
            attributes: {
              class: "hljs-params",
            },
            childNodes: [],
            id: 160,
          },
        },
        {
          parentId: 142,
          nextId: 160,
          node: {
            type: 3,
            textContent: "(",
            id: 161,
          },
        },
        {
          parentId: 142,
          nextId: 161,
          node: {
            type: 2,
            tagName: "span",
            attributes: {
              class: "hljs-title function_",
            },
            childNodes: [],
            id: 162,
          },
        },
        {
          parentId: 142,
          nextId: 162,
          node: {
            type: 3,
            textContent: " ",
            id: 163,
          },
        },
        {
          parentId: 142,
          nextId: 163,
          node: {
            type: 2,
            tagName: "span",
            attributes: {
              class: "hljs-keyword",
            },
            childNodes: [],
            id: 164,
          },
        },
        {
          parentId: 164,
          nextId: null,
          node: {
            type: 3,
            textContent: "function",
            id: 165,
          },
        },
        {
          parentId: 162,
          nextId: null,
          node: {
            type: 3,
            textContent: "r",
            id: 166,
          },
        },
        {
          parentId: 158,
          nextId: null,
          node: {
            type: 3,
            textContent: "const",
            id: 167,
          },
        },
        {
          parentId: 156,
          nextId: null,
          node: {
            type: 3,
            textContent: "new",
            id: 168,
          },
        },
        {
          parentId: 154,
          nextId: null,
          node: {
            type: 3,
            textContent: "XMLHttpRequest",
            id: 169,
          },
        },
        {
          parentId: 152,
          nextId: null,
          node: {
            type: 3,
            textContent: "open",
            id: 170,
          },
        },
        {
          parentId: 150,
          nextId: null,
          node: {
            type: 3,
            textContent: '"get"',
            id: 171,
          },
        },
        {
          parentId: 148,
          nextId: null,
          node: {
            type: 3,
            textContent: '"www.error.example.com"',
            id: 172,
          },
        },
        {
          parentId: 146,
          nextId: null,
          node: {
            type: 3,
            textContent: "send",
            id: 173,
          },
        },
        {
          parentId: 144,
          nextId: null,
          node: {
            type: 3,
            textContent: '""',
            id: 174,
          },
        },
        {
          parentId: 57,
          nextId: null,
          node: {
            type: 2,
            tagName: "pre",
            attributes: {
              style:
                "text-align: start; background-color: black; padding: 2rem; border-radius: 20px;",
            },
            childNodes: [],
            id: 175,
          },
        },
        {
          parentId: 57,
          nextId: 175,
          node: {
            type: 2,
            tagName: "div",
            attributes: {
              style: "display: flex; align-items: center;",
            },
            childNodes: [],
            id: 176,
          },
        },
        {
          parentId: 176,
          nextId: null,
          node: {
            type: 2,
            tagName: "button",
            attributes: {
              type: "button",
              class: "ant-btn css-mxhywb ant-btn-primary",
            },
            childNodes: [],
            id: 177,
          },
        },
        {
          parentId: 176,
          nextId: 177,
          node: {
            type: 2,
            tagName: "h4",
            attributes: {
              style: "flex: 1 1 0%;",
            },
            childNodes: [],
            id: 178,
          },
        },
        {
          parentId: 178,
          nextId: null,
          node: {
            type: 3,
            textContent: "网络请求错误(fetch)",
            id: 179,
          },
        },
        {
          parentId: 177,
          nextId: null,
          node: {
            type: 2,
            tagName: "span",
            attributes: {},
            childNodes: [],
            id: 180,
          },
        },
        {
          parentId: 180,
          nextId: null,
          node: {
            type: 3,
            textContent: "触 发",
            id: 181,
          },
        },
        {
          parentId: 175,
          nextId: null,
          node: {
            type: 2,
            tagName: "div",
            attributes: {},
            childNodes: [],
            id: 182,
          },
        },
        {
          parentId: 182,
          nextId: null,
          node: {
            type: 3,
            textContent: "(s))}",
            id: 183,
          },
        },
        {
          parentId: 182,
          nextId: 183,
          node: {
            type: 2,
            tagName: "span",
            attributes: {
              class: "hljs-title function_",
            },
            childNodes: [],
            id: 184,
          },
        },
        {
          parentId: 182,
          nextId: 184,
          node: {
            type: 3,
            textContent: ".",
            id: 185,
          },
        },
        {
          parentId: 182,
          nextId: 185,
          node: {
            type: 2,
            tagName: "span",
            attributes: {
              class: "hljs-variable language_",
            },
            childNodes: [],
            id: 186,
          },
        },
        {
          parentId: 182,
          nextId: 186,
          node: {
            type: 2,
            tagName: "span",
            attributes: {
              class: "hljs-function",
            },
            childNodes: [],
            id: 187,
          },
        },
        {
          parentId: 182,
          nextId: 187,
          node: {
            type: 3,
            textContent: "(",
            id: 188,
          },
        },
        {
          parentId: 182,
          nextId: 188,
          node: {
            type: 2,
            tagName: "span",
            attributes: {
              class: "hljs-title function_",
            },
            childNodes: [],
            id: 189,
          },
        },
        {
          parentId: 182,
          nextId: 189,
          node: {
            type: 3,
            textContent: "()).",
            id: 190,
          },
        },
        {
          parentId: 182,
          nextId: 190,
          node: {
            type: 2,
            tagName: "span",
            attributes: {
              class: "hljs-title function_",
            },
            childNodes: [],
            id: 191,
          },
        },
        {
          parentId: 182,
          nextId: 191,
          node: {
            type: 3,
            textContent: "s.",
            id: 192,
          },
        },
        {
          parentId: 182,
          nextId: 192,
          node: {
            type: 2,
            tagName: "span",
            attributes: {
              class: "hljs-function",
            },
            childNodes: [],
            id: 193,
          },
        },
        {
          parentId: 182,
          nextId: 193,
          node: {
            type: 3,
            textContent: "(",
            id: 194,
          },
        },
        {
          parentId: 182,
          nextId: 194,
          node: {
            type: 2,
            tagName: "span",
            attributes: {
              class: "hljs-title function_",
            },
            childNodes: [],
            id: 195,
          },
        },
        {
          parentId: 182,
          nextId: 195,
          node: {
            type: 3,
            textContent: ").",
            id: 196,
          },
        },
        {
          parentId: 182,
          nextId: 196,
          node: {
            type: 2,
            tagName: "span",
            attributes: {
              class: "hljs-string",
            },
            childNodes: [],
            id: 197,
          },
        },
        {
          parentId: 182,
          nextId: 197,
          node: {
            type: 3,
            textContent: "(",
            id: 198,
          },
        },
        {
          parentId: 182,
          nextId: 198,
          node: {
            type: 2,
            tagName: "span",
            attributes: {
              class: "hljs-title function_",
            },
            childNodes: [],
            id: 199,
          },
        },
        {
          parentId: 182,
          nextId: 199,
          node: {
            type: 3,
            textContent: "){",
            id: 200,
          },
        },
        {
          parentId: 182,
          nextId: 200,
          node: {
            type: 2,
            tagName: "span",
            attributes: {
              class: "hljs-params",
            },
            childNodes: [],
            id: 201,
          },
        },
        {
          parentId: 182,
          nextId: 201,
          node: {
            type: 3,
            textContent: "(",
            id: 202,
          },
        },
        {
          parentId: 182,
          nextId: 202,
          node: {
            type: 2,
            tagName: "span",
            attributes: {
              class: "hljs-title function_",
            },
            childNodes: [],
            id: 203,
          },
        },
        {
          parentId: 182,
          nextId: 203,
          node: {
            type: 3,
            textContent: " ",
            id: 204,
          },
        },
        {
          parentId: 182,
          nextId: 204,
          node: {
            type: 2,
            tagName: "span",
            attributes: {
              class: "hljs-keyword",
            },
            childNodes: [],
            id: 205,
          },
        },
        {
          parentId: 205,
          nextId: null,
          node: {
            type: 3,
            textContent: "function",
            id: 206,
          },
        },
        {
          parentId: 203,
          nextId: null,
          node: {
            type: 3,
            textContent: "a",
            id: 207,
          },
        },
        {
          parentId: 199,
          nextId: null,
          node: {
            type: 3,
            textContent: "fetch",
            id: 208,
          },
        },
        {
          parentId: 197,
          nextId: null,
          node: {
            type: 3,
            textContent: '"http://www.error.example.com"',
            id: 209,
          },
        },
        {
          parentId: 195,
          nextId: null,
          node: {
            type: 3,
            textContent: "then",
            id: 210,
          },
        },
        {
          parentId: 193,
          nextId: null,
          node: {
            type: 3,
            textContent: "=>",
            id: 211,
          },
        },
        {
          parentId: 193,
          nextId: 211,
          node: {
            type: 2,
            tagName: "span",
            attributes: {
              class: "hljs-params",
            },
            childNodes: [],
            id: 212,
          },
        },
        {
          parentId: 212,
          nextId: null,
          node: {
            type: 3,
            textContent: "s",
            id: 213,
          },
        },
        {
          parentId: 191,
          nextId: null,
          node: {
            type: 3,
            textContent: "json",
            id: 214,
          },
        },
        {
          parentId: 189,
          nextId: null,
          node: {
            type: 3,
            textContent: "then",
            id: 215,
          },
        },
        {
          parentId: 187,
          nextId: null,
          node: {
            type: 3,
            textContent: "=>",
            id: 216,
          },
        },
        {
          parentId: 187,
          nextId: 216,
          node: {
            type: 2,
            tagName: "span",
            attributes: {
              class: "hljs-params",
            },
            childNodes: [],
            id: 217,
          },
        },
        {
          parentId: 217,
          nextId: null,
          node: {
            type: 3,
            textContent: "s",
            id: 218,
          },
        },
        {
          parentId: 186,
          nextId: null,
          node: {
            type: 3,
            textContent: "console",
            id: 219,
          },
        },
        {
          parentId: 184,
          nextId: null,
          node: {
            type: 3,
            textContent: "log",
            id: 220,
          },
        },
        {
          parentId: 56,
          nextId: null,
          node: {
            type: 2,
            tagName: "pre",
            attributes: {
              style:
                "text-align: start; background-color: black; padding: 2rem; border-radius: 20px;",
            },
            childNodes: [],
            id: 221,
          },
        },
        {
          parentId: 56,
          nextId: 221,
          node: {
            type: 2,
            tagName: "div",
            attributes: {
              style: "display: flex; align-items: center;",
            },
            childNodes: [],
            id: 222,
          },
        },
        {
          parentId: 222,
          nextId: null,
          node: {
            type: 2,
            tagName: "button",
            attributes: {
              type: "button",
              class: "ant-btn css-mxhywb ant-btn-primary",
            },
            childNodes: [],
            id: 223,
          },
        },
        {
          parentId: 222,
          nextId: 223,
          node: {
            type: 2,
            tagName: "h4",
            attributes: {
              style: "flex: 1 1 0%;",
            },
            childNodes: [],
            id: 224,
          },
        },
        {
          parentId: 224,
          nextId: null,
          node: {
            type: 3,
            textContent: "资源请求错误",
            id: 225,
          },
        },
        {
          parentId: 223,
          nextId: null,
          node: {
            type: 2,
            tagName: "span",
            attributes: {},
            childNodes: [],
            id: 226,
          },
        },
        {
          parentId: 226,
          nextId: null,
          node: {
            type: 3,
            textContent: "触 发",
            id: 227,
          },
        },
        {
          parentId: 221,
          nextId: null,
          node: {
            type: 2,
            tagName: "div",
            attributes: {},
            childNodes: [],
            id: 228,
          },
        },
        {
          parentId: 228,
          nextId: null,
          node: {
            type: 3,
            textContent: ")}",
            id: 229,
          },
        },
        {
          parentId: 228,
          nextId: 229,
          node: {
            type: 2,
            tagName: "span",
            attributes: {
              class: "hljs-string",
            },
            childNodes: [],
            id: 230,
          },
        },
        {
          parentId: 228,
          nextId: 230,
          node: {
            type: 3,
            textContent: "=",
            id: 231,
          },
        },
        {
          parentId: 228,
          nextId: 231,
          node: {
            type: 2,
            tagName: "span",
            attributes: {
              class: "hljs-property",
            },
            childNodes: [],
            id: 232,
          },
        },
        {
          parentId: 228,
          nextId: 232,
          node: {
            type: 3,
            textContent: ".",
            id: 233,
          },
        },
        {
          parentId: 228,
          nextId: 233,
          node: {
            type: 2,
            tagName: "span",
            attributes: {
              class: "hljs-property",
            },
            childNodes: [],
            id: 234,
          },
        },
        {
          parentId: 228,
          nextId: 234,
          node: {
            type: 3,
            textContent: "&&(e.",
            id: 235,
          },
        },
        {
          parentId: 228,
          nextId: 235,
          node: {
            type: 2,
            tagName: "span",
            attributes: {
              class: "hljs-property",
            },
            childNodes: [],
            id: 236,
          },
        },
        {
          parentId: 228,
          nextId: 236,
          node: {
            type: 3,
            textContent: "){e.",
            id: 237,
          },
        },
        {
          parentId: 228,
          nextId: 237,
          node: {
            type: 2,
            tagName: "span",
            attributes: {
              class: "hljs-params",
            },
            childNodes: [],
            id: 238,
          },
        },
        {
          parentId: 228,
          nextId: 238,
          node: {
            type: 3,
            textContent: "(",
            id: 239,
          },
        },
        {
          parentId: 228,
          nextId: 239,
          node: {
            type: 2,
            tagName: "span",
            attributes: {
              class: "hljs-title function_",
            },
            childNodes: [],
            id: 240,
          },
        },
        {
          parentId: 228,
          nextId: 240,
          node: {
            type: 3,
            textContent: " ",
            id: 241,
          },
        },
        {
          parentId: 228,
          nextId: 241,
          node: {
            type: 2,
            tagName: "span",
            attributes: {
              class: "hljs-keyword",
            },
            childNodes: [],
            id: 242,
          },
        },
        {
          parentId: 242,
          nextId: null,
          node: {
            type: 3,
            textContent: "function",
            id: 243,
          },
        },
        {
          parentId: 240,
          nextId: null,
          node: {
            type: 3,
            textContent: "i",
            id: 244,
          },
        },
        {
          parentId: 236,
          nextId: null,
          node: {
            type: 3,
            textContent: "current",
            id: 245,
          },
        },
        {
          parentId: 234,
          nextId: null,
          node: {
            type: 3,
            textContent: "current",
            id: 246,
          },
        },
        {
          parentId: 232,
          nextId: null,
          node: {
            type: 3,
            textContent: "src",
            id: 247,
          },
        },
        {
          parentId: 230,
          nextId: null,
          node: {
            type: 3,
            textContent: '"http://www.error.example.com/img.png"',
            id: 248,
          },
        },
        {
          parentId: 35,
          nextId: 36,
          node: {
            type: 2,
            tagName: "div",
            attributes: {
              style: "display: flex; align-items: center;",
            },
            childNodes: [],
            id: 249,
          },
        },
        {
          parentId: 249,
          nextId: null,
          node: {
            type: 2,
            tagName: "button",
            attributes: {
              type: "button",
              class: "ant-btn css-mxhywb ant-btn-primary",
            },
            childNodes: [],
            id: 250,
          },
        },
        {
          parentId: 249,
          nextId: 250,
          node: {
            type: 2,
            tagName: "h4",
            attributes: {
              style: "flex: 1 1 0%;",
            },
            childNodes: [],
            id: 251,
          },
        },
        {
          parentId: 251,
          nextId: null,
          node: {
            type: 3,
            textContent: "页面崩溃",
            id: 252,
          },
        },
        {
          parentId: 250,
          nextId: null,
          node: {
            type: 2,
            tagName: "span",
            attributes: {},
            childNodes: [],
            id: 253,
          },
        },
        {
          parentId: 253,
          nextId: null,
          node: {
            type: 3,
            textContent: "触 发",
            id: 254,
          },
        },
        {
          parentId: 37,
          nextId: 38,
          node: {
            type: 2,
            tagName: "span",
            attributes: {
              class: "hljs-params",
            },
            childNodes: [],
            id: 255,
          },
        },
        {
          parentId: 37,
          nextId: 255,
          node: {
            type: 3,
            textContent: "(",
            id: 256,
          },
        },
        {
          parentId: 37,
          nextId: 256,
          node: {
            type: 2,
            tagName: "span",
            attributes: {
              class: "hljs-title function_",
            },
            childNodes: [],
            id: 257,
          },
        },
        {
          parentId: 37,
          nextId: 257,
          node: {
            type: 3,
            textContent: " ",
            id: 258,
          },
        },
        {
          parentId: 37,
          nextId: 258,
          node: {
            type: 2,
            tagName: "span",
            attributes: {
              class: "hljs-keyword",
            },
            childNodes: [],
            id: 259,
          },
        },
        {
          parentId: 259,
          nextId: null,
          node: {
            type: 3,
            textContent: "function",
            id: 260,
          },
        },
        {
          parentId: 257,
          nextId: null,
          node: {
            type: 3,
            textContent: "o",
            id: 261,
          },
        },
      ],
    },
    timestamp: 1680707554832,
  },
  {
    type: 3,
    data: {
      source: 1,
      positions: [
        {
          x: 330,
          y: 797,
          id: 3,
          timeOffset: -186,
        },
        {
          x: 331,
          y: 799,
          id: 222,
          timeOffset: -129,
        },
        {
          x: 354,
          y: 816,
          id: 222,
          timeOffset: -79,
        },
      ],
    },
    timestamp: 1680707554977,
  },
  {
    type: 3,
    data: {
      source: 1,
      positions: [
        {
          x: 356,
          y: 814,
          id: 222,
          timeOffset: -455,
        },
        {
          x: 360,
          y: 805,
          id: 222,
          timeOffset: -392,
        },
        {
          x: 364,
          y: 803,
          id: 222,
          timeOffset: -341,
        },
        {
          x: 365,
          y: 802,
          id: 222,
          timeOffset: -242,
        },
        {
          x: 366,
          y: 799,
          id: 222,
          timeOffset: -192,
        },
        {
          x: 366,
          y: 797,
          id: 222,
          timeOffset: -142,
        },
      ],
    },
    timestamp: 1680707555490,
  },
  {
    type: 3,
    data: {
      source: 4,
      width: 2560,
      height: 744,
    },
    timestamp: 1680707555552,
  },
  {
    type: 3,
    data: {
      source: 1,
      positions: [
        {
          x: 290,
          y: 736,
          id: 197,
          timeOffset: 0,
        },
      ],
    },
    timestamp: 1680707568039,
  },
  {
    type: 3,
    data: {
      source: 2,
      type: 1,
      id: 136,
      x: 497,
      y: 517,
    },
    timestamp: 1680707568121,
  },
  {
    type: 3,
    data: {
      source: 2,
      type: 0,
      id: 136,
      x: 500,
      y: 515,
    },
    timestamp: 1680707568207,
  },
  {
    type: 3,
    data: {
      source: 2,
      type: 2,
      id: 136,
      x: 500,
      y: 515,
    },
    timestamp: 1680707568207,
  },
  {
    type: 3,
    data: {
      source: 2,
      type: 1,
      id: 59,
      x: 1024,
      y: 365,
    },
    timestamp: 1680707568417,
  },
  {
    type: 3,
    data: {
      source: 2,
      type: 0,
      id: 96,
      x: 1048,
      y: 367,
    },
    timestamp: 1680707568507,
  },
  {
    type: 3,
    data: {
      source: 2,
      type: 2,
      id: 59,
      x: 1048,
      y: 367,
    },
    timestamp: 1680707568507,
  },
  {
    type: 3,
    data: {
      source: 1,
      positions: [
        {
          x: 474,
          y: 532,
          id: 58,
          timeOffset: -445,
        },
        {
          x: 500,
          y: 515,
          id: 136,
          timeOffset: -328,
        },
        {
          x: 504,
          y: 513,
          id: 136,
          timeOffset: -277,
        },
        {
          x: 619,
          y: 466,
          id: 136,
          timeOffset: -227,
        },
        {
          x: 906,
          y: 373,
          id: 96,
          timeOffset: -171,
        },
        {
          x: 1035,
          y: 365,
          id: 59,
          timeOffset: -116,
        },
        {
          x: 1048,
          y: 367,
          id: 96,
          timeOffset: -28,
        },
      ],
    },
    timestamp: 1680707568540,
  },
  {
    type: 3,
    data: {
      source: 2,
      type: 1,
      id: 68,
      x: 1188,
      y: 247,
    },
    timestamp: 1680707568707,
  },
  {
    type: 3,
    data: {
      source: 2,
      type: 0,
      id: 68,
      x: 1180,
      y: 247,
    },
    timestamp: 1680707568779,
  },
  {
    type: 3,
    data: {
      source: 2,
      type: 2,
      id: 68,
      x: 1180,
      y: 247,
    },
    timestamp: 1680707568780,
  },
  {
    type: 3,
    data: {
      source: 1,
      positions: [
        {
          x: 1050,
          y: 367,
          id: 96,
          timeOffset: -460,
        },
        {
          x: 1134,
          y: 292,
          id: 97,
          timeOffset: -404,
        },
        {
          x: 1187,
          y: 247,
          id: 68,
          timeOffset: -352,
        },
        {
          x: 1186,
          y: 247,
          id: 68,
          timeOffset: -280,
        },
        {
          x: 994,
          y: 331,
          id: 99,
          timeOffset: -224,
        },
        {
          x: 527,
          y: 587,
          id: 135,
          timeOffset: -166,
        },
        {
          x: 327,
          y: 728,
          id: 175,
          timeOffset: -110,
        },
      ],
    },
    timestamp: 1680707569051,
  },
  {
    type: 3,
    data: {
      source: 1,
      positions: [
        {
          x: 268,
          y: 723,
          id: 175,
          timeOffset: -120,
        },
        {
          x: 571,
          y: 419,
          id: 96,
          timeOffset: -64,
        },
        {
          x: 914,
          y: 230,
          id: 75,
          timeOffset: -8,
        },
      ],
    },
    timestamp: 1680707569553,
  },
  {
    type: 3,
    data: {
      source: 1,
      positions: [
        {
          x: 1110,
          y: 163,
          id: 71,
          timeOffset: -453,
        },
        {
          x: 1129,
          y: 162,
          id: 71,
          timeOffset: -385,
        },
        {
          x: 931,
          y: 264,
          id: 68,
          timeOffset: -327,
        },
        {
          x: 602,
          y: 385,
          id: 96,
          timeOffset: -271,
        },
        {
          x: 470,
          y: 453,
          id: 34,
          timeOffset: -215,
        },
        {
          x: 484,
          y: 457,
          id: 34,
          timeOffset: -159,
        },
        {
          x: 750,
          y: 405,
          id: 103,
          timeOffset: -103,
        },
        {
          x: 1039,
          y: 320,
          id: 99,
          timeOffset: -48,
        },
      ],
    },
    timestamp: 1680707570054,
  },
  {
    type: 3,
    data: {
      source: 1,
      positions: [
        {
          x: 1012,
          y: 325,
          id: 99,
          timeOffset: -490,
        },
        {
          x: 660,
          y: 329,
          id: 99,
          timeOffset: -434,
        },
        {
          x: 624,
          y: 304,
          id: 97,
          timeOffset: -379,
        },
        {
          x: 913,
          y: 305,
          id: 97,
          timeOffset: -321,
        },
        {
          x: 840,
          y: 396,
          id: 96,
          timeOffset: -267,
        },
        {
          x: 584,
          y: 331,
          id: 99,
          timeOffset: -206,
        },
        {
          x: 634,
          y: 222,
          id: 68,
          timeOffset: -156,
        },
        {
          x: 882,
          y: 182,
          id: 69,
          timeOffset: -104,
        },
        {
          x: 850,
          y: 341,
          id: 97,
          timeOffset: -48,
        },
      ],
    },
    timestamp: 1680707570555,
  },
  {
    type: 3,
    data: {
      source: 1,
      positions: [
        {
          x: 592,
          y: 339,
          id: 97,
          timeOffset: -501,
        },
        {
          x: 526,
          y: 296,
          id: 97,
          timeOffset: -445,
        },
        {
          x: 522,
          y: 387,
          id: 96,
          timeOffset: -395,
        },
        {
          x: 404,
          y: 558,
          id: 135,
          timeOffset: -338,
        },
        {
          x: 306,
          y: 605,
          id: 135,
          timeOffset: -283,
        },
        {
          x: 261,
          y: 621,
          id: 34,
          timeOffset: -227,
        },
        {
          x: 260,
          y: 636,
          id: 176,
          timeOffset: -171,
        },
        {
          x: 247,
          y: 679,
          id: 176,
          timeOffset: -121,
        },
        {
          x: 244,
          y: 723,
          id: 175,
          timeOffset: -66,
        },
      ],
    },
    timestamp: 1680707571064,
  },
  {
    type: 3,
    data: {
      source: 1,
      positions: [
        {
          x: 292,
          y: 741,
          id: 197,
          timeOffset: 0,
        },
      ],
    },
    timestamp: 1680707572135,
  },
  {
    type: 3,
    data: {
      source: 1,
      positions: [
        {
          x: 923,
          y: 477,
          id: 136,
          timeOffset: -447,
        },
        {
          x: 1766,
          y: 241,
          id: 75,
          timeOffset: -391,
        },
        {
          x: 2072,
          y: 210,
          id: 68,
          timeOffset: -332,
        },
        {
          x: 2076,
          y: 212,
          id: 68,
          timeOffset: -279,
        },
        {
          x: 2076,
          y: 212,
          id: 68,
          timeOffset: -215,
        },
        {
          x: 2122,
          y: 191,
          id: 60,
          timeOffset: -164,
        },
        {
          x: 2222,
          y: 184,
          id: 69,
          timeOffset: -109,
        },
        {
          x: 2326,
          y: 176,
          id: 69,
          timeOffset: -58,
        },
      ],
    },
    timestamp: 1680707572638,
  },
  {
    type: 3,
    data: {
      source: 1,
      positions: [
        {
          x: 2348,
          y: 174,
          id: 69,
          timeOffset: -500,
        },
        {
          x: 2386,
          y: 172,
          id: 69,
          timeOffset: -444,
        },
        {
          x: 2399,
          y: 172,
          id: 69,
          timeOffset: -362,
        },
        {
          x: 2405,
          y: 173,
          id: 69,
          timeOffset: -306,
        },
        {
          x: 2434,
          y: 173,
          id: 69,
          timeOffset: -256,
        },
        {
          x: 2446,
          y: 172,
          id: 69,
          timeOffset: -202,
        },
        {
          x: 2455,
          y: 165,
          id: 69,
          timeOffset: -146,
        },
        {
          x: 2464,
          y: 161,
          id: 71,
          timeOffset: -96,
        },
        {
          x: 2473,
          y: 157,
          id: 70,
          timeOffset: -40,
        },
      ],
    },
    timestamp: 1680707573141,
  },
  {
    type: 3,
    data: {
      source: 2,
      type: 1,
      id: 73,
      x: 2498,
      y: 151,
    },
    timestamp: 1680707573225,
  },
  {
    type: 3,
    data: {
      source: 2,
      type: 5,
      id: 70,
    },
    timestamp: 1680707573226,
  },
  {
    type: 3,
    data: {
      source: 2,
      type: 0,
      id: 73,
      x: 2498,
      y: 151,
    },
    timestamp: 1680707573305,
  },
  {
    type: 3,
    data: {
      source: 2,
      type: 2,
      id: 73,
      x: 2498,
      y: 151,
    },
    timestamp: 1680707573305,
  },
  {
    type: 3,
    data: {
      source: 0,
      texts: [],
      attributes: [],
      removes: [],
      adds: [
        {
          parentId: 70,
          nextId: 73,
          node: {
            type: 2,
            tagName: "div",
            attributes: {
              style: "position: absolute; left: 0px; top: 0px;",
            },
            childNodes: [],
            id: 262,
          },
        },
      ],
    },
    timestamp: 1680707573309,
  },
];

function RrwebPlayer() {
  const ref = useRef(null);
  useEffect(() => {
    new rrwebPlayer({
      target: ref.current as any, // 可以自定义 DOM 元素
      // 配置项
      props: {
        events: stack,
      },
    });
  }, []);

  return (
    <div ref={ref} className="  h-full " style={{ height: "700px" }}></div>
  );
}

export default RrwebPlayer;
