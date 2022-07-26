class Backpack {
    constructor(id, name, volume, color, pocketNum, strapLengthL, strapLengthR, lidOpen, dateAcquired, image) {
        this.id = id,
            this.name = name;
        this.volume = volume;
        this.color = color;
        this.pocketNum = pocketNum;
        this.strapLength = {
            left: strapLengthL,
            right: strapLengthR,
        };
        this.lidOpen = lidOpen;
        this.dateAcquired = dateAcquired;
        this.image = image;
    }
    toggleLid(LidStatus) {
        this.lidOpen = LidStatus;
    }
    newStrapLength(lengthLeft, lengthRight) {
        this.strapLengthL.left = lengthLeft;
        this.strapLengthR.right = lengthRight;
    }
    backpackAge() {
        let now = new Date();
        let acquired = new Date(this.dateAcquired);
        let elapsed = now - acquired;
        let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24));
        return daysSinceAcquired;
    }
}
export default Backpack;
