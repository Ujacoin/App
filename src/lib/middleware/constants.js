export const BASE_URL = "http://18.233.5.112/api/";

export const endPoint = {
  login: "Authentication/login",
  postMethod: "post",
  getMethod: "get",
  getHomeData: "Home/gethomedata",
  bookmarkDigitallibrary: "DigitalLibrary/digitallibrarybookmark",

  getDigitalLibraryUrl: "DigitalLibrary/getalldigitallibrary",
  getDigitalLibraryCategoryUrl: "DigitalLibrary/gedigitallibrarycategory",
  getDigitalLibraryByCategoryUrl: "DigitalLibrary/getdigitallibrarybycategory",
  digitallibrarybookmark:"DigitalLibrary/digitallibrarybookmark",
  searchdigitallibrary:"DigitalLibrary/searchdigitallibrary",
  
  // API List
  signUpAPIUrl: "Authentication/register",
  LoginAPIUrl: "Authentication/login",
  forgotpassword: "Authentication/forgotpassword",
  OTPAPIUrl: "Authentication/verifyotp",
  resendotp: "Authentication/resendotp",
  changepassword: "Authentication/changepassword",
  resetpassword: "Authentication/resetpassword",
  getMyProfile:"Member/profile",

  updateprofile:"Member/updateprofile",

  
  getAllbookmark: "Common/getbookmarklisting",
  getAllFunding: "FundingResources/geallfundingdetails",

  // FAQ
  getFAQList: "Faq/gefaqlistbycategory",
  searchFAQ: "Faq/geallfaqdetails",
  askQuestion : 'ContactUsQuery/addupdatequery',

  roleList: "Member/getmemberrolelist",
  getmemberlist:"Member/getmemberlist",
  getAllMemberList: "Member/getmemberlist",
  getMemberProfile: "Member/profile",
  RedeemPoints: "RedeemPoints/requestearnpoint",
  getRewardPoints: "RedeemPoints/getmemberearnpointdetails",
  filterMyRole: "Member/getmemberlistbyfilter",
  bookmarkMember: "Member/bookmark",
  searchMember: "Member/searchmember",
  allNotification : "Common/getnotificationlog",
  getLibraryCategory: "DigitalLibrary/gedigitallibrarycategory",
  getAllLibraryList: "DigitalLibrary/getalldigitallibrary",
  getLibraryWithFilter: "DigitalLibrary/getdigitallibrarylistbyfilter",
  searchLibrary: "DigitalLibrary/searchdigitallibrary",

  // Funding
  getFundingCategory: "FundingResources/gefundingcategory",
  getAllFundingList: "FundingResources/geallfundingdetails",
  getFundingByCategory: "FundingResources/gefundinglistbycategory",
  bookmarkFunding: "FundingResources/fundingresourcebookmark",
  searchFunding: "FundingResources/searchfundingresource",
  getFundingSection : 'FundingSection/geallfundingsection',

  // Group
  getGroupCataegory: "Group/getgroupcategory",
  getGroup: "Group/getallgroup",
  getgrouplistbyfilter:"Group/getgrouplistbyfilter",
  getGroupCategoryWise: "Group/getgrouplistbyfilter",
  bookmarkGroup: "Group/groupbookmark",
  searchGroup: "Group/searchgroup",
  getGroupDetails: "Group/getgroupdetailsbyid",
  getgroupdetailsbyid:"Group/getgroupdetailsbyid",
  bookmarkGroupResources: "Group/groupattachmentbookmark",
  addMeeting: "Group/groupmeeting",
  discussionList: "Group/getgroupdiscussionlist",
  postDiscussionGroup: "Group/groupdiscussion",
  joinGroup : 'Group/groupjoinmember',
  addGroup : 'Group/addupdategroup',
  groupActivityDays : 'GroupActivityChalange/getgroupactivitydays',
  groupActivityDaysList : 'GroupActivityChalange/getgroupactivtylist',
  groupActivitySubmit : 'GroupActivityChalange/submitactivity',
  getAllGoal: "GoalActivity/geallgoalactivity",
  completeGoal: "GoalActivity/goalactivitycompleted",
  postpondGOal: "GoalActivity/goalpostpone",
  addUpdateGoal: "GoalActivity/addupdategoalactivity",

  // pink table
  getAllPost: "Post/geallpostdetails",
  getSavedPost: "Post/geallsavedpost",
  addPost: "Post/addupdatepost",
  addBookmarkPost: "Post/postbookmarks",
  postLikeAndComments: "Post/postlikecomments",

  // Events
  filterEventList: "Event/geteventlistbyfilter",
  getevent: "Event/getevent",
  geteventlistbyfilter:"Event/geteventlistbyfilter",
  searchEvents: "Event/searchevent",
  bookmarkEvents: "Event/eventbookmark",
  getEventDetails: "Event/geteventbyid",
  registerForEvents: "Event/registereventmember",

  //Common 
  getCountry : 'CountryState/getallcountry',
  getState : 'CountryState/getstatebycountry',
  downloadResources : 'Common/downloadresoureces',

  // Update Profile
  updateProfile : 'Member/updateprofile',
  updateBillingSub : 'authenticate/upgradesubscription',
  cancelBillingSub : 'Authenticate/cancelsubscription',
  changepassword : 'authenticate/changepassword',

  // Registe 
  register : 'authenticate/register',
  forgotPassword : 'authenticate/forgotpassword',
  verifyOTP : 'authenticate/VerifyForgetPasswordOtp',
  resetpassword : 'authenticate/resetpassword',

  // On borcing
  getAllQuestion : 'OnboardingConversation/getallquestionanswer',
  // submitAllQuestion : 'OnboardingConversation/questionanswer',
  submitAllQuestion : 'OnboardingConversation/addupdateonboardingquestions',
  // Countries
  getAllCountries : 'CountryState/getallcountry',
  getAllStates : 'CountryState/getstatebycountry',

  // Reward points 
  getRequestList : 'RedeemPoints/getmemberearnpointdetails',
  acceptreject : 'RedeemPoints/acceptreferredeemrequest',

  // FAQ / Support
  geallfaqdetails:"Faq/geallfaqdetails",
  addupdatequery:"ContactUsQuery/addupdatequery",
};
