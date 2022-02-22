/**
 * @description 防抖 延迟执行
 * @param {Function} fn 想要防抖包裹的函数
 * @param {number} delay 延迟执行的毫秒数
 * @returns {Function} 放回加工后的函数
 */

const debounceDelay: (fn: Function, delay: number) => Function = (fn, delay) => {
    // 创建一个变量用于储存计时器，由于闭包，不会被垃圾回收机制回收
    let timeout
    return (...args) => {
        // 绑定this
        const self = this
        // 若之前有过定时器则清除定时器
        if(timeout) clearTimeout(timeout)
        // 绑定定时器
        timeout = setTimeout(()=>{
            fn.call(self, ...args)
        },delay)
    }
}

export default debounceDelay