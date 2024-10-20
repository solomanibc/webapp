import { Client } from "@notionhq/client";

// Initialiser le client Notion
export const notion = new Client({ auth: process.env.NOTION_API_KEY });

export const fetchAll = async () => {
    const databaseId = process.env.NOTION_DATABASE_ID;

    if(!databaseId) {
        throw new Error('Datavase Id is not setted')
    }

    const response = await notion.databases.query({
        database_id: databaseId,
      });
}