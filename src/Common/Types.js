// Each Type has its own enumeration

// Tab Type
const TabType = {
    HOME: "Home",
    FINDME: "Find Me",
    SHADOW: "Shadow",
    RESUME: "Resume",
    INTERESTS: "Interests"
};

const RouteType = {
    HOME: "/",
    FINDME: "/find-me",
    SHADOW: "/shadow",
    RESUME: "/resume",
    INTERESTS: "/interests"
};

// Convenient Array of all the tabs
// Note: Order of this array is the order of the tabs in the website
const AllTabs = [TabType.HOME, TabType.INTERESTS, TabType.RESUME, TabType.SHADOW, TabType.FINDME];

// Export

export {
    TabType,
    RouteType,
    AllTabs
};
