import React, { createContext, useState, useEffect } from "react";
// import { video_data } from "../assets/data";
import axios from "axios";

export const YtContext = createContext(null);

const YtContextProvider = (props) => {

    const [sideBarVisibility, setSideBarVisibility] = useState(true)
    const [videosData, setVideosData] = useState([]);
    const [data, setData] = useState([])
    const [sideBarResize, setSideBarResize] = useState(window.innerWidth > 1200)
    const [sideBarTranslateVisibility, setSideBarTranslateVisibility] = useState(false)
    
    const API_KEY=process.env.REACT_APP_YT_API_KEY ;
    console.log(API_KEY);
    const max_Result = '25'


    const formatCount = (count) => {
        if (count >= 1000 && count < 1000000) {
            return Math.floor(count / 1000).toFixed(0).substring(0, 3) + 'K views';
        } else if (count >= 1000000) {
            return (count / 1000000).toFixed(1).substring(0, 3) + 'M views';
        }
    };
    const formatLikeCount = (count) => {
        if (count >= 1000 && count < 1000000) {
            return Math.floor(count / 1000).toFixed(0).substring(0, 3) + 'K';
        } else if (count >= 1000000) {
            return (count / 1000000).toFixed(1).substring(0, 3) + 'M';
        }
    }
    const formatSubsCount = (count) => {
        if (count >= 1000 && count < 1000000) {
            return Math.floor(count / 1000).toFixed(0).substring(0, 3) + 'K subscribers';
        } else if (count >= 1000000) {
            return (count / 1000000).toFixed(2).substring(0, 4) + 'M subscribers';
        }
    }

    const getVideoDuration = (durationString) => {
        if (!durationString) {
            return 'Unknown duration';
        }

        if (typeof durationString !== 'string') {
            return 'Invalid duration format';
        }

        const matchPattern = /^PT(\d+H)?(\d+M)?(\d+S)?$/;
        if (!matchPattern.test(durationString)) {
            return 'Invalid duration format';
        }

        const [, hoursMatch, minutesMatch, secondsMatch] = matchPattern.exec(durationString);
        const hours = hoursMatch ? parseInt(hoursMatch, 10) : 0;
        const minutes = minutesMatch ? parseInt(minutesMatch, 10) : 0;
        const seconds = secondsMatch ? parseInt(secondsMatch, 10) : 0;

        const formattedHours = hours.toString().padStart(2, '0');
        const formattedMinutes = minutes.toString().padStart(2, '0');
        const formattedSeconds = seconds.toString().padStart(2, '0');
        if (/^PT(\d+)M?(\d+)S$/.test(durationString)) {
            return `${formattedMinutes}:${formattedSeconds}`;
        }
        else {
            return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
        }
    };

    const fetchPublishedTime = (publishedTime) => {
        const now = new Date();
        const published = new Date(publishedTime);
        const diff = now - published;

        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const weeks = Math.floor(days / 7);
        const months = Math.floor(days / 30);
        const years = Math.floor(days / 365);

        if (years > 0) return `${years} year${years > 1 ? 's' : ''} ago`;
        if (months > 0) return `${months} month${months > 1 ? 's' : ''} ago`;
        if (weeks > 0) return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
        if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
        if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
        if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
        return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
    }

    const sideBarTranslateToggle = () => {
        setSideBarTranslateVisibility(!sideBarTranslateVisibility)
    }


    const fetchYoutubeVideos = async () => {
        try {
            const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=player&part=statistics&part=contentDetails&chart=mostPopular&maxResults=${max_Result}&key=${API_KEY}`)

            setVideosData(response.data.items)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchYoutubeVideos()
    }, [])


    const getVideoData = async () => {
        let tempArray =videosData.length > 0 && videosData.map((el) => el.snippet.channelId)
        setData(tempArray)
    }
    useEffect(() => {
        getVideoData()
    }, [videosData])

    const fetchData = async () => {
        if (data.length > 0) {
            try {
                data.forEach(async (element, index) => {
                    let response = await axios.get(
                        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&part=statistics&id=${element}&key=${API_KEY}`
                    )

                    videosData[index].snippet.channel = response.data.items[0]
                    setVideosData(videosData)
                });
            } catch (error) {
                console.error(error)
            }
        }
    }


    useEffect(() => {
        if (data.length>0) {
            fetchData()
        }
    }, [data, getVideoData])

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1200) {
                setSideBarResize(false)
                setSideBarVisibility(false)
            } else {
                setSideBarResize(true)
                setSideBarVisibility(true)
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    

    const contextValue = {
        setVideosData,
        sideBarVisibility,
        setSideBarVisibility,
        videosData,
        API_KEY,
        max_Result,
        setData,
        data,
        formatCount,
        getVideoDuration,
        fetchPublishedTime,
        formatLikeCount,
        formatSubsCount,
        // processDescriptionText,
        sideBarTranslateVisibility,
        setSideBarTranslateVisibility,
        sideBarTranslateToggle,
        // show,
    }

    return (
        <YtContext.Provider value={contextValue}>
            {props.children}
        </YtContext.Provider>
    )
}
export default YtContextProvider;