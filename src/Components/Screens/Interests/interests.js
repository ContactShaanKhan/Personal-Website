import { Grid, Typography } from "@mui/material";
import HorizontalBar from "./horizontalBar";

export default function Interests() {

    const textStyle = {
        whiteSpace: "pre-wrap",
        lineHeight: 2,
        fontSize: "20px",
    };

    return (
        <div>
            <div>
                <HorizontalBar>Technology</HorizontalBar>
                <Typography sx={textStyle}>
                    {`I love to build, repair, and flip computers.  This is a long running hobby of me trying to keep old computer hardware alive and also enjoying the luxury of new hardware to do all the programming I want.   Also I like mechanical keyboards, particularly ones with bucking spring key switches such as my old 1993 IBM Model M or new 10-keyless 2021 Unicomp Model M.`}
                </Typography>
            </div>
            <div>
                <HorizontalBar>Volunteering</HorizontalBar>
                <Typography sx={textStyle}>
                    {`I have been volunteering a long time and only recently took a break to focus on the tough workload of college.  I have had the honor to receive the President's Volunteer Service Award twice (2017 & 2018).  Virtually all of the volunteering I did was at my local public library and the most prominent one I participated in was homework help which was a weekly event in which I would help student's grades K-6th with homework.`}
                </Typography>
                <hr />
                <Typography sx={textStyle}>
                    {`Moreover, I was awarded the 2019 South Huntington Public Library Friends of the Library Scholarship in recognition of my continual and frequent community service.\n\nFind me in the South Huntington Public Library newsletter here.`}
                </Typography>
            </div>
            <div>
                <HorizontalBar>Cars</HorizontalBar>
                <Typography sx={textStyle}>
                    {`I own a 2009 Ford Crown Victoria Police Interceptor.  It has been my gateway into learning how to repair, modify, and enjoy cars beyond their basic utility.  I enjoy performing all the repairs on my own regardless of difficulty - ranging from a basic oil change to changing out my steering column.  Moreover, any car-buff may know that the Crown Victoria is a fun vehicle to hotrod.  My next project car will be a Foxbody Mustang.`}
                </Typography>
            </div>
            <div>
                <HorizontalBar>Photography</HorizontalBar>
                <Typography sx={textStyle}>
                    {`I love to take photos with my Canon 5D Classic DLSR.  Despite being a 10 year old full frame camera, I am still able to take my camera and take a picture of whatever I would want to.  I love to take photos of my dog, cars (typically classic cars), and whatever landscape I encounter.`}
                </Typography>
            </div>
        </div>
    );
}