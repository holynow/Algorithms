const solution = (angle) => { 
    const acute = 0 < angle && angle < 90;
    const right = angle === 90;
    const obtuse = 90 < angle && angle < 180;
    const flat = angle === 180;
    if (acute) {
        return 1;
    } else if (right) {
        return 2;
    } else if (obtuse) {
        return 3;
    } else if (flat) {
        return 4;
    }
 
};
