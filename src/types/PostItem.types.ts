export type PostFrontmatterType = {
  title: string;
  date: string;
  summary: string;
  thumbnail: string;
};

export type PostListItemType = {
  node: {
    id: string;
    fields: {
      slug: string;
    };
    html: string;
    frontmatter: PostFrontmatterType;
  };
};
