import { TabType } from "../Common/Types";

// Creates an API for getting certain sections of information

const PATHTOJSON = "./Data/*/index.json";

const CURRENTSCREENS = [];
CURRENTSCREENS[TabType.HOME] = "Home";
CURRENTSCREENS[TabType.ABOUTME] = "AboutMe";

function getJSONPath(tabType) {
    switch (tabType) {
        case TabType.HOME:
            return PATHTOJSON.replace('*', CURRENTSCREENS[TabType.HOME]);

        case TabType.ABOUTME:
            return PATHTOJSON.replace('*', CURRENTSCREENS[TabType.ABOUTME]);

        default:
            return null;
    }
}

const Information = { /* Will Hold the methods we want to export*/ };

// Returns an array of length 2
//  Index 0 Holds an array of all the text file names
//  Index 1 Holds an array of all the image file names
Information.getAll = function (tabType) {
    const out = [[], []];

    let path;

    switch (tabType) {
        case TabType.HOME:
            path = PATHTOJSON.replace('*', CURRENTSCREENS[TabType.HOME]);

        case TabType.ABOUTME:
            path = PATHTOJSON.replace('*', CURRENTSCREENS[TabType.ABOUTME]);

        default:
            return null;
    }

    return out;
}

// Expects a name of a certain text file, which would be aquired by a user calling getAll()
Information.getText = function (name) {

}

Information

export default Information;
