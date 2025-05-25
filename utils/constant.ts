export const TOKEN = "LYW-Token";
export const KEYWORD_PARAMS = "keyword";
export const TOPIC_PARAMS = "topic";
export const CATEGORY_PARAMS = "category";
export const TAG_PARAMS = "tag";
export const LANGUAGE_PARAMS = "language";

// Search URL: /courses?search="Search_Keyword"&topic="Topic"
// Search_Keyword: user input keyword, pre-defined link keyword,...
// Topic: Category, Framework, Language, Tag,...
export const createSearchUrl = (keyword: string, topic: string) => {
   return `/courses?${KEYWORD_PARAMS}=${keyword}&${TOPIC_PARAMS}=${topic}`;
};
