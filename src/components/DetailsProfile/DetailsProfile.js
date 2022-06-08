import React from 'react';
import ChairGuy from "../../asserts/Mask Group 6.png"
import Flag from "../../asserts/Mask Group 3.png"
import Box from '@mui/material/Box';
import { IoShieldCheckmark } from 'react-icons/io5';
import Button from "../helper/buttons/Button";
import Divider from '@mui/material/Divider';

const DetailsProfile = () => {
    return (
        <div className="border-0 m-0 p-0 ">
            <Box sx={{ width: '100%', bgcolor: '#1D1D1D' }} className="text-white border-0 h-[523px] ">

            </Box>
            <div className="pt-[47px] pb-[53px] lg:md:pl-[53px] rounded-[10px] lg:md:shadow-[#6361613d] lg:md:shadow-md bg-[#FFFFFF] lg:md:mx-[73px]  mt-[-443px]">
                <div className="flex pl-[91px] justify-between ">
                    <div className="flex">
                        <img src={ChairGuy} alt="" className="lg:md:w-auto w-[129px] lg:md:h-auto h-[141px]" />
                        <div className="lg:md:ml-[29px] ml-[43px]">
                            <h2 className="lg:md:text-[30px] text-[24px] font-medium">Full Name</h2>
                            <div className="flex lg:md:mb-[24px] lg:md:mt-[0] mt-[30px] items-center">
                                <img src={Flag} className="mr-[15px] w-[40px] " alt="" />
                                <p className="lg:md:text-[14px] text-[11px]  font-medium italic">Current city</p>
                            </div>
                            <p className="lg:md:text-[18px] text-[15px] font-medium">12 Years of experience</p>
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="46" height="46" viewBox="0 0 46 46">
                                    <image id="noun_thumb_up_3139185" data-name="noun_thumb up_3139185" width="46" height="46" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAArwAAAK8CAYAAAANumxDAAAACXBIWXMAAAsTAAALEwEAmpwYAAA50WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMjEgNzkuMTU0OTExLCAyMDEzLzEwLzI5LTExOjQ3OjE2ICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpPC94bXA6Q3JlYXRvclRvb2w+CiAgICAgICAgIDx4bXA6Q3JlYXRlRGF0ZT4yMDIxLTA5LTA1VDA4OjE2OjA3KzA1OjMwPC94bXA6Q3JlYXRlRGF0ZT4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMjItMDEtMTJUMTA6MzM6MTQrMDU6MzA8L3htcDpNb2RpZnlEYXRlPgogICAgICAgICA8eG1wOk1ldGFkYXRhRGF0ZT4yMDIyLTAxLTEyVDEwOjMzOjE0KzA1OjMwPC94bXA6TWV0YWRhdGFEYXRlPgogICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3BuZzwvZGM6Zm9ybWF0PgogICAgICAgICA8cGhvdG9zaG9wOkNvbG9yTW9kZT4zPC9waG90b3Nob3A6Q29sb3JNb2RlPgogICAgICAgICA8eG1wTU06SW5zdGFuY2VJRD54bXAuaWlkOmE2OGI1NzM3LTMxZTctMTc0OS05YTRiLTFkMjAxOTE5MzhmNjwveG1wTU06SW5zdGFuY2VJRD4KICAgICAgICAgPHhtcE1NOkRvY3VtZW50SUQ+eG1wLmRpZDo2ODEzMDdkMS1lYzY4LWE3NGQtYjUyMi00MWZhZDE1MmVkZWM8L3htcE1NOkRvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+eG1wLmRpZDo2ODEzMDdkMS1lYzY4LWE3NGQtYjUyMi00MWZhZDE1MmVkZWM8L3htcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkhpc3Rvcnk+CiAgICAgICAgICAgIDxyZGY6U2VxPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5jcmVhdGVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6NjgxMzA3ZDEtZWM2OC1hNzRkLWI1MjItNDFmYWQxNTJlZGVjPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDIxLTA5LTA1VDA4OjE2OjA3KzA1OjMwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDphNjhiNTczNy0zMWU3LTE3NDktOWE0Yi0xZDIwMTkxOTM4ZjY8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMjItMDEtMTJUMTA6MzM6MTQrMDU6MzA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpTZXE+CiAgICAgICAgIDwveG1wTU06SGlzdG9yeT4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+NjU1MzU8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjcwMDwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj43MDA8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/PrvcWhgAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAJL5JREFUeNrs3VuXG9Wd/+G9a0uqxjEBDLZxwCQY21zN65r/W5rXNf8bH7NiAzZ2OAfokmrXby66OSUcfOhulbaeZ625mqyk/a2W9JG6VJUjIgEAQKs6EwAAIHgBAEDwAgCA4AUAAMELAACCFwAABC8AAIIXAAAELwAACF4AABC8AAAgeAEAQPACAIDgBQBA8AIAgOAFAADBCwAAghcAAAQvAAAIXgAAELwAAAheAAAQvAAAIHgBAEDwAgCA4AUAAMELAACCFwAAwQsAAIIXAAAELwAACF4AADgzCxOk9Jf/9/+NwN559D//ZQReXrd4mLvF6ymij6glpcgpIqXcRc6lppwOYxo/T1P9m7FgOyJC8Po1AOBZ5bJ8FBGX0jQe/YVwGlNM46+8wk450tillJYppVdTSnEcyFPO5auowwVrAmf23twEAPxB5t7Opd+klCLq5u0fY/dFTGMXdXjjOIAjLw6+si8geAHYllu5rMaU4kbU4VT+Ihjj4Z9TSpFyN6Vu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" />
                                </svg>

                                <p className="ml-[13px] text-[23px] align-middle font-medium text-[#707070]">993</p>
                            </div>
                            <p className="text-[#707070] text-[14px] font-medium lg:md:mt-[20px]">Liked & apricated by users</p>
                        </div>
                    </div>
                    <div className="mr-[124px] text-[#1D1D1D] flex flex-col items-center"> 
                        <h2 className="text-[22px] font-bold">INR 3500</h2>
                        <h2 className='text-[50px] p-2 py-[61px]'><IoShieldCheckmark /></h2>
                        <Button
                            btn_text="Connect"
                            btn_link="/postRequirementNow"
                        />
                    </div> *
                </div>
                <div className="flex justify-between pr-[73px]">
                    <p className="text-[16px] font-light ml-[91px] mt-[65px]">Dear Client,  I am willing to provide you a best plan for your<br /> house a best plan for  your house a best plan for  your house
                        a best plan for  your house a best plan for  your house</p>
                </div>
                <Divider variant="middle" className="mt-[51.5px] mx-[57px] mb-[42.5px]" />
                <div className="ml-[91px]">
                    <h2 className="text-[#1B3548] text-[25px] font-medium mb-[44px]">Quotes Sent History</h2>
                    <div>
                        <p className="text-[#1D1D1D] text-[18px]">Build a house plan</p>
                        <p className="text-[#1D1D1D] text-[15px]">Feb 18, 2019</p>
                    </div>
                    <div className="mt-[24px]">
                        <p className="text-[#1D1D1D] text-[18px]">Build a house plan</p>
                        <p className="text-[#1D1D1D] text-[15px]">Feb 18, 2019</p>
                    </div>
                    <div className="mt-[24px]  mb-[22px]">
                        <p className="text-[#1D1D1D] text-[18px]">Build a house plan</p>
                        <p className="text-[#1D1D1D] text-[15px]">Feb 18, 2019</p>
                    </div>
                    <a href className='text-[#1D43A2] text-[16px] underline  hover:cursor-pointer' >view more</a>
                </div>
                <Divider variant="middle" className="mt-[66px] mx-[57px] mb-[42.5px]" />
                <div className="ml-[91px]">
                    <h2 className="text-[#1B3548] text-[25px] font-medium ">Specializations and skills</h2>
                    <div>
                        <p className="text-[#1D1D1D] text-[22px] mt-[44px]">Skills</p>
                        <ul style={{ listStyleType: "circle" }} className="lg:md:flex block flex-cols-3 text-[16px] 
                        text-[#707070] mt-[40.5px] pl-4">
                            <div className="mr-[140px]">
                                <li>Tooth cleaning</li>
                                <li>Root Canal Therapy</li>
                            </div>
                            <div className="mr-[140px]">
                                <li>Composite bonding</li>
                                <li>Implants</li>
                            </div>
                            <div>
                                <li>Composite bonding</li>
                                <li>Implants</li>
                            </div>
                        </ul>
                    </div>

                    <div>
                        <p className="text-[#1D1D1D] text-[22px] mt-[49.5px]">Specialization</p>
                        <ul style={{ listStyleType: "circle" }} className="lg:md:flex flex-cols-3 text-[16px]
                        text-[#707070] mt-[40.5px] pl-4">
                            <div className="mr-[140px]">
                                <li>Children Care</li>
                                <li>Oral care</li>
                            </div>
                            <div className="mr-[140px]">
                                <li>Prosthodontist</li>
                                <li>Periodontist</li>
                            </div>
                            <div>
                                <li>Orthodontist</li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsProfile;