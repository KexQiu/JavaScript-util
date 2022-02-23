/**
 * @description 用于获取get请求参数
 * @returns {obj} 返回所有get请求参数
 */

const getGetParameter: () => Object = () => {
    // 分割地址
    const locationArr: string[] = location.href.split('?')
    // 如果没有携带参数则返回空
    if(locationArr.length === 1) return null
    // 提取参数字符串
    let querys: string[] = locationArr[1].split('&')
    // 创建对象用于储存参数
    let obj = new Object()
    // 遍历参数数组存入对象
    querys.forEach(e => {
        let key2value = e.split('=')
        Reflect.set(obj, key2value[0], key2value[1])
    })
    return obj
}

export default getGetParameter