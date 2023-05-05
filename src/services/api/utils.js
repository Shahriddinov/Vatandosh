export const baseUrl = "https://vatanparvarbackend.napaautomotive.uz/api";
export const authUrl = "https://vatandoshlar.napaautomotive.uz/api/auth";
export const portalBaseUrl = "https://vatandoshlar.napaautomotive.uz/api";
export const baseServerUrl =
  "https://vatanparvarbackend.napaautomotive.uz/storage";
export const PORTAL_IMAGE_URL =
  "https://vatandoshlar.napaautomotive.uz/storage/";

export const imageUrl = "https://vatandoshlar.napaautomotive.uz/storage";

// Get requests
export const GET_NEWS_URL = `${baseUrl}/news`;
export const GET_EVENTS_URL = `${baseUrl}/events`;
export const GET_PARTNERS_URL = `${baseUrl}/sponsrs`;
export const GET_PEACEFUL_URL = `${baseUrl}/columns`;
export const GET_PROJECTS_MENU = `${baseUrl}/column-menus`;
export const GET_INTERACTIVE_SERVICES_URL = `${baseUrl}/interactive-services`;
export const GET_ALL_TRUSTEES_URL = `${baseUrl}/trusts`;
export const GET_TRUSTEES_URL = `${baseUrl}/trusts/page/`;
export const GET_MAP_DATA_URL = `${baseUrl}/country_relationship/`;
export const GET_COUNTRIES = `${baseUrl}/countries`;
export const GET_CONTACT = `${baseUrl}/contacts`;
export const GET_SLIDER = `${baseUrl}/sliders`;
export const GET_ASSOCIATIONS = `${baseUrl}/assosiations`;
export const GET_ASSOCIATIONS_CATEGORY = `${baseUrl}/assosiationcategory`;
export const GET_MEDIA_VIDOES_MENUS = `${baseUrl}/mediateka-video-menus`;
export const GET_MEDIA_IMAGES_MENUS = `${baseUrl}/mediateka-image-menus`;
export const GET_SINGLE_PAGINATION = baseUrl + "/";
export const GET_COLUMN_COUNT = `${baseUrl}/columns/page/`;
export const GET_COLUMNS_MENU = `${baseUrl}/column-menus`;
export const GET_TAG_RESULTS = `${baseUrl}/tagsearch`;
export const GET_LATEST_TAG = `${baseUrl}/latesttag`;
export const GET_POPULAR_TAG = `${baseUrl}/brandtag`;
export const GET_DIRECTION = `${baseUrl}/directions`;
export const GET_ABOUTS = `${baseUrl}/abouts`;
export const GET_MANAGEMENT = `${baseUrl}/managements`;
export const GET_SEARCH_RESULTS = `${baseUrl}/titlesearch`;
export const GET_FAMOUS_TAGS = `${baseUrl}/brandtag/5`;
// export const GET_EXPERT_USER = `/user`;
// export const GET_EXPERT_MENU = `/all`;
export const GET_NATIONS = `${portalBaseUrl}/national/get-all`;
export const GET_EXPERT_USER = `/user`;
export const GET_EXPERT_MENU = `/all`;
export const GET_VICTORINA_QUIZ = `/quiz/quizzes`;
export const GET_VICTORINA_PAGE = `/quiz/page`;

//===============================PORTAL================================
export const GET_LOCATION = "/location/get-all";
export const GET_LOCATION_Cities = "/location/get-all?location_id=";
export const GET_COMMUNITY_ALL_REGIONS = "/community/all-region";
export const GET_COMMUNITY_ALL_PAGINATION = "/community/all-community/";
export const GET_COMMUNITY_HOMEPAGE_DATA = "/community/page";
export const GET_EXPERTS = `${portalBaseUrl}/expert/get-all/12`;
export const GET_EXPERT = `${portalBaseUrl}/expert/get-single`;
export const GET_EXPERT_SUGGESTIONS = `${portalBaseUrl}/suggestion/show-expert-suggestion`;
export const GET_EXPERT_REGISTER_MENU = `${portalBaseUrl}/menu/all`;
export const POST_COMMUNITY_CREATE = "/community/create";
export const POST_COMMUNITY_IMAGE = "/media/create";

// Post requests
export const SEND_CONTACT = `${baseUrl}/sendContact`;
export const SEND_EMAIL = `${authUrl}/send-mail`;
export const VERIFY_TOKEN = `${authUrl}/validate-token`;
export const SET_PASSWORD = `${authUrl}/set-password`;
export const LOGIN = `${authUrl}/login`;
export const RESET_PASSWORD = `${authUrl}/reset-password`;
export const SEND_PROJECT = `${baseUrl}/sendProject`;
export const REGISTER = `${authUrl}/register`;
export const VOLUNTEER_PROFILE = `${portalBaseUrl}/volunteer/create`;
export const SEND_EXPERT_REGISTER = `${portalBaseUrl}/auth/register`;
export const SEND_EXPERT_SUGGESTION = `${portalBaseUrl}/suggestion/create-or-update`;
export const SEND_EXPERT_EDUCATION = `${portalBaseUrl}/education/create`;

// Update requests

// Delete requests
