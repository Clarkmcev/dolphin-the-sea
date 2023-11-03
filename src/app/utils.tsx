export function secondsToHms(d : number) {
    d = Number(d);
    var m = Math.floor(d / 60);
    var s = Math.floor(d % 60);

    var mDisplay = m > 0 ? (m < 10 ? '0' + m : m) + ":" : "00:";
    var sDisplay = s > 0 ? (s < 10 ? '0' + s : s) : "00";
    return mDisplay + sDisplay; 
}