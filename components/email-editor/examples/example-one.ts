import { EmailElementMapTree } from "../types";

export const ExampleOne: EmailElementMapTree = {
  root: "root-container",
  items: {
    "root-container": {
      id: "root-container",
      type: "container",
      children: ["row-1", "hr", "row-2", "row-3"],
    },
    "row-1": {
      id: "row-1",
      type: "row",
      parentId: "root-container",
      children: ["row-1-column-1", "row-1-column-2", "row-1-column-3"],
    },
    "row-2": {
      id: "row-2",
      type: "row",
      parentId: "root-container",
      children: [],
    },
    "row-3": {
      id: "row-3",
      type: "row",
      parentId: "root-container",
      children: ["anchor-1"],
    },
    "anchor-1": {
      id: "anchor-1",
      type: "anchor",
      href: "www.google.com",
      parentId: "row-3",
      children: ["anchor-1-text"],
    },
    "anchor-1-text": {
      id: "anchor-1-text",
      type: "text",
      text: "Click me!",
      parentId: "anchor-1",
    },
    hr: {
      id: "hr",
      type: "hr",
      parentId: "root-container",
    },
    "row-1-column-1": {
      id: "row-1-column-1",
      type: "column",
      parentId: "row-1",
      children: ["row-1-column-1-text"],
    },
    "row-1-column-2": {
      id: "row-1-column-2",
      type: "column",
      parentId: "row-1",
      children: ["row-1-column-2-inner-text-1"],
    },
    "row-1-column-3": {
      id: "row-1-column-3",
      type: "column",
      parentId: "row-1",
      children: ["row-1-column-3-heading"],
    },
    "row-1-column-1-text": {
      id: "row-1-column-1-text",
      type: "paragraph",
      parentId: "row-1-column-1",
      children: [
        "row-1-column-1-text-inner-text-1",
        "sample-image",
        "row-1-column-1-text-inner-text-2",
      ],
    },
    "row-1-column-1-text-inner-text-1": {
      id: "row-1-column-1-text-inner-text-1",
      type: "text",
      text: "Sample paragraph text",
      parentId: "row-1-column-1-text",
    },
    "row-1-column-1-text-inner-text-2": {
      id: "row-1-column-1-text-inner-text-2",
      type: "text",
      text: "Additional paragraph text",
      parentId: "row-1-column-1-text",
    },
    "sample-image": {
      id: "sample-image",
      type: "image",
      parentId: "row-1-column-1-text",
    },
    "row-1-column-2-inner-text-1": {
      id: "row-1-column-2-inner-text-1",
      type: "text",
      text: "Sample text",
      parentId: "row-1-column-2",
    },
    "row-1-column-3-heading": {
      id: "row-1-column-3-heading",
      type: "heading",
      as: "h2",
      parentId: "row-1-column-3",
      children: ["row-1-column-3-heading-text"],
    },
    "row-1-column-3-heading-text": {
      id: "row-1-column-3-heading-text",
      type: "text",
      text: "Sample heading",
      parentId: "row-1-column-3-heading",
    },
  },
};
