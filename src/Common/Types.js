// Each Type has its own enumeration

// Tab Type
const TabType = {
    HOME: "Home",
    ABOUTME: "About Me",
    FINDME: "Find Me",
    SHADOW: "Shadow",
    RESUME: "Resume",
};

const RouteType = {
    HOME: "/",
    ABOUTME: "/about-me",
    FINDME: "/find-me",
    SHADOW: "/shadow",
    RESUME: "/resume"
};

// Convenient Array of all the tabs
// Note: Order of this array is the order of the tabs in the website
const AllTabs = [TabType.HOME, TabType.ABOUTME, TabType.RESUME, TabType.SHADOW, TabType.FINDME];

// Export

export {
    TabType,
    RouteType,
    AllTabs
};
