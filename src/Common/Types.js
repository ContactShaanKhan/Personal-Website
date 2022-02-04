// Each Type has its own enumeration

// Tab Type
const TabType = {
    HOME: "Home",
    ABOUTME: "About Me",
    FINDME: "Find Me",
    SHADOW: "Shadow"
};

const RouteType = {
    HOME: "/",
    ABOUTME: "/about-me",
    FINDME:"/find-me",
    SHADOW:"/shadow"
};

// Convenient Array of all the tabs
const AllTabs = [TabType.HOME, TabType.ABOUTME, TabType.FINDME, TabType.SHADOW];

// Export

export {
    TabType,
    RouteType,
    AllTabs
};
