import CommonAxios from "../utils/common/CommonAxios";

const search = async (keyword, page, size, sort) => {
  try {
    const response = await CommonAxios.getPageableAxios("admin", "search", {
      keyword,
      page,
      size,
      sort,
    });
    return response.data;
  } catch (error) {
    console.error("Error searching:", error);
    throw error;
  }
};

export default {
  search,
};
