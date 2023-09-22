import { IIMAGE_DIMENSIONS } from "./types";
const DWEB_IMAGE_DIMENSIONS: IIMAGE_DIMENSIONS = Object.seal({
    BACKGROUND_IMAGE: "w=1920&h=1080", //   16:9
    LIGHT_BOX_IMAGES: "w=1600&h=500", //     16:5
    HERO_IMAGE: "w=1280&h=720", //          16:9
    BLOG_IMAGE: "w=1200&h=630", //          3:2
    PROFILE_IMAGE: "w=800&h=800", //        1:1
    HERO_IMAGE_SQUARE: "w=700&h=700", //    1:1
    LIGHT_BOX_IMAGES_SQUARE: "w=500&h=500", // 1:1
    WEBSITE_BANNER: "w=250&h=250", //       1:1
    LOGO_RECTANGLE: "w=250&h=100", //       3:2
    THUMBNAIL_IMAGE: "w=150&h=150", //      1:1
    LOGO_SQUARE: "w=100&h=100", //          2:3
    SOCIAL_MEDIA_ICONS: "w=32&h=32", //     1:1
    FAVICON: "w=16&h=16" //                 1:1
});

const TAB_IMAGE_DIMENSIONS: IIMAGE_DIMENSIONS = Object.seal({
    BACKGROUND_IMAGE: "w=1280&h=720", //    16:9
    LIGHT_BOX_IMAGES: "w=900&h=280", //      16:5
    HERO_IMAGE: "w=720&h=405", //           16:9
    BLOG_IMAGE: "w=675&h=355", //           3:2
    PROFILE_IMAGE: "w=450&h=450", //        1:1
    HERO_IMAGE_SQUARE: "w=400&h=400", //    1:1
    LIGHT_BOX_IMAGES_SQUARE: "w=280&h=280", // 1:1
    WEBSITE_BANNER: "w=140&h=140", //       1:1
    LOGO_RECTANGLE: "w=140&h=60", //        3:2
    THUMBNAIL_IMAGE: "w=85&h=85", //        1:1
    LOGO_SQUARE: "w=60&h=60", //            2:3
    SOCIAL_MEDIA_ICONS: "w=20&h=20", //     1:1
    FAVICON: "w=15&h=15" //                 1:1
});

const MWEB_IMAGE_DIMENSIONS: IIMAGE_DIMENSIONS = Object.seal({
    BACKGROUND_IMAGE: "w=720&h=412", //     16:9
    LIGHT_BOX_IMAGES: "w=580&h=180", //      16:5
    HERO_IMAGE: "w=412&h=232", //           16:9
    BLOG_IMAGE: "w=500&h=260", //           3:2
    PROFILE_IMAGE: "w=400&h=400", //        1:1
    HERO_IMAGE_SQUARE: "w=250&h=250", //    1:1
    LIGHT_BOX_IMAGES_SQUARE: "w=180&h=180", // 1:1
    WEBSITE_BANNER: "w=95&h=95", //         1:1
    LOGO_RECTANGLE: "w=95&h=40", //         3:2
    THUMBNAIL_IMAGE: "w=55&h=55", //        1:1
    LOGO_SQUARE: "w=40&h=40", //            2:3
    SOCIAL_MEDIA_ICONS: "w=12&h=12", //     1:1
    FAVICON: "w=10&h=10" //                 1:1
});

export { DWEB_IMAGE_DIMENSIONS, TAB_IMAGE_DIMENSIONS, MWEB_IMAGE_DIMENSIONS };
