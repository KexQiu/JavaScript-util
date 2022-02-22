// 数组去重

const uniqueArray = arr => {
    //将数组转化为set
    let set = new Set(arr)
    //再将set转会数组
    return Array.from(set)
}

export default uniqueArray