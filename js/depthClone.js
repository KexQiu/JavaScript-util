/**
 * @description 深度克隆
 * @param {*} target 想要克隆的目标
 * @returns {*} 克隆的结果
 */

const depthClone = target => {
    //判断是否为引用数据，如果不是直接返回
    let type = typeof target
    if( type === 'function') return cloneFunction(target)
    if( type === null || type !== 'object') return target
    //设置一个字典用于储存已经添加过的值（针对循环引用
    let set = new Set()
    set.add(target)

    //clone 函数
    const cloneFunction = target => {
        let funStr = target.toString()
        return target.prototype ? eval(`(${funStr})`) : eval(funStr)
    }

    const clone = target => {
        //新建一个对象或数组
        const newObject = target instanceof Array ? new Array() : new Object()
        //获取target的可枚举键值对
        let targetKeys = Reflect.ownKeys(target)
        //将键值对添加至新建的对象中
        targetKeys.forEach(e => {
            //判断空值
            if(target[e] === null) return Reflect.set(newObject,e,target[e])
            //判断是否为函数
            if( typeof target[e] === 'function') return Reflect.set(newObject,e,cloneFunction(target[e]))
            //如果值为引用类型，则再次调用clone函数
            if(!set.has(target[e]) && typeof target[e] === 'object') {
                set.add(target[e])
                return Reflect.set(newObject,e,clone(target[e]))
            }
            Reflect.set(newObject,e,target[e])
        })
        return newObject
    }
    return clone(target)
}


export default depthClone
