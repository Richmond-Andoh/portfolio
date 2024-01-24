export const getImageUrl = (path) => {
    return new URL(`/Assets/${path}`, import.meta.url).href
}

