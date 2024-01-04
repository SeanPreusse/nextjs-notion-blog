// notion.js

import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_API_KEY, // Replace with your Notion integration token
});

export default notion;
