// Each day, height for a plant you grow increases by a fixed amount represented by the integer upSpeed. But due to lack of sunlight, the plant decreases in height every night, by an amount represented by downSpeed.

// Since you grew the plant from a seed, it started at height 0 initially. Given an integer desiredHeight, your task is to find how many days it'll take for the plant to reach this height.

const growingPlant = (upSpeed, downSpeed, desiredHeight) => {
    if (upSpeed > desiredHeight) return 1
    const combinedSpeed = upSpeed-downSpeed
    const penultimateHeight = desiredHeight-upSpeed
    if (penultimateHeight < combinedSpeed) {
        return Math.floor(desiredHeight/ combinedSpeed)
    } else if (penultimateHeight >= combinedSpeed) {
        return (Math.floor(penultimateHeight/ combinedSpeed) + 1)
    }
}