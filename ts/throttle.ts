/**
 * @description 节流
 * @param {function} fn 想要节流包裹的函数
 * @param {number} wait 间隔执行的毫秒数
 * @returns {function} 加工后的函数
 */

const throttle: (fn: Function, wait: number) => Function = (fn, wait) => {
    // 创建一个变量用于储存计时器，由于闭包，不会被垃圾回收机制回收
    let timeout
    return (...args) => {
        // 绑定this
        const self = this
        // 若之前没有定时器则绑定定时器
        if(!timeout) {
            timeout = setTimeout(()=>{
                timeout = null
                fn.call(self, ...args)
            },wait)
        }
    }
}

export default throttle