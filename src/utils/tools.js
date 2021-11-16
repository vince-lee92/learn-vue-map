const tools = {
    /**
     * 把秒数转化为天、时、分、秒
     * 参数value是秒数
     */
    formatSeconds(value) {
        var secondTime = parseInt(value) // 秒
        var minuteTime = 0 // 分
        var hourTime = 0 // 小时
        var dayTime = 0 // 天
        var result = ''
        if (value < 60) {
            result = secondTime + '秒'
        } else {
            if (secondTime >= 60) { // 如果秒数大于60，将秒数转换成整数
                // 获取分钟，除以60取整数，得到整数分钟
                minuteTime = parseInt(secondTime / 60)
                // 获取秒数，秒数取佘，得到整数秒数
                secondTime = parseInt(secondTime % 60)
                // 如果分钟大于60，将分钟转换成小时
                if (minuteTime >= 60) {
                    // 获取小时，获取分钟除以60，得到整数小时
                    hourTime = parseInt(minuteTime / 60)
                    // 获取小时后取佘的分，获取分钟除以60取佘的分
                    minuteTime = parseInt(minuteTime % 60)
                    if (hourTime >= 24) {
                        // 获取天数， 获取小时除以24，得到整数天
                        dayTime = parseInt(hourTime / 24)
                        // 获取小时后取余小时，获取分钟除以24取余的分；
                        hourTime = parseInt(hourTime % 24)
                    }
                }
            }
           /* if (secondTime > 0) {
                secondTime = parseInt(secondTime) >= 10 ? secondTime : '0' + secondTime
                result = '' + secondTime + '秒'
            }*/
            if (minuteTime > 0) {
                minuteTime = parseInt(minuteTime) >= 10 ? minuteTime : '0' + minuteTime
                result = '' + minuteTime + '分钟' + result
            }
            if (hourTime > 0) {
                result = '' + parseInt(hourTime) + '小时' + result
            }
            if (dayTime > 0) {
                result = '' + parseInt(dayTime) + '天' + result
            }
        }
        return result
    }
}
export default tools
