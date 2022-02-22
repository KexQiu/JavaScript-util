/**
 * @description 数组去重
 * @param {*} arr 想要去重的数组
 * @returns 去重后的数组
 */

const uniqueArray = arr => {
    //判断是否为数组
    if(Object.prototype.toString.call(arr) !== '[object Array]') throw new Error('is not a array!')
    //将数组转化为set
    let set = new Set(arr)
    //再将set转会数组
    return Array.from(set)
}

export default uniqueArray